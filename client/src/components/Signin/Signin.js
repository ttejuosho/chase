import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { auth } from "../../firebase";
import "./Signin.css";



class Signin extends Component {

    state = {
        email: "",
        password: "",
        error: null
    };

    handleInputChange = event => {
        const { name, value } = event.target

        this.setState({
            [name]: value
        });
        // console.log(name, value);
        // console.log(this.state);
    }

    handleFormSubmit = event => {
        event.preventDefault();
        const {
          history
        } = this.props;
    
        const {
          email,
          password
        }= this.state;
        console.log(this.state);

        auth.doSignInWithEmailAndPassword(email, password)
        .then(() => {
          this.setState(() => ({ 
            email: "", 
            password: "",
            error: null
           }));
          history.push("/home");
        })
        .catch(error => {
          this.setState({error});
        });
    }

    render() {

        const {
        email,
        password,
        error
        } = this.state;

        const isInvalid = 
        password === "" ||
        email === "";

        return (
            <div>
                <div className="row">
                    <form className="col s12" id="signin" method="post" action="signin">
                    <div className="row">
                        <div className="input-field col s6 offset-s3">
                        <h5 className="page-title">Log In</h5>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input 
                                        id="email" name="email" type="email" 
                                        className="validate"
                                        value = {this.state.email} 
                                        onChange = {this.handleInputChange} />
                                    <label htmlFor="email">Email</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input 
                                        id="password" name="password" type="password" 
                                        className="validate" 
                                        value = {this.state.password} 
                                        onChange = {this.handleInputChange} />
                                    <label htmlFor="password">Password</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    {error && <p>Authentication Error: {error.message}</p>}
                    </form>
                </div>
                <div className="row center">
                    <button 
                        disabled={isInvalid} onClick={this.handleFormSubmit}
                        className= { isInvalid ? "btn waves-effect waves-light" : "btn waves-effect waves-light"} type="submit"> Log In </button>
                    <p>Not a member yet ? <a href="/signup">Sign Up Here</a></p>
                </div>
            </div>
        )
    }
}

export default withRouter (Signin);