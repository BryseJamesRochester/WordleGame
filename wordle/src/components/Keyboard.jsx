import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import { Container, Row, Col } from 'react-bootstrap'


var guesses = ["","","","",""];
var currInput = "";
var maxSize = 5;
var guessCount = 0;
var corrGuess = "HELLO"
var corrChar = ["H","E","L","O"];
var defaultColor = "btn btn-outline-dark";
var defaultColorPressed = "btn btn-outline-dark active";
var yellow = "btn btn-warning"; 
var yellowPressed = "btn btn-warning active";
var green = "btn btn-success"; 
var greenPressed = "btn btn-success active";
var gray = "btn btn-secondary";
var grayPressed = "btn btn-secondary active";

document.addEventListener('keyup', (event) => {
  const key_id = "key_"+event.key
  if(document.getElementById(key_id) != null){

    switch(document.getElementById(key_id).className){
      case defaultColorPressed:
        document.getElementById(key_id).className = defaultColor;
        break;
      case yellowPressed:
        document.getElementById(key_id).className = yellow;
        break;
      case greenPressed:
        document.getElementById(key_id).className = green;
        break;
      case grayPressed:
        document.getElementById(key_id).className = gray;
        break;
    }
  }
})

document.addEventListener('keydown', (event) => {
  var key_id = "key_"+event.key
  if(document.getElementById(key_id) !== null && guessCount < maxSize){
    switch(document.getElementById(key_id).className){
      case defaultColor:
        document.getElementById(key_id).className = defaultColorPressed;
        break;
      case yellow: 
        document.getElementById(key_id).className = yellowPressed;
        break;
      case green:
        document.getElementById(key_id).className = greenPressed;
        break;
      case gray:
        document.getElementById(key_id).className = grayPressed;
        break;
    }
    if(event.key === "Enter"){
      if(currInput.length === 5){
        guesses[guessCount] = currInput;
        for(let i = 0; i<currInput.length;i++){
          var inputChar = currInput.charAt(i);
          key_id = "key_" + inputChar.toLowerCase();
          var corrLetter = false;
          var inPosition = inputChar === corrGuess.charAt(i);
          for(let j = 0; j < corrChar.length;j++){
            if(corrChar[j] === inputChar){
              corrLetter = true;
              break;
            }
          }
          if(corrLetter)
            document.getElementById(key_id).className = yellow;
          if(inPosition)
            document.getElementById(key_id).className = green;
          else if(!corrLetter)
            document.getElementById(key_id).className = gray;
            
        }
        currInput = "";
        guessCount = guessCount + 1;
        console.log(JSON.stringify(guesses));
        currInput = "";
      }
    }
    if(event.key === "Backspace"){
      if(currInput.length > 0){
      currInput = currInput.slice(0,currInput.length-1);
      guesses[guessCount] = currInput;
      console.log(JSON.stringify(guesses));
      }
    }
    else if(currInput.length < maxSize){
      if(!(event.which === 13)){
        currInput = currInput + event.key.toUpperCase();
        console.log(currInput);
      }
      
    }
}
})

function handleClick(){
  // if(inputString.length > 5){
  //   inputString += document.getElementById(keyId).text;
  //   console.log(inputString);
  // }
  console.log("clicked");
}

function Keyboard() {
  const [input, updateInput] = useState([]);
  const [guessCount,updateCount] = useState(0);
  useEffect(() => {
    if(guesses.length === 5){
      console.log(input.join(""));
      guesses[guessCount - 1] = input.join("");
      console.log(guesses);
    }
    else{
      console.log(input);
    }
  },[guessCount])

  useEffect(() => {
    if(input.length > 5){
      input.pop();
      console.log(input);
    }
  },[input])

  return (

    <div>
      <Container>
      <Row>
          <Col className="d-flex justify-content-center">
          <div class='btn-group'>
            <Button id="key_q" variant="outline-dark" onClick={() =>
             updateInput([...input,"Q"])}>Q</Button>{' '}
            <Button id="key_w" variant="outline-dark">W</Button>{' '}
            <Button id="key_e" variant="outline-dark">E</Button>{' '}
            <Button id="key_r" variant="outline-dark">R</Button>{' '}
            <Button id="key_t" variant="outline-dark">T</Button>{' '}
            <Button id="key_y" variant="outline-dark">Y</Button>{' '}
            <Button id="key_u" variant="outline-dark">U</Button>{' '}
            <Button id="key_i" variant="outline-dark">I</Button>{' '}
            <Button id="key_o" variant="outline-dark">O</Button>{' '}
            <Button id="key_p" variant="outline-dark">P</Button>{' '}
          </div>
          </Col>
        </Row>
        <Row>
        <Col className="d-flex justify-content-center">
          <div class='btn-group'>
            <Button id="key_a" variant="outline-dark">A</Button>{' '}
            <Button id="key_s" variant="outline-dark">S</Button>{' '}
            <Button id="key_d" variant="outline-dark">D</Button>{' '}
            <Button id="key_f" variant="outline-dark">F</Button>{' '}
            <Button id="key_g" variant="outline-dark">G</Button>{' '}
            <Button id="key_h" variant="outline-dark">H</Button>{' '}
            <Button id="key_j" variant="outline-dark">J</Button>{' '}
            <Button id="key_k" variant="outline-dark">K</Button>{' '}
            <Button id="key_l" variant="outline-dark">L</Button>{' '}
          </div>
          </Col>
        </Row>
        <Row>
        <Col className="d-flex justify-content-center">
          <div class='btn-group'>
            <Button id="key_Enter" variant="outline-dark" onClick={()=>
            updateCount(guessCount+1)}>ENTER</Button>{' '}
            <Button id="key_z" variant="outline-dark">Z</Button>{' '}
            <Button id="key_x" variant="outline-dark">X</Button>{' '}
            <Button id="key_c" variant="outline-dark">C</Button>{' '}
            <Button id="key_v" variant="outline-dark">V</Button>{' '}
            <Button id="key_b" variant="outline-dark">B</Button>{' '}
            <Button id="key_n" variant="outline-dark">N</Button>{' '}
            <Button id="key_m" variant="outline-dark">M</Button>{' '}
            <Button id="key_Backspace" variant="outline-dark">&lt;-</Button>{' '}
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Keyboard