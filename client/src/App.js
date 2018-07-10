import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Home from "./views/Home";
class App extends Component {
  render() {
    return (
          <Router>
            <div>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/signin" component={Signin} />
                <Route exact path="/signup" component={Signup} />
              </Switch>
            </div>
          </Router>
    );
  }
}

export default App;
