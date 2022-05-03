import React, {useContext, useEffect, useCallback} from 'react'
import Button from 'react-bootstrap/Button'
import { Container, Row, Col } from 'react-bootstrap'
import { AppContext } from "./Game"
import { checkGameState } from './Words';

var x = 0;
var y = 0;
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
  if(y >= 5)
    return;
  var boardGuesses = [...context.board];
  boardGuesses[x][y] = input;
  context.setBoard(boardGuesses);
  if(y<5){
    y = y+1;
  }
}

function handleEnter(context){
  if(context.gameWon && context.gameOver){
    return;
  }
  if(!context.gameWon && context.gameOver){
    return;
  }
  var input = context.board[x].join("");
   if(input.length !== 5){
    alert("Guess must be 5 letters");
    return;
   }
  if(y === 5){
    
    y = 0;
    context.setGuesses(context.checkGuess(x));
    updateKeyboard(context);
    context.setGameWon(checkGameState(x,context));
    if(x === 5)
      context.setGameOver(true);
    x++;
   }
   
}

function updateKeyboard(context){
  var attempts = [...context.board];
  var guess = [...context.guesses];
  for (let i = 0; i < attempts[x].length; i++){
    var keyID = "key_" + attempts[x][i].toLowerCase();
    console.log(document.getElementById(keyID).className)
      if(guess[x][i] === "0"){
        document.getElementById(keyID).className = grey;
      }
      else if(guess[x][i] === "1" ){
        document.getElementById(keyID).className = yellow;
      }
      else if(guess[x][i] === "2"){
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
  if(y > 0)
    y = y - 1;
  var boardGuesses = [...context.board];
  boardGuesses[x][y] = "";
  context.setBoard(boardGuesses);
 
}


function Keyboard() {
 const boardData = useContext(AppContext);
 boardData.setGameOver(boardData.gameWon);
 if(x > 5)
  boardData.setGameOver(true);
  if(boardData.gameOver){
    if(boardData.gameWon)
      alert(gameWonMsg);
    else
      alert(gameOverMsg);
  }
  const handleKeyboard = useCallback((event) => {
    if(event.key === "Enter"){
      handleEnter(boardData);
    }
    else if(event.key === "Backspace"){
      handleBackspace(boardData);
    }
    else if(event.keyCode >= 65 && event.keyCode <= 90){
      updateBoard(event.key.toUpperCase(),boardData);
    }
  })
  useEffect(() => {
    document.addEventListener("keydown",handleKeyboard);
  
    return () => {
      document.removeEventListener("keydown", handleKeyboard)
    };
  },[handleKeyboard])
  
  return (
    
    <div>
      <Container>
      <Row>
          <Col className="d-flex justify-content-center">
          <div class='btn-group'>
            <Button id="key_q" variant="outline-dark" onClick={() => {updateBoard("Q",boardData)}}>Q</Button>{' '}
            <Button id="key_w" variant="outline-dark" onClick={()=>{updateBoard("W",boardData)}}>W</Button>{' '}
            <Button id="key_e" variant="outline-dark" onClick={()=>{updateBoard("E",boardData)}}>E</Button>{' '}
            <Button id="key_r" variant="outline-dark" onClick={()=>{updateBoard("R",boardData)}}>R</Button>{' '}
            <Button id="key_t" variant="outline-dark" onClick={()=>{updateBoard("T",boardData)}}>T</Button>{' '}
            <Button id="key_y" variant="outline-dark" onClick={()=>{updateBoard("Y",boardData)}}>Y</Button>{' '}
            <Button id="key_u" variant="outline-dark" onClick={()=>{updateBoard("W",boardData)}}>U</Button>{' '}
            <Button id="key_i" variant="outline-dark" onClick={()=>{updateBoard("I",boardData)}}>I</Button>{' '}
            <Button id="key_o" variant="outline-dark" onClick={()=>{updateBoard("O",boardData)}}>O</Button>{' '}
            <Button id="key_p" variant="outline-dark" onClick={()=>{updateBoard("P",boardData)}}>P</Button>{' '}
          </div>
          </Col>
        </Row>
        <Row>
        <Col className="d-flex justify-content-center">
          <div class='btn-group'>
            <Button id="key_a" variant="outline-dark" onClick={()=>{updateBoard("A",boardData)}}>A</Button>{' '}
            <Button id="key_s" variant="outline-dark" onClick={()=>{updateBoard("S",boardData)}}>S</Button>{' '}
            <Button id="key_d" variant="outline-dark" onClick={()=>{updateBoard("D",boardData)}}>D</Button>{' '}
            <Button id="key_f" variant="outline-dark" onClick={()=>{updateBoard("F",boardData)}}>F</Button>{' '}
            <Button id="key_g" variant="outline-dark" onClick={()=>{updateBoard("G",boardData)}}>G</Button>{' '}
            <Button id="key_h" variant="outline-dark" onClick={()=>{updateBoard("H",boardData)}}>H</Button>{' '}
            <Button id="key_j" variant="outline-dark" onClick={()=>{updateBoard("J",boardData)}}>J</Button>{' '}
            <Button id="key_k" variant="outline-dark" onClick={()=>{updateBoard("K",boardData)}}>K</Button>{' '}
            <Button id="key_l" variant="outline-dark" onClick={()=>{updateBoard("L",boardData)}}>L</Button>{' '}
          </div>
          </Col>
        </Row>
        <Row>
        <Col className="d-flex justify-content-center">
          <div class='btn-group'>
            <Button id="key_Enter" variant="outline-dark" onClick={() => handleEnter(boardData)}>ENTER</Button>{' '}
            <Button id="key_z" variant="outline-dark" onClick={()=>{updateBoard("Z",boardData)}}>Z</Button>{' '}
            <Button id="key_x" variant="outline-dark" onClick={()=>{updateBoard("X",boardData)}}>X</Button>{' '}
            <Button id="key_c" variant="outline-dark" onClick={()=>{updateBoard("C",boardData)}}>C</Button>{' '}
            <Button id="key_v" variant="outline-dark" onClick={()=>{updateBoard("V",boardData)}}>V</Button>{' '}
            <Button id="key_b" variant="outline-dark" onClick={()=>{updateBoard("B",boardData)}}>B</Button>{' '}
            <Button id="key_n" variant="outline-dark" onClick={()=>{updateBoard("N",boardData)}}>N</Button>{' '}
            <Button id="key_m" variant="outline-dark" onClick={()=>{updateBoard("M",boardData)}}>M</Button>{' '}
            <Button id="key_Backspace" variant="outline-dark" onClick={() => handleBackspace(boardData)}>&lt;-</Button>{' '}
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Keyboard