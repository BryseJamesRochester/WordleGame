import React, { useContext, useState, memo } from "react"
import { AppContext } from "./Game"
import { Container, Row, Col } from "react-bootstrap"
import Square from "./Square"
import axios from "axios"




function Grid() {
  
  return (
    <div>
      <Container className="gridBox d-flex justify-content-center flex-nowrap">
        <Col>
          <Square row="0" col="0"/>
          <Square row="0" col="1"/>
          <Square row="0" col="2"/>
          <Square row="0" col="3"/>
          <Square row="0" col="4"/>
          <Square row="0" col="5"/>
        </Col>
        <Col>
          <Square row="1" col="0"/>
          <Square row="1" col="1"/>
          <Square row="1" col="2"/>
          <Square row="1" col="3"/>
          <Square row="1" col="4"/>
          <Square row="1" col="5"/>
        </Col>
        <Col>
          <Square row="2" col="0"/>
          <Square row="2" col="1"/>
          <Square row="2" col="2"/>
          <Square row="2" col="3"/>
          <Square row="2" col="4"/>
          <Square row="2" col="5"/>
        </Col>
        <Col>
          <Square row="3" col="0"/>
          <Square row="3" col="1"/>
          <Square row="3" col="2"/>
          <Square row="3" col="3"/>
          <Square row="3" col="4"/>
          <Square row="3" col="5"/>
        </Col>
        <Col>
          <Square row="4" col="0"/>
          <Square row="4" col="1"/>
          <Square row="4" col="2"/>
          <Square row="4" col="3"/>
          <Square row="4" col="4"/>
          <Square row="4" col="5"/>
        </Col>
      </Container>
    </div>
  )
}

export default memo(Grid)