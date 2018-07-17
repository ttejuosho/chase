import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Signup.css";



class Signup extends Component {

    render() {
        return (
            <main>
                <div className="row">
                    <form id="signup" name="signup" method="post" action="/signup" className="col s12">
                        <div className="input-field col s6 offset-s3">
                        <h5 className="page-title">Register Here</h5>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input name="name" type="text" />
                                    <label htmlFor="name">Name</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input name="email" type="email" />
                                    <label htmlFor="email">Email</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input name="phoneNumber" type="text" />
                                    <label htmlFor="phoneNumber">Phone Number</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input name="password" type="password" />
                                    <label htmlFor="password">Password</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input name="password" type="password" />
                                    <label htmlFor="password">Verify Password</label>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="row center">
                    <button className="btn waves-effect waves-light" type="submit" value="Sign Up">Sign Up</button>
                    <p>Already a member ? <a href="/signin">Log in here</a></p>
                </div>
            </main>

        )
    }
}

export default withRouter(Signup);