import logo from "./logo.svg"
import "./App.css"
import Grid from "./components/Grid.jsx"
import Keyboard from "./components/Keyboard.jsx"
import { Container, Row, Col } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div>
      <h1>Wordle</h1>
      <Container fluid="sm">
        <Col>
          <Grid />
        </Col>
      </Container>
      <Keyboard />
    </div>
  )
}

export default App
