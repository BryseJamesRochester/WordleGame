import React, { useState } from "react"
import { Container, Row, Col, Stack, Card } from "react-bootstrap"
import Image from "react-bootstrap/Image"
import profilePic from "../assets/defaultUserPic.jpg"
import axios from "axios"

function Profile() {
  const [username, setUsername] = useState("")
  const [userData, setUserData] = useState("")

  function setUser1() {
    setUsername((username) => "brandon")

  }
  function setUser2() {
    setUsername((username) => "test")
  }
  function log() {
    console.log(userData)
  }

  React.useEffect(() => {
    axios.get('localhost:5001/users/brandon/profile').then((response) => {
      setUserData(response.data)
    }).catch(error => console.log(error));
  }, [])

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "10%",
        transform: "translate(-50%, 0%)",
      }}
    >
      <Container className="justify-content-center d-flex">
        <Image
          className="rounded"
          style={{ height: "150px", width: "150px" }}
          src={profilePic}
        />
      </Container>
      <Card>
        <Card.Body>
          <Card.Title>User Info</Card.Title>
          <Card.Text>
            <Row>
              <Col>
                <Stack gap={1}>
                  <div>Username:</div>
                  <div>Email:</div>
                </Stack>
              </Col>
              <Col>
                <Stack gap={1}>
                  <div>{username}</div>
                  <div>brandonong66@gmail.com</div>
                </Stack>
              </Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <Card.Title>Single Player</Card.Title>
          <Card.Text>
            <Row>
              <Col>
                <Stack gap={1}>
                  <div>Games Played:</div>
                  <div>Games Won:</div>
                </Stack>
              </Col>
              <Col>
                <Stack gap={1}>
                  <div>x</div>
                  <div>x</div>
                </Stack>
              </Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Multiplayer</Card.Title>
          <Card.Text>
            <Row>
              <Col>
                <Stack gap={1}>
                  <div>Games Played:</div>
                  <div>Games Won:</div>
                </Stack>
              </Col>
              <Col>
                <Stack gap={1}>
                  <div>x</div>
                  <div>x</div>
                </Stack>
              </Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
      <button onClick={setUser1}>brandon</button>
      <button onClick={setUser2}>test</button>
      <button onClick={log}>log</button>

    </div>
  )
}

export default Profile
