import React, { useState, createContext } from "react"
import logo from "./logo.svg"
import "./App.css"

import Keyboard from "./components/Keyboard.jsx"
import "bootstrap/dist/css/bootstrap.min.css"

import Grid from "./components/Grid.jsx"
import { Container, Row, Col, Navbar, NavLink, Nav } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import Login from "./components/Login/Login"
import useToken from "./useToken"
import { boardDefault, wordAnswer } from "./components/Words"


export const AppContext = createContext()

function setToken(userToken) {
  sessionStorage.setItem("token", JSON.stringify(userToken))
}

function getToken() {
  const tokenString = sessionStorage.getItem("token")
  const userToken = JSON.parse(tokenString)
  return userToken?.token
}

function App() {
  const [board, setBoard] = useState(boardDefault)

  const token = getToken()

  if (!token) {
    //return <Login setToken={setToken} />
  }

  return (
    <div>
      <Navbar variant="dark" bg="dark">
        <Container>
          <Col>
            <Navbar.Brand href="#">Wordle</Navbar.Brand>
          </Col>
          <Col md={{ span: 1 }}>
            <Nav.Link href="#login">Login</Nav.Link>
          </Col>
        </Container>
      </Navbar>
      <Container className="mw-50">
        <Col md={{ span: 6, offset: 3 }}>
          <AppContext.Provider value={{ board, setBoard, wordAnswer }}>
            <Grid />
            <Keyboard />
          </AppContext.Provider>
        </Col>
      </Container>
    </div>
  )
}

export default App
