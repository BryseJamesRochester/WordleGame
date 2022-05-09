import React, { useState, useContext } from "react"
import { Container, Row, Col, Stack, Card } from "react-bootstrap"
import Image from "react-bootstrap/Image"
import profilePic from "../assets/defaultUserPic.jpg"
import axios from "axios"
import Wordlists from "./Wordlists"
import { UserContext } from "../App"

function Profile() {
  const [currentUser, setcurrentUser] = useState("test")
  const [userData, setUserData] = useState("")

  function setUser1() {
    setcurrentUser((currentUser) => "brandon")
  }
  function setUser2() {
    setcurrentUser((currentUser) => "test")
  }
  function log() {
    console.log(userData)
  }

  React.useEffect(() => {
    axios
      .get("http://localhost:5001/users/" + currentUser + "/profile")
      .then((response) => {
        setUserData(response.data)
      })
      .catch((error) => console.log(error))
  }, [currentUser])

  return (
    <div>
      <Container fluid className="my-5">
        <Row>
        <Col>
      <Container className="">
        <Image
          className="rounded"
          style={{ height: "150px", width: "150px" }}
          src={profilePic}
        />
      </Container>
      <Container style={{ whiteSpace: "nowrap", overflow: "hidden" }}>
        <Card>
          <Card.Body>
            <Card.Title>User Info</Card.Title>
            <Card.Text>
              <Row>
                <Col>
                  <div>Username:</div>
                </Col>
                <Col>
                  <div>{currentUser && <div>{currentUser}</div>}</div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div>Email:</div>
                </Col>
                <Col className="text-nowrap">
                  <div>{userData.email && <div>{userData.email}</div>}</div>
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
                  <div >Games Played:</div>
                </Col>
                <Col>
                  <div>
                    {userData.stats && userData.stats.gamesPlayed && (
                      <div >{userData.stats.gamesPlayed}</div>
                    )}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div>Games Won:</div>
                </Col>
                <Col>
                  <div>
                    {userData.stats && userData.stats.gamesWon && (
                      <div>userData.stats.gamesWon</div>
                    )}
                  </div>
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
                  <div>Games Played:</div>
                </Col>
                <Col>
                  <div>
                    {userData.stats &&
                      userData.stats.multiplayerGamesPlayed && (
                        <div>userData.stats.multiplayerGamesPlayed</div>
                      )}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div>Games Won:</div>
                </Col>
                <Col>
                  <div>
                    {userData.stats && userData.stats.multiplayerGamesWon && (
                      <div>userData.stats.multiplayerGamesWon</div>
                    )}
                  </div>
                </Col>
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>
        <button onClick={setUser1}>brandon</button>
      <button onClick={setUser2}>test</button>
      <button onClick={log}>log</button>
      </Container>
      </Col>
      <Col>
        <Wordlists />
      </Col>
      
      </Row>
      </Container>
    </div>
  )
}
export default Profile
