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
  const [email, setEmail] = useState();

  const { switchToSignin } = useContext(AccountContext);

  async function sendToBackend() {
    if (password==confPass) {
      let options = {
        method: 'POST',
        url: 'http://localhost:5001/users/' + username + '/add',
        headers: {'Content-Type': 'application/json'},
        data: {password: password, email: email}
      };
      axios.request(options).then(function (response) {
        if (response.data.success)
          window.sessionStorage.setItem("Username", username);
      }).catch(function (error) {
        console.log(error)
      });
    }

  }

  return (
    <div>
      <BoxContainer>
        <FormContainer onSubmit={sendToBackend}>
          <Input id="username" type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} />
          <Input id="email" type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} />
          {/* <Input type="email" placeholder="Email" /> */}
          <Input id="password" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
          <Input id="comfirmPassword" type="password" placeholder="Password" onChange={e => setConfPass(e.target.value)} />
        
        <Marginer direction="vertical" margin={10} />
        <SubmitButton type="submit">Sign Up</SubmitButton>
        <Marginer direction="vertical" margin="1em" />
        </FormContainer>
        <MutedLink href="#">
          Already have an account?
          <BoldLink href="#" onClick={switchToSignin}>
            Sign In
          </BoldLink>
        </MutedLink>
      </BoxContainer>
      <div>
        <p></p>
      </div>
    </div>
  );
}