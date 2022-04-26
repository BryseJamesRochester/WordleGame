import React, { useState, useEffect, createContext } from "react"

import Keyboard from "./Keyboard.jsx"
import "bootstrap/dist/css/bootstrap.min.css"

import {
  Container,
  Row,
  Col,
  Navbar,
  NavLink,
  Nav,
  Button,
} from "react-bootstrap"
import {
  boardCurrent,
  boardDefault,
  boardTest1,
  boardTest2,
  wordAnswer,
  newBoard,
} from "./Words"
import Grid from "./Grid.jsx"
export const AppContext = createContext()



function Game() {
    const [boardCurrent, setBoard] = useState(boardDefault)

  function updateBoard1() {
    setBoard((boardCurrent) => boardTest1)
    console.log(boardCurrent)
  }
  function updateBoard2() {
    setBoard((boardCurrent) => boardTest2)
    console.log(boardCurrent)
  }
  return (
    <div>
      <Container className="mw-50">
        <Col md={{ span: 6, offset: 3 }}>
          <AppContext.Provider value={{ setBoard, wordAnswer, boardCurrent }}>
            <Grid />
            <Keyboard />
            <button onClick={updateBoard1}>test 1</button>
            <button onClick={updateBoard2}>test 2</button>
          </AppContext.Provider>
        </Col>
      </Container>
    </div>
  )
}

export default Game
