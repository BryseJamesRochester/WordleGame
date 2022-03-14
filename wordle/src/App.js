import logo from "./logo.svg"
import "./App.css"
import Grid from "./components/Grid.jsx"
import Keyboard from "./components/Keyboard.jsx"
import { Container, Row, Col, Navbar, NavLink, Nav } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
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
        <Grid />
        <Keyboard />
        </Col>
      </Container>
    </div>
  )
}

export default App
