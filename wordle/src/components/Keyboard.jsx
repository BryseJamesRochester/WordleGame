import React from 'react'
import Button from 'react-bootstrap/Button'
import { Container, Row, Col } from 'react-bootstrap'

var guesses = ["","","","",""];
var currInput = "";
var maxSize = 5;
var guessCount = 0;


document.addEventListener('keyup', (event) => {
  const key_id = "key_"+event.key
  if(document.getElementById(key_id) != null){
    document.getElementById(key_id).className = "btn btn-outline-dark";
  }
})

document.removeEventListener('keyup', (event) => {
  const key_id = "key_"+event.key
  if(document.getElementById(key_id) != null){
    document.getElementById(key_id).className = "btn btn-outline-dark";
  }
})
document.addEventListener('keydown', (event) => {
  const key_id = "key_"+event.key
  if(document.getElementById(key_id) !== null && guessCount < maxSize){
    document.getElementById(key_id).className += " active";
    document.getElementById(key_id).click();
 
    if(event.key === "Enter"){
      if(currInput.length === 5){
        guesses[guessCount] = currInput;
        currInput = "";
        guessCount = guessCount + 1;
        console.log(JSON.stringify(guesses));
      }
    }
    if(event.key === "Backspace"){
      if(currInput.length > 0){
      currInput = currInput.slice(0,currInput.length-1);
      console.log(currInput);
      }
    }
    else if(currInput.length < maxSize){
      currInput = currInput + event.key.toUpperCase();
      console.log(currInput);
    }
}
})
document.removeEventListener('keydown', (event) => {
  const key_id = "key_"+event.key
  if(document.getElementById(key_id) !== null && guessCount < maxSize){
    document.getElementById(key_id).className += " active";
    document.getElementById(key_id).click();
    var enter = "Enter";
    if(event.key === "Enter"){
      if(currInput.length === 5){
        guesses[guessCount] = currInput;
        currInput = "";
        guessCount = guessCount + 1;
        console.log(JSON.stringify(guesses));
      }
      else
        console.log("Please input 5 characters");
    }
    if(event.key === "Backspace"){
      if(currInput.length > 0){
      currInput = currInput.slice(0,currInput.length-1);
      console.log(currInput);
      }
    }
    if(currInput.length < maxSize && event.key !== enter){
      console.log(event.key);
      currInput += event.key.toUpperCase();
      console.log(currInput);
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
  return (
    <div>
      <Container>
      <Row>
          <Col className="d-flex justify-content-center">
          <div class='btn-group'>
            <Button id="key_q" variant="outline-dark" onClick={(handleClick())}>Q</Button>{' '}
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
            <Button id="key_Enter" variant="outline-dark">ENTER</Button>{' '}
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