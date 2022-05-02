import React from "react"
import { Container, Row, Col, Stack, Card } from "react-bootstrap"
import Image from "react-bootstrap/Image"
import profilePic from "../assets/defaultUserPic.jpg"

function Profile() {
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "10%",
        transform: "translate(-50%, 0%)",
      }}
    >
      <Container>
        <Row style={{ backgroundColor: "blue" }}>
          <Col style={{ backgroundColor: "red" }}>
            <Image src={profilePic} fluid />
          </Col>
        </Row>
        <Row>
          <Card>
            <Card.Body>
              <Card.Title>User Info</Card.Title>
              <Card.Text>
                <Col>
                  <Stack gap={1}>
                    <div>Username:</div>
                    <div>Email:</div>
                  </Stack>
                </Col>
                <Col>
                  <Stack gap={1}>
                    <div>BrandonOng66</div>
                    <div>brandonong66@gmail.com</div>
                  </Stack>
                </Col>
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
        <Row>
          <Col>
            <Stack>
              <div>Single Player:</div>
              <div>Games Played:</div>
              <div>Games Won:</div>
            </Stack>
          </Col>
          <Col>
            <Stack></Stack>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Profile
