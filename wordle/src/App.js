import React, { useState, useEffect, createContext } from "react"
import logo from "./logo.svg"
import "./App.css"

import Keyboard from "./components/Keyboard.jsx"
import "bootstrap/dist/css/bootstrap.min.css"

import Grid from "./components/Grid.jsx"
import {
  Container,
  Row,
  Col,
  Navbar,
  NavLink,
  Nav,
  Button,
} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import Login from "./components/Login/Login"
import useToken from "./useToken"
import {
  boardCurrent,
  boardDefault,
  boardTest1,
  boardTest2,
  wordAnswer,
  newBoard,
} from "./components/Words"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Profile from "./components/Profile"

export const AppContext = createContext()
const currentRow = 0
const currentIndex = 0

function setToken(userToken) {
  sessionStorage.setItem("token", JSON.stringify(userToken))
}

function getToken() {
  const tokenString = sessionStorage.getItem("token")
  const userToken = JSON.parse(tokenString)
  return userToken?.token
}
function setBoard(boardChanges) {
  boardDefault = boardChanges
}

function App() {
  const [boardCurrent, setBoard] = useState(boardDefault)

  function updateBoard1() {
    setBoard((boardCurrent) => boardTest1)
    console.log(boardCurrent)
  }
  function updateBoard2() {
    setBoard((boardCurrent) => boardTest2)
    console.log(boardCurrent)
  }

  const token = getToken()

  if (!token) {
    //return <Login setToken={setToken} />
  }

  return (
    <Router>
      <div>
        <Navbar variant="dark" bg="dark">
          <Container>
            <Col>
              <Navbar.Brand href="#">Wordle</Navbar.Brand>
            </Col>
            <Col md={{ span: 1 }}>
              <Nav.Link href="/profile">Profile</Nav.Link>
            </Col>
            <Col md={{ span: 1 }}>
              <Nav.Link href="#login">Login</Nav.Link>
            </Col>
          </Container>
        </Navbar>
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
      <Routes>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </Router>
  )
}

export default App
