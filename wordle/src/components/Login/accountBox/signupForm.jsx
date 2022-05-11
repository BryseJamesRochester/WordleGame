import React, { useContext, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

async function signUpUser(credentials) {
  return fetch('/:username/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

function setToken(userToken) {
  sessionStorage.setItem("token", JSON.stringify(userToken))
}

function getToken() {
  const tokenString = sessionStorage.getItem("token")
  const userToken = JSON.parse(tokenString)
  return userToken?.token
}

export function SignupForm(props, { setToken }) {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { switchToSignin } = useContext(AccountContext);

  const token = getToken()



  const handleSubmit = async e => {
    e.preventDefault();
    const token = await signUpUser({
      username,
      email,
      password
    });
    setToken(token);
  }

  return (
    <BoxContainer>
      <FormContainer onSubmit={handleSubmit}>
        <Input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)}/>
        <Input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
        <Input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
        <Input type="password" placeholder="Confirm Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={handleSubmit}>Sign Up</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Sign In
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}