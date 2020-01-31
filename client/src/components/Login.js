import React, { useEffect, useState } from "react";
import axios from 'axios';
import styled from 'styled-components';
import { Button, Form, Input } from 'reactstrap';
import { withRouter, Link } from 'react-router-dom'

const Wrapper = styled.div`
width: 30%;
margin: 0 auto;
`

const Login = (props) => {
  const[login, setLogin] = useState({
    username: '',
    password: ''
  })

  const loginAttempt = e => {
    console.log(login.username, login.password)
  e.preventDefault();
  axios.post('http://localhost:5000/api/login', {
    username: login.username,
    password: login.password,
  })
  .then(res => {
    localStorage.setItem('token' , res.data.payload)
    props.history.push(`/bubblesPage`)
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
      <Link to="/bubblesPage">Bubbles</Link>
      <Form onSubmit={loginAttempt}>
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

export default withRouter(Login);
