import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Square from "./Square"

function Grid() {
  return (
    <div>
      <Container className="gridBox d-flex justify-content-center flex-nowrap">
        <Col>
            <Square letter="B" guess="2"/>
            <Square letter="" guess=""/>
            <Square letter="" guess=""/>
            <Square letter="" guess=""/>
            <Square letter="" guess=""/>
        </Col>
        <Col>
            <Square letter="B" guess="2"/>
            <Square letter="" guess=""/>
            <Square letter="" guess=""/>
            <Square letter="" guess=""/>
            <Square letter="" guess=""/>
        </Col>
        <Col>
            <Square letter="B" guess="2"/>
            <Square letter="" guess=""/>
            <Square letter="" guess=""/>
            <Square letter="" guess=""/>
            <Square letter="" guess=""/>
        </Col>
        <Col>
            <Square letter="B" guess="2"/>
            <Square letter="" guess=""/>
            <Square letter="" guess=""/>
            <Square letter="" guess=""/>
            <Square letter="" guess=""/>
        </Col>
        <Col>
            <Square letter="B" guess="2"/>
            <Square letter="" guess=""/>
            <Square letter="" guess=""/>
            <Square letter="" guess=""/>
            <Square letter="" guess=""/>
        </Col>
      </Container>
    </div>
  )
}

export default Grid
