import React, { useEffect, useState } from "react";
import axios from 'axios';
import styled from 'styled-components';
import { Button, Form, Input } from 'reactstrap';

const Wrapper = styled.div`
width: 30%;
margin: 0 auto;
`

const Login = () => {
  const[login, setLogin] = useState({
    username: '',
    password: ''
  })

  const loginSuccess = e => {
  e.preventDefault();
  axios.get('http://localhost:5000')
  .then(res => {
    localStorage.setItem('token' , res.data.payload)
  })
  .catch(err => console.log(err))
  }

  const onChange = e => {
    setLogin({
      ...login, 
      [e.target.name]: e.target.value
    })
  }

    return (
    <Wrapper>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <Form onSubmit={loginSuccess}>
        <Input 
        input="text"
        name="username"
        placeholder="Enter username"
        onChange={onChange}
        value={login.username}
        />

        <Input 
        input="password"
        name="password"
        placeholder="Enter Password"
        onChange={onChange}
        value={login.password}
        />
        <Button>Login</Button>
      </Form>
    </Wrapper>
  );
};

export default Login;
