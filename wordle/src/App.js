import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Keyboard from './components/Keyboard.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from '../Login/Login';
import useToken from './useToken';

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() {
  const token = getToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div>
   <p>test</p>
   <Keyboard />
   </div>
  );
}

export default App;
