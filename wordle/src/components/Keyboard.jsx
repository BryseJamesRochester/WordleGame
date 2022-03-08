import React from 'react'
import Button from 'react-bootstrap/Button'
import { Container, Row, Col } from 'react-bootstrap'
import $ from 'jquery'


document.addEventListener('keyup', (event) => {
  const key_id = "key_"+event.key
  console.log(document.getElementById(key_id).className);
  if(document.getElementById(key_id) != null){
    document.getElementById(key_id).className = "btn btn-outline-dark";
  }
})

document.addEventListener('keydown', (event) => {
  const key_id = "key_"+event.key
  console.log(key_id + " pressed");
  if(document.getElementById(key_id) != null){
    document.getElementById(key_id).className += " active";
  }
})

function Keyboard() {
  return (
    <div>
      <Container>
      <Row className="justify-content-md-center">
          <Col md="auto">
          <div class='btn-group'>
            <Button id="key_q" variant="outline-dark">Q</Button>{' '}
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
        <Row className="justify-content-md-center">
        <Col md="auto">
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
        <Row className="justify-content-md-center">
        <Col md="auto">
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