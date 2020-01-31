import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PrivateRoute } from './components/PrivateRoute'

import Login from "./components/Login";
import BubblePage from './components/BubblePage'
import "./styles.scss";
import styled from "styled-components";

const Div = styled.div`
 width: 100%
`

function App() {
  return (
    <Div>
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <Switch>
          <PrivateRoute path="/bubblesPage" component={BubblePage}/>
        </Switch>
      </div>
    </Router>
    </Div>
  );
}

export default App;
