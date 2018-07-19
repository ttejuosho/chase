import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { firebase } from "./firebase";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Home from "./views/Home";
import Register from "./views/Register";
import NewCustomer from './views/NewCustomer/NewCustomer';
import NewCreditOfficer from './views/NewCreditOfficer/NewCreditOfficer';
import API from "./utils/API";


class App extends Component {

  state = {
    authUser: null,
    userData: null
  }
  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        API.getUser("email", authUser.email)
          .then(response => {
            const userData = response.data[0];
            // console.log(userData)
            this.setState({ authUser, userData })
          })
      } else {
        this.setState({ authUser: null, userData: null });
      }
    });
    // the user is logged in query the db for the users information email 
  }

  updateUserDataInApp = (email) => {
    API.getUser("email", email)
      .then(response => {
        const userData = response.data[0];
        this.setState({ userData })
      })
  }


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
                <Route exact path="/customerprofile"
                render={props => (
                  <UserProfile {...props} userData={this.state.userData} 
                               updateUserDataInApp={this.updateUserDataInApp}/>
                )} />
              </Switch>
              <Footer />
            </div>
          </Router>
    );
  }
}

export default App;
