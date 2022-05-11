import React from "react"
import bootstrap from "bootstrap"
import { Container,Col,Row } from "react-bootstrap"
import { io } from "socket.io-client";
import { useEffect,useRef } from "react"


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
function JoinRoom(){
  const socket = useRef()
    useEffect(() => {
        socket.current = io('https://socketwordle.herokuapp.com/', { transports : ['websocket'] });;
    
        socket.current.on("SocketId", (socketId) => {
        //   console.log("connected to server");
           console.log(socketId)    
      }, [])});

   



    return (
        <form>

            <Container className='justify-content-center' >
                <Row className='text-center' >
                    <h2>Join Room!</h2>
                </Row>

  
                <Row style={margin}>
                    <button type="submit" className="btn btn-primary"style={button}>Join</button>  
                </Row>
            </Container>
            
        </form>
    )
}


export default JoinRoom