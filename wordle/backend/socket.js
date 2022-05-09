const playerControllers = require('./controllers/playerOnlineCotroller');


var counter = 0;
require("dotenv").config(); // ALLOWS ENVIRONMENT VARIABLES TO BE SET ON PROCESS.ENV SHOULD BE AT TOP
const fs = require('fs');
const express = require('express');
const app = express();
const socket = require('socket.io');
const { SocketAddress } = require("net");
const Post = require('./models/Post');
const PlayerOnline= require('./models/PlayerOnline');
const { countReset } = require('console');
//const server = require('http').createServer(app);
CLIENTS = {};

//const socket = require('socket.io')(server,{cors:{origin:"*"}});
// Middlewar
app.use(express.static('public'));
app.use(express.json()); // parse json bodies in the request object
const PORT = process.env.PORT || 3006;
console.log(process.env.PORT);
const server = app.listen(PORT, () => console.log(`Lisening on port :3000`))
const io = socket(server)
app.use("/posts", require("./routes/postRoutes"));
//Socket.io Connection------------------
io.on('connection', (socket) => {
    counter ++;
    io.to(socket.id).emit('SocketId',socket.id)
    

    socket.on('NewPlayer', async function incoming(message){

           const obj = JSON.parse(message);
           const socketId = obj.socketId
           console.log(obj.userName + " joined the romm ");
           console.log(counter + " players in the room")
           let player = new PlayerOnline(obj.socketId,obj.userName,obj.opponentSocketId);
           player.save();
           const allPlayers = await PlayerOnline.getAllOnlinePlayers();
     
           let json = {
             socketId:player.socketId,
             userName:player.userName,
             opponentSocketId:player.opponentSocketId
           }
           io.to(player.socketId).emit('AllPlayers',allPlayers[0]);  
           socket.broadcast.emit('NewPlayerInRoom',json);     
     }
    );

    socket.on('PlayerLeave', async function incoming(socketId){
           try{
                await PlayerOnline.deleteBySocketId(socketId)
                socket.broadcast.emit("PlayerLeave",socketId)
           }catch(err){
                console.log(err) 
           }
    })

    socket.on('TryMatching', async function incoming(json){
         try{
              const obj = JSON.parse(json);
              const socketId = obj.socketId;
              const res = await PlayerOnline.findPlayerById(socketId);
            
              if(res[0].length === 0){
                 let json1 = {
                   socketId:socket.id,
                   userName:obj.userName,
                   opponentSocketId:" "
                }
               console.log(socket.id + " is trying to challenge " + obj.userName)
               socket.to(obj.socketId).emit('TryMatching',json1);
              
              }else{
              
                console.log("Can not join");
                const soc = socket.id;
                io.to(soc).emit("CanNotMatching",0)
                
                
              }
         }catch(err){
           console.log(err)
         }
    } )

    socket.on('Reject',function incoming(socketId){
          console.log(socketId + " got rejected")
          socket.to(socketId ).emit('Reject',"Not")
    })

    socket.on('Accept', async function incoming(opponentSocketId){
      try{
          const opponentSocketId1 = opponentSocketId
          const socketId = socket.id
          await PlayerOnline.updateOpponentSocketId(socketId,opponentSocketId1);
          await PlayerOnline.updateOpponentSocketId(opponentSocketId1,socketId);
          console.log(socketId + " and " + opponentSocketId1 + " are both ready")
          socket.to(opponentSocketId1).emit("ReadyGo",socketId);
          io.to(socketId).emit("ReadyGo",opponentSocketId)
      }catch(err){
        console.log(err)
      }
    })

    socket.on('Winner',async function incoming(json){
         
        const jsonOb = JSON.parse(json)
        console.log("Winner is " + jsonOb.userName)
        const id = jsonOb.opponentSocketId
        socket.to(id).emit('Losser',"None")
    })

  
     socket.on('Reset',async function incoming(socketId) {
           
        try{
        const id = socketId;
        console.log(id)
        await PlayerOnline.updateOpponentSocketId(socketId," ")
        }catch(err){
           console.log(err)
        }
        
     })

    socket.on('disconnect', async function() {
      counter --;

      await PlayerOnline.deleteBySocketId(socket.id)
      console.log(socket.id + " left the room ")
      socket.broadcast.emit("PlayerLeave",socket.id)
   })

  
  })

 
// Global Error Handler. IMPORTANT function params MUST start with err
app.use((err, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);

  res.status(500).json({
    
    message: "Something went rely wrong",
  });
});
app.get('/', (req, res) => res.send('Hello World!'))



