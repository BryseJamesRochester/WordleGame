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
import axios from "axios";

export function SignupForm(props, { setToken }) {
  const [username, setUsername] = useState();
  // const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confPass, setConfPass] = useState();
  const [response, setResponse] = useState();
  const { switchToSignin } = useContext(AccountContext);

  async function sendToBackend() {
    if (password==confPass) {
      let options = {
        method: 'POST',
        url: 'http://localhost:5000/users/' + username + '/add',
        headers: {'Content-Type': 'application/json'},
        data: {password: password, email: 'notworkingyet' + username + '@email.com'}
      };
      axios.request(options).then(function (response) {
        setResponse(response);
      }).catch(function (error) {
        setResponse(error);
      });
    }

  }

  return (
    <div>
      <BoxContainer>
        <FormContainer>
          <Input id="username" type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} />
          {/* <Input type="email" placeholder="Email" /> */}
          <Input id="password" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
          <Input id="comfirmPassword" type="password" placeholder="Password" onChange={e => setConfPass(e.target.value)} />
        </FormContainer>
        <Marginer direction="vertical" margin={10} />
        <SubmitButton onClick={sendToBackend} type="submit">Sign Up</SubmitButton>
        <Marginer direction="vertical" margin="1em" />
        <MutedLink href="#">
          Already have an account?
          <BoldLink href="#" onClick={switchToSignin}>
            Sign In
          </BoldLink>
        </MutedLink>
      </BoxContainer>
      <div>
        <p>Username: {username} Password: {password} ConfPass: {confPass} Response: {response}</p>
      </div>
    </div>
  );
}