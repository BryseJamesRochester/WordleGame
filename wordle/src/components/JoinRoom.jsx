import React from "react"
import bootstrap from "bootstrap"
import { Container,Col,Row } from "react-bootstrap"
import { io } from "socket.io-client";
import { useEffect,useRef } from "react"
import { Card } from "react-bootstrap";
import { useState, createContext } from "react";
import PlayerCard from "./PlayerCard";

export const AppContext = createContext()

const formWith = { 
    width: 250
}

const margin = {
    marginTop:  10,
    marginBottom :  10,
}

const button = {
   
     width:'100px',
    margin:'auto',

}

const form = {
    width:'auto',
    margin:'auto'
}

var players = []



function JoinRoom(){

  const [subscribed, alreadySubscribed] = useState(false)  
  const [playerList, setPlayerList] = useState()
  const socket = useRef()
  if(!subscribed){
    socket.current = io('https://socketwordle.herokuapp.com/', { transports : ['websocket'] });
    alreadySubscribed(true)
  }
    useEffect(() => {
        if(subscribed)
        socket.current.on("SocketId", (socketId) => {
           console.log("connected to server");
           console.log(socketId)   
        
        const obj = { 
            socketId: socketId,
            userName: "test",
            opponentSocketId: ""
        }
        console.log(obj)
        socket.current.emit("NewPlayer", obj)
        socket.current.on("error", (response) => {
            console.log(response)
        })
        socket.current.on("NewPlayerInRoom", (response) => {
         
            alert("New player joined: " + response.userName)

            })
        })

        socket.current.on("AllPlayers", (response) => {
            players = response
            setPlayerList(response)
        })

        socket.current.on("PlayerLeave", (playerId) =>{
            for(let i = 0; i < players.length; i++){
                if(players[i].socketId === playerId)
                {
                    console.log(players[i].userName + " has left the lobby")
                    players.splice(i,1)
                    break
                }
            }
            setPlayerList(players)
        })
      }, []);




    useEffect( () => { 
        // const parent = document.getElementById('playerList')
        console.log(playerList)
        // for(let i = 0; i < playerList.length; i++){
        //     var childCard = document.createElement('Card')
        //     var body = document.createElement('Card.Body')
        //     var text = document.createElement('Card.Text')
        //     text.innerHTML = playerList[i].userName
        //     var challenge = document.createElement('button')
        //     challenge.className = 'btn btn-primary'
        //     challenge.type = 'button'
        //     challenge.innerHTML = 'Challenge'

        //     body.appendChild(text)
        //     body.appendChild(button)
        //     childCard.appendChild(body)
        //     parent.appendChild(childCard)
        // }
    },[playerList])



    return (
        <div>
            <Card>
                <Card.Body>
                     <Card.Title>Players</Card.Title>
                     <Card.Text>
                        <div id="playerList">
                            <AppContext.Provider value ={{playerList}}>
                                <PlayerCard />
                            </AppContext.Provider>
                        </div>
                     </Card.Text>
                </Card.Body>
                
            </Card>
        </div>
    )
}


export default JoinRoom