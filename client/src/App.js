import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/Login";
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
        </Switch>
      </div>
    </Router>
    </Div>
  );
}

export default App;
