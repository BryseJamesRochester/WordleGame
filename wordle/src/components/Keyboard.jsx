import React, {useContext, useEffect, useCallback, useState} from 'react'
import Button from 'react-bootstrap/Button'
import { Container, Row, Col } from 'react-bootstrap'
import { AppContext } from "./Game"
import { checkGameState } from './Words';
import axios from 'axios';
var col = 0;
//btn colors
var yellow = "btn btn-warning";
var green = "btn btn-success";
var grey = "btn btn-secondary";
var defaultColor = "btn btn-outline-dark";
var gameWonMsg = "Congrats, you won!";
var gameOverMsg = "Game over, out of guesses";

function updateBoard(input, context){
  if(context.gameWon && context.gameOver){
    return;
  }
  if(!context.gameWon && context.gameOver){
        return;
  }
  if(col >= 5)
    return;
  console.log(context.board)
  var boardGuesses = JSON.parse(JSON.stringify(context.board))
  console.log(boardGuesses)
  boardGuesses.gameBoard[6 - context.board.remainingGuesses][col] = input;
  context.setData(boardGuesses)
  if(col<5){
    col = col+1;
  }

}

function handleEnter(context,setData){ 
  if(context.gameWon && context.gameOver){
    return;
  }
  if(!context.gameWon && context.gameOver){
    return;
  }
  var input = context.board.gameBoard[6 - context.board.remainingGuesses].join("");
   if(input.length !== 5){
    alert("Guess must be 5 letters");
    return;
   }
  if(col === 5){
    
    col = 0;
    const options = {
      method: 'POST',
      url: 'http://localhost:5000/game/test/guess',
      headers: {'Content-Type': 'application/json'},
      data: {guess: input.toLowerCase()}
    };
    
    axios.request(options).then(function (response) {
     setData(response.data)
     }).catch(function (error) {
      console.error(error);
    });

   }
}

function updateKeyboard(context){
  var attempts = [...context.board.boardState];
  var guess = [...context.board.matches];
  for (let i = 0; i < attempts[context.board.remainingGuesses].length; i++){
    var keyID = "key_" + attempts[context.board.remainingGuesses][i].toLowerCase();
    console.log(document.getElementById(keyID).className)
      if(guess[context.board.remainingGuesses][i] === "0"){
        document.getElementById(keyID).className = grey;
      }
      else if(guess[context.board.remainingGuesses][i] === "1" ){
        document.getElementById(keyID).className = yellow;
      }
      else if(guess[context.board.remainingGuesses][i] === "2"){
        document.getElementById(keyID).className = green;

      }
  }
}

function handleBackspace(context){
  if(context.gameWon && context.gameOver){
    return;
  }
  if(!context.gameWon && context.gameOver){
        return;
  }
  if(col > 0)
    col = col - 1;
  var boardGuesses = [...context.board.boardState];
  boardGuesses[context.board.remainingGuesses][col] = "";
  context.setBoard(boardGuesses);
 
}


function updatePreviousState(context){
  var attempts = [...context.board.boardState];
  var guess = [...context.board.matches];
  for(let j = 0; j < guess.length; j++ ){
    for (let i = 0; i < guess[j].length; i++){
      var keyID = "key_" + attempts[j][i].toLowerCase();
      console.log(document.getElementById(keyID).className)
        if(guess[j][i] === "0"){
          document.getElementById(keyID).className = grey;
        }
        else if(guess[j][i] === "1" ){
          document.getElementById(keyID).className = yellow;
        }
        else if(guess[j][i] === "2"){
          document.getElementById(keyID).className = green;
        }
    }
  }
 
}

