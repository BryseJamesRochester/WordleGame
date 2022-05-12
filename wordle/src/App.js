import React, { useState, useEffect, createContext, useContext } from "react"
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
import LoginPage from "./components/Login/LoginPage"
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
import Game, { AppContext } from "./components/Game"
import Home from "./components/Home"



const currentRow = 0
const currentIndex = 0

function setBoard(boardChanges) {
  boardDefault = boardChanges
}



function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const loginInfo = { loggedIn, setLoggedIn }
  // if (!loggedIn) {
  //   return <LoginPage />
  // }
  return (
      <Router>
        <div>
          <Navbar variant="dark" bg="dark">
            <Container>
              <Col>
                <Navbar.Brand href="/">Wordle</Navbar.Brand>
              </Col>

              <Col style={{ whiteSpace: "nowrap", overflow: "hidden" }}>
                <Nav.Link href="/game">Single Player</Nav.Link>
              </Col>
              <Col>
                <Nav.Link href="">Multiplayer</Nav.Link>
              </Col>
              <Col>
                <Nav.Link href="/profile">Profile</Nav.Link>
              </Col>
              <Col>
                <Nav.Link href="/login">Login</Nav.Link>
              </Col>
            </Container>
          </Navbar>
        </div>
        <Routes>
          <Route path="/game" element={<Game />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
  )
}

export default App
