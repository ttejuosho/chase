import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Home from "./views/Home";
import Register from "./views/Register";
import NewCustomer from './views/NewCustomer/NewCustomer';
import NewCreditOfficer from './views/NewCreditOfficer/NewCreditOfficer';

class App extends Component {
  render() {
    return (
          <Router>
            <div>
              <Header />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/signin" component={Signin} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/newcustomer" component={NewCustomer} />
                <Route exact path="/newcreditofficer" component={NewCreditOfficer} />
              </Switch>
              <Footer />
            </div>
          </Router>
    );
  }
}

export default App;
