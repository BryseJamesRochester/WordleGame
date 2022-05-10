import React, { useState, useContext } from "react"
import {
  Container,
  Row,
  Col,
  Stack,
  Card,
  Form,
  FormGroup,
  Button,
} from "react-bootstrap"
import axios from "axios"
import { UserContext } from "../App"
import setcurrentUser from "./Profile"

function Wordlists() {
  const [currentUser, setcurrentUser] = useState("test")
  const [wordlistData, setWordlistData] = useState()
  const [wordlistCount, setWordlistCount] = useState(0)
  const [formData, setFormData] = useState({
    title: "",
    words: "",
  })

  function setUser1() {
    setcurrentUser((currentUser) => "brandon")
  }
  function setUser2() {
    setcurrentUser((currentUser) => "test")
  }
  React.useEffect(() => {
    axios
      .get("http://localhost:5001/users/" + currentUser + "/wordlist/all")
      .then((response) => {
        setWordlistData(response.data)
      })
      .catch((error) => console.log(error))
  }, [currentUser, wordlistCount])

  const handleSubmit = (event) => {
    let validInput = true
    const wordsArray = formData.words.trim().split(" ")
    for (const word of wordsArray) {
      if (word.length != 5) {
        alert("Error: All words must be 5 characters long")
        validInput = false
        break
      }
    }
    for (const list of wordlistData)
    {
        if(list.name===formData.title) {
            alert("Error: Title must be unique ")
            validInput=false
            break
        }
    }
    if (validInput) {
      axios
        .post("http://localhost:5001/users/" + currentUser + "/wordlist/add", {
          wordlistName: formData.title,
          wordlist: wordsArray,
        })
        .then((response) => {
          console.log(response)
        })
    }
  }

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  function deleteWordList(listName) {
    axios
      .delete(
        "http://localhost:5001/users/" + currentUser + "/wordlist/delete",
        {
          headers: {},
          data: {
            wordlistName: listName,
          },
        }
      )
      .then()
  }
  function updateWordlistCount() {
    axios
      .get("http://localhost:5001/users/" + currentUser + "/wordlist/all")
      .then((response) => {
        setWordlistData(response.data)
      })
      .catch((error) => console.log(error))
    setWordlistCount(Object.keys(wordlistData).length)
    console.log("wordlistcount updated")
  }
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>Wordlists</Card.Title>
          <Card.Text>
            <div>
              {wordlistData && (
                <div>
                  {Array.from(wordlistData).map((list) => (
                    <Card>
                      <Card.Body>
                        <Card.Title>{list.name}</Card.Title>
                        <Card.Text>
                          {list.words && (
                            <div>
                              {Array.from(list.words).map((word) => (
                                <div>{word}</div>
                              ))}
                            </div>
                          )}
                          <div className="d-flex justify-content-end">
                            <Button
                              variant="danger"
                              onClick={() => {
                                deleteWordList(list.name.toString())
                                updateWordlistCount()
                              }}
                            >
                              Delete
                            </Button>
                          </div>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  ))}
                </div>
              )}
            </div>
            <Card>
              <Card.Body>
                <Card.Title>New Wordlist</Card.Title>
                <Card.Text>
                  <Form onSubmit={handleSubmit}>
                    <Form.Control
                      type="text"
                      name="title"
                      placeholder="title"
                      value={formData.title}
                      onChange={handleChange}
                    />
                    <Form.Control
                      type="text"
                      name="words"
                      placeholder="words separated by spaces"
                      value={formData.words}
                      onChange={handleChange}
                    />
                    <div className="d-flex justify-content-end">
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </div>
                  </Form>
                </Card.Text>
              </Card.Body>
            </Card>
          </Card.Text>
        </Card.Body>
      </Card>
      <button onClick={setUser1}>brandon</button>
      <button onClick={setUser2}>test</button>
    </div>
  )
}

export default Wordlists
