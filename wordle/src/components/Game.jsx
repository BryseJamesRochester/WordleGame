import React, { useState, createContext, useEffect } from "react"

import Keyboard from "./Keyboard.jsx"
import "bootstrap/dist/css/bootstrap.min.css"
import { defaultData, wordAnswer, checkGuess, guesses, checkGameState } from "./Words"

import {
  Container,
  Col
} from "react-bootstrap"
import axios from "axios";
import Grid from "./Grid.jsx"
export const AppContext = createContext()


var fetchDone = false;
var count = 0;

function loadPrevGameState(gameState, boardData){
  console.log(boardData)
  var guess = [...boardData.matches]
  var gameBoard = [...boardData.gameBoard]
  var remainingGuesses = gameState.gamestate.remainingGuesses;
    for(let i = 0; i < 6 - gameState.gamestate.remainingGuesses; i++){
      var word = gameState.gamestate.pastGuesses[i].guess.toUpperCase();
      var chars = word.split("");
      for(let j = 0; j < gameBoard[i].length;j++ ){
        gameBoard[i][j] = chars[j];
        guess[i][j] = gameState.gamestate.pastGuesses[i].matches[j];
      } 
    }
  var matches = guess; 
    const obj = { 
      gameBoard,
      matches,
      remainingGuesses
    }
    return obj;
  }





function Game() {
  const [board, setData] = useState(defaultData)
  const [gameOver, setGameOver] = useState(false) // true if game is over
  const [gameWon, setGameWon] = useState(false)  // true if game is won
  const [gamestate, setGamestate] = useState(null)
  const [inputResponse, getResponse] = useState(null)
  const option = {
    method: 'GET',
    url: 'http://localhost:5000/users/test/gamestate',
    headers: {'Content-Type': 'application/json'}
  }

  useEffect(() => {
    if(gamestate === null){
      axios.request(option)
      .then((response) => {
          setGamestate(response.data)
        }
      ) 
    }
  },[]); 


  useEffect(() => {
    if(gamestate !== null){
      if(gamestate.active){
        const obj = loadPrevGameState(gamestate, board)
        setData(obj)
        fetchDone = true
      }
      else if (!gamestate.active && count < 1){
        count++;
        fetchDone = false
          const options = {
            method: 'GET',
            url: 'http://localhost:5000/game/test/start',
            params: {'': ['', '', '']},
            headers: {'Content-Type': 'application/json'},
            data: {useDefaultWordlist: false, difficulty: 'all', numGuesses: 0}
          };

          axios.request(options).then((response) => {
            setGamestate(response.data)
            }
          )
      }
    }
  },[gamestate])

  useEffect( () => {
    var dummy = JSON.parse(JSON.stringify(board))
    setData(dummy)
  },[count])

  const out = (
    <div>
      <Container className="mw-50">
        <Col md={{ span: 6, offset: 3 }}>
          <AppContext.Provider value={{board, setData, wordAnswer, checkGuess, 
             gameOver, setGameOver, checkGameState, gameWon, setGameWon, gamestate, fetchDone,
             inputResponse, getResponse}}>
            <Grid />
            <Keyboard />
          </AppContext.Provider>
        </Col>
      </Container>
    </div>
  )
  return out;
}


export default Game