import React, { useState, useEffect, createContext } from "react"

import Keyboard from "./Keyboard.jsx"
import "bootstrap/dist/css/bootstrap.min.css"
import { boardDefault, wordAnswer, checkGuess, guesses, checkGameState } from "./Words"

import {
  Container,
  Row,
  Col,
  Navbar,
  NavLink,
  Nav,
  Button,
} from "react-bootstrap"

import Grid from "./Grid.jsx"
export const AppContext = createContext()



function Game() {
  const [board, setBoard] = useState(boardDefault)
  const [currentGuesses, setGuesses] = useState(guesses)
  const [gameOver, setGameOver] = useState(false) // true if game is over
  const [gameWon, setGameWon] = useState(false)  // true if game is won
  return (
    <div>
      <Container className="mw-50">
        <Col md={{ span: 6, offset: 3 }}>
          <AppContext.Provider value={{board, setBoard, wordAnswer, checkGuess, 
            guesses, currentGuesses, setGuesses, gameOver, setGameOver, checkGameState,
            gameWon, setGameWon}}>
            <Grid />
            <Keyboard />
          </AppContext.Provider>
        </Col>
      </Container>
    </div>
  )
}

export default Game
