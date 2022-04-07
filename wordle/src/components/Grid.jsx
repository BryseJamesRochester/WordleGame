import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Square from "./Square"
import "../styles.css"

function Grid() {
  return (
    <div>
      <Container>
        <Row>
          <Col className="gridBox d-flex justify-content-center m-1">
            <Square letter="" />
          </Col>
          <Col className="gridBox d-flex justify-content-center m-1">
            <Square letter="" />
          </Col>
          <Col className="gridBox d-flex justify-content-center m-1">
            <Square letter="" />
          </Col>
          <Col className="gridBox d-flex justify-content-center m-1">
            <Square letter="" />
          </Col>
          <Col className="gridBox d-flex justify-content-center m-1">
            <Square />
          </Col>
        </Row>
        <Row>
          <Col className="gridBox d-flex justify-content-center m-1">
            <Square letter="A" />
          </Col>
          <Col className="gridBox d-flex justify-content-center m-1">
            <Square letter="B" />
          </Col>
          <Col className="gridBox d-flex justify-content-center m-1">
            <Square letter="C" />
          </Col>
          <Col className="gridBox d-flex justify-content-center m-1">
            <Square letter="D" />
          </Col>
          <Col className="gridBox d-flex justify-content-center m-1">
            <Square />
          </Col>
        </Row><Row>
          <Col className="gridBox d-flex justify-content-center m-1">
            <Square letter="A" />
          </Col>
          <Col className="gridBox d-flex justify-content-center m-1">
            <Square letter="B" />
          </Col>
          <Col className="gridBox d-flex justify-content-center m-1">
            <Square letter="C" />
          </Col>
          <Col className="gridBox d-flex justify-content-center m-1">
            <Square letter="D" />
          </Col>
          <Col className="gridBox d-flex justify-content-center m-1">
            <Square />
          </Col>
        </Row><Row>
          <Col className="gridBox d-flex justify-content-center m-1">
            <Square letter="A" />
          </Col>
          <Col className="gridBox d-flex justify-content-center m-1">
            <Square letter="B" />
          </Col>
          <Col className="gridBox d-flex justify-content-center m-1">
            <Square letter="C" />
          </Col>
          <Col className="gridBox d-flex justify-content-center m-1">
            <Square letter="D" />
          </Col>
          <Col className="gridBox d-flex justify-content-center m-1">
            <Square />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Grid
