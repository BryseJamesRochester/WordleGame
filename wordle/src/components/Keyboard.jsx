import React from 'react'
import Button from 'react-bootstrap/Button'
import { Container, Row, Col } from 'react-bootstrap'


function Keyboard() {
  return (
    <div>
      <Container>
      <Row className="justify-content-md-center">
          <Col md="auto">
          <div class='btn-group'>
            <Button variant="outline-dark">Q</Button>{' '}
            <Button variant="outline-dark">W</Button>{' '}
            <Button variant="outline-dark">E</Button>{' '}
            <Button variant="outline-dark">R</Button>{' '}
            <Button variant="outline-dark">T</Button>{' '}
            <Button variant="outline-dark">Y</Button>{' '}
            <Button variant="outline-dark">U</Button>{' '}
            <Button variant="outline-dark">I</Button>{' '}
            <Button variant="outline-dark">O</Button>{' '}
            <Button variant="outline-dark">P</Button>{' '}
            <Button variant="outline-dark">A</Button>{' '}
          </div>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
        <Col md="auto">
          <div class='btn-group'>
            <Button variant="outline-dark">A</Button>{' '}
            <Button variant="outline-dark">S</Button>{' '}
            <Button variant="outline-dark">D</Button>{' '}
            <Button variant="outline-dark">F</Button>{' '}
            <Button variant="outline-dark">G</Button>{' '}
            <Button variant="outline-dark">H</Button>{' '}
            <Button variant="outline-dark">J</Button>{' '}
            <Button variant="outline-dark">K</Button>{' '}
            <Button variant="outline-dark">L</Button>{' '}
          </div>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
        <Col md="auto">
          <div class='btn-group'>
            <Button variant="outline-dark">ENTER</Button>{' '}
            <Button variant="outline-dark">Z</Button>{' '}
            <Button variant="outline-dark">X</Button>{' '}
            <Button variant="outline-dark">C</Button>{' '}
            <Button variant="outline-dark">V</Button>{' '}
            <Button variant="outline-dark">B</Button>{' '}
            <Button variant="outline-dark">N</Button>{' '}
            <Button variant="outline-dark">M</Button>{' '}
            <Button variant="outline-dark">&lt;-</Button>{' '}
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Keyboard