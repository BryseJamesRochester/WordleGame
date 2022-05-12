
import { Card } from "react-bootstrap";
import {useContext} from "react"
import { AppContext } from "./JoinRoom";

function PlayerCard(){ 
 const playerList = useContext(AppContext)




    return(
        <Card>
            <Card.Body>
                <Card.Text>player1</Card.Text>
                <button  type="button" class="btn btn-primary">Challenge</button>
            </Card.Body>
        </Card>
    )


}

export default PlayerCard