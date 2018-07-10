import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Signin.css";



class Signin extends Component {
    render() {
        return (

            <div className="container">
                <div className="row">
                    <form className="col s12" id="signin" method="post" action="signin">
                    <div className="row">
                        <div className="input-field col s6 offset-s3">
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="email" name="email" type="email" className="validate" />
                                    <label htmlFor="email">Email</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="password" name="password" type="password" className="validate" />
                                    <label htmlFor="password">Password</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    </form>
                </div>
                <div className="row center">
                    <button className="btn waves-effect waves-light purple widebtn" type="submit" name="action">
                            <a className="btntxt" value="Sign In" href="/posts">Log In<i className="mdi-content-send right"></i></a>
                    </button>
                    <p>Not a member yet ? <a className="hplink" href="/signup">Sign Up Here</a></p>
                </div>
            </div>

        )
    }
}

export default withRouter (Signin);