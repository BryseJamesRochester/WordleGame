import React, { useContext, useState } from "react"
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common"
import { Marginer } from "../marginer"
import { AccountContext } from "./accountContext"
import axios from "axios"
import { Form } from "react-bootstrap"


export function LoginForm(props, { setToken }) {
  const [loginResponse, setLoginResponse] = useState()
  // const [loginData, setLoginData] = useState({
  //   username: "",
  //   password: "",
  // })
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [debug, setDebug] = useState();

  const { switchToSignup } = useContext(AccountContext)

  const handleSubmit = async function() {
    console.log(`Username:${username}, ${password}`);
    let options = {
      method: 'POST',
      url: 'http://localhost:5001/users/' + username + '/login',
      headers: {'Content-Type': 'application/json'},
      data: {password: password}
    };
    axios.request(options)
    .then((response) => {
      console.log(response);
      if (response.data.success) {
        window.sessionStorage.setItem("Username", username);
      }
        
    })
    .catch(e => {
      console.log(e);
    })
  }


  // const handleSubmit = (event) => {
  //   console.log("submitting")
  //   axios.post("http://localhost:5001/users/" + username + "/login", {
  //       password: password,
  //     }, {})
  //     .then(function (response) {
  //       console.log(response.data);
  //       if(response.data=="Successful login") {
  //         window.sessionStorage.setItem("Username", username);
  //       }
  //     })
  //     .catch(function (error) {
  //       console.log(error)
  //     })
  // }

  // const handleChange = (event) => {
  //   setLoginData({
  //     ...loginData,
  //     [event.target.name]: event.target.value,
  //   })
  // }

  return (
    <div>
      <BoxContainer>
        <Form onSubmit={handleSubmit}>
          <Form.Control
            type="text"
            name="username"
            placeholder="Username"
            onChange={e => setUsername(e.target.value)}
          />
          <Form.Control
            type="text"
            name="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />

          <Marginer direction="vertical" margin={10} />
          <MutedLink href="#">Forget your password?</MutedLink>
          <Marginer direction="vertical" margin="1.6em" />
          <SubmitButton type="submit">Sign In</SubmitButton>
        </Form>
        <Marginer direction="vertical" margin="1em" />
        <MutedLink href="#">
          Don't have an account?{" "}
          <BoldLink href="#" onClick={switchToSignup}>
            Sign Up
          </BoldLink>
        </MutedLink>
      </BoxContainer>
      <p>Username: {username}</p>
    </div>
  )
}