import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Signup.css";



class Signup extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <form id="signup" name="signup" method="post" action="/signup" className="col s12">
                        <div className="input-field col s6 offset-s3">
                            <div className="row">
                                <div className="input-field col s12">
                                    <input name="name" type="text" />
                                    <label for="name">Name</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input name="email" type="email" />
                                    <label for="email">Email</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input name="password" type="password" />
                                    <label for="password">Password</label>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="row center">
                    <button className="btn waves-effect waves-light purple widebtn" type="submit" value="Sign Up" name="action">
                        <a className="btntxt">Sign Up<i className="mdi-content-send right"></i></a>
                    </button>
                    <p>Already a member ? <a className="hplink" href="/signin">Log in here</a></p>
                </div>
            </div>

        )
    }
}

export default withRouter(Signup);