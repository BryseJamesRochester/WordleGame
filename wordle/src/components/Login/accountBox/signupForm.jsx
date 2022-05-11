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

  const [response, setResponse] = useState();
  const { switchToSignin } = useContext(AccountContext);

  async function sendToBackend() {
    setUsername(await document.getElementById("username").value);
    let pass = await document.getElementById("password").value;
    let confPass = await document.getElementById("confirmPassword").value;
    if (pass==confPass) {
      setPassword(pass);

      let options = {
        method: 'POST',
        url: 'http://localhost:5000/users/' + username + '/add',
        headers: {'Content-Type': 'application/json'},
        data: {password: password, email: 'notworkingyet@email.com'}
      };

      setResponse('sending');
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
          <Input id="username" type="text" placeholder="Username" />
          {/* <Input type="email" placeholder="Email" /> */}
          <Input id="password" type="password" placeholder="Password" />
          <Input id="comfirmPassword" type="password" placeholder="Password" />
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
        <p>Hello: {response}</p>
      </div>
    </div>
  );
}