import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { auth } from "../../firebase";
import API from "../../utils/API";
import "./Signup.css";



class Signup extends Component {

    state = {
        name: "",
        email: "",
        phoneNumber: "",
        password: "",
        passwordVerify: "",
        dberror: null,
        fberror: null
    };

    handleInputChange = (event) => {
        const { name, value } = event.target

        this.setState({ [name]: value });
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const {
            history
          } = this.props;

        const {
            name,
            email,
            phoneNumber,
            password
        } = this.state;

        const newUser = {
                        name,
                        email,
                        phoneNumber
                        }

        auth.doCreateUserWithEmailAndPassword(email, password)
            .then(authUser => {
         API.createUser(newUser)
            .catch(dberror => {
        this.setState({ dberror })
            })

            this.setState({
                name: "",
                email: "",
                phoneNumber: ""
            });

            this.props.updateUserDataInApp(email)
            history.push("/register");
        }).catch(fberror => {
            this.setState({ fberror });
        });
    }

    render() {

        const {
            name,
            email,
            phoneNumber,
            password,
            passwordVerify,
            dberror,
            fberror
        } = this.state

        const isInvalid = 
        password !== passwordVerify ||
        password === '' ||
        email === '' || 
        name === '' || 
        phoneNumber === '';

        return (
            <main>
                <div className="row">
                    <form id="signup" name="signup" className="col s12">
                        <div className="input-field col s6 offset-s3">
                        <h5 className="page-title">Register Here</h5>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input name="name" type="text" 
                                           value = {this.state.name} 
                                           onChange = {this.handleInputChange} />
                                    <label htmlFor="name">Name</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input name="email" type="email"
                                    value = {this.state.email} 
                                    onChange = {this.handleInputChange}  />
                                    <label htmlFor="email">Email</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input name="phoneNumber" type="text" 
                                    value = {this.state.phoneNumber} 
                                    onChange = {this.handleInputChange} />
                                    <label htmlFor="phoneNumber">Phone Number</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input name="password" type="password" 
                                    value = {this.state.password} 
                                    onChange = {this.handleInputChange} />
                                    <label htmlFor="password">Password</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input name="passwordVerify" type="password" 
                                    value = {this.state.passwordVerify} 
                                    onChange = {this.handleInputChange} />
                                    <label htmlFor="passwordVerify">Verify Password</label>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="row center">
                    <button className= { isInvalid ? "btn waves-effect waves-light" : "btn waves-effect waves-light" } type="submit" 
                            disabled={isInvalid} 
                            onClick = {this.handleFormSubmit} >Sign Up</button>
                    <p>Already a member ? <a href="/signin">Log in here</a></p>
                    { fberror && <p>Authentication Error: {fberror.message}</p> }
                    { dberror && <p>Database Error: {dberror.message}</p> }
                </div>
            </main>

        )
    }
}

export default withRouter(Signup);