function Keyboard() {
  const [responseData, getData] = useState(null)
  const gameState = useContext(AppContext)

  useEffect( () => {
    console.log(gameState.gamestate)
    console.log(gameState.board)
  },[gameState.fetchDone])

  useEffect( () => {
    console.log(responseData)
    // update remainingGuesses and matches in boardData
    var board= JSON.parse(JSON.stringify(gameState.board))
    board.remainingGuesses -= 1; 
    gameState.setData(board);

    console.log(gameState.board)


  },[responseData])



    //  useEffect( () => {
//   if(gameState.gamestate.active === true){
//     updatePreviousState(gameState)
//   }
//  },[gameState.gamestate])

//  useEffect ( () => { 
//   gameState.setGameOver(gameState.gameWon);
//  },[gameState.gameWon]);


//  useEffect( () => {
//   if(gameState.board.remainingGuesses > 5)
//   gameState.setGameOver(true);
//   if(gameState.gameOver){
//     if(gameState.gameWon)
//       alert(gameWonMsg);
//     else
//       alert(gameOverMsg);
//   }
//  },[gameState.board.remainingGuesses]);

//   const handleKeyboard = useCallback((event) => {
//     if(event.key === "Enter"){
//       handleEnter(gameState);
//     }
//     else if(event.key === "Backspace"){
//       handleBackspace(gameState);
//     }
//     else if(event.keyCode >= 65 && event.keyCode <= 90){
//       updateBoard(event.key.toUpperCase(),gameState);
//     }
//   })
//   useEffect(() => {
//     document.addEventListener("keydown",handleKeyboard);
  
//     return () => {
//       document.removeEventListener("keydown", handleKeyboard)
//     };
//   },[handleKeyboard])





  


  return (
    
    <div>
      <Container>
      <Row>
          <Col className="d-flex justify-content-center">
          <div className='btn-group'>
            <Button id="key_q" variant="outline-dark" onClick={() => {updateBoard("Q",gameState)}}>Q</Button>{' '}
            <Button id="key_w" variant="outline-dark" onClick={()=>{updateBoard("W",gameState)}}>W</Button>{' '}
            <Button id="key_e" variant="outline-dark" onClick={()=>{updateBoard("E",gameState)}}>E</Button>{' '}
            <Button id="key_r" variant="outline-dark" onClick={()=>{updateBoard("R",gameState)}}>R</Button>{' '}
            <Button id="key_t" variant="outline-dark" onClick={()=>{updateBoard("T",gameState)}}>T</Button>{' '}
            <Button id="key_y" variant="outline-dark" onClick={()=>{updateBoard("Y",gameState)}}>Y</Button>{' '}
            <Button id="key_u" variant="outline-dark" onClick={()=>{updateBoard("W",gameState)}}>U</Button>{' '}
            <Button id="key_i" variant="outline-dark" onClick={()=>{updateBoard("I",gameState)}}>I</Button>{' '}
            <Button id="key_o" variant="outline-dark" onClick={()=>{updateBoard("O",gameState)}}>O</Button>{' '}
            <Button id="key_p" variant="outline-dark" onClick={()=>{updateBoard("P",gameState)}}>P</Button>{' '}
          </div>
          </Col>
        </Row>
        <Row>
        <Col className="d-flex justify-content-center">
          <div className='btn-group'>
            <Button id="key_a" variant="outline-dark" onClick={()=>{updateBoard("A",gameState)}}>A</Button>{' '}
            <Button id="key_s" variant="outline-dark" onClick={()=>{updateBoard("S",gameState)}}>S</Button>{' '}
            <Button id="key_d" variant="outline-dark" onClick={()=>{updateBoard("D",gameState)}}>D</Button>{' '}
            <Button id="key_f" variant="outline-dark" onClick={()=>{updateBoard("F",gameState)}}>F</Button>{' '}
            <Button id="key_g" variant="outline-dark" onClick={()=>{updateBoard("G",gameState)}}>G</Button>{' '}
            <Button id="key_h" variant="outline-dark" onClick={()=>{updateBoard("H",gameState)}}>H</Button>{' '}
            <Button id="key_j" variant="outline-dark" onClick={()=>{updateBoard("J",gameState)}}>J</Button>{' '}
            <Button id="key_k" variant="outline-dark" onClick={()=>{updateBoard("K",gameState)}}>K</Button>{' '}
            <Button id="key_l" variant="outline-dark" onClick={()=>{updateBoard("L",gameState)}}>L</Button>{' '}
          </div>
          </Col>
        </Row>
        <Row>
        <Col className="d-flex justify-content-center">
          <div className='btn-group'>
            <Button id="key_Enter" variant="outline-dark" onClick={() => handleEnter(gameState,getData)}>ENTER</Button>{' '}
            <Button id="key_z" variant="outline-dark" onClick={()=>{updateBoard("Z",gameState)}}>Z</Button>{' '}
            <Button id="key_x" variant="outline-dark" onClick={()=>{updateBoard("X",gameState)}}>X</Button>{' '}
            <Button id="key_c" variant="outline-dark" onClick={()=>{updateBoard("C",gameState)}}>C</Button>{' '}
            <Button id="key_v" variant="outline-dark" onClick={()=>{updateBoard("V",gameState)}}>V</Button>{' '}
            <Button id="key_b" variant="outline-dark" onClick={()=>{updateBoard("B",gameState)}}>B</Button>{' '}
            <Button id="key_n" variant="outline-dark" onClick={()=>{updateBoard("N",gameState)}}>N</Button>{' '}
            <Button id="key_m" variant="outline-dark" onClick={()=>{updateBoard("M",gameState)}}>M</Button>{' '}
            <Button id="key_Backspace" variant="outline-dark" onClick={() => handleBackspace(gameState)}>&lt;-</Button>{' '}
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Keyboard