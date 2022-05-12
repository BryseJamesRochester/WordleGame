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
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  })

  const { switchToSignup } = useContext(AccountContext)


  const handleSubmit = (event) => {
    console.log("submitting")
    axios
      .post("http://localhost:5001/users/" + loginData.username + "/login", {
        password: loginData.password,
      }, {})
      .then(function (response) {
        if(response.data=="Successful login") {
          window.sessionStorage.setItem("Username", loginData.username);
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  const handleChange = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <BoxContainer>
      <Form onSubmit={handleSubmit}>
        <Form.Control
          type="text"
          name="username"
          placeholder="Username"
          value={loginData.username}
          onChange={handleChange}
        />
        <Form.Control
          type="text"
          name="password"
          placeholder="Password"
          value={loginData.password}
          onChange={handleChange}
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
  )
}
