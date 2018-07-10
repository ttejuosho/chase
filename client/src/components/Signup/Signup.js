import React, { Component } from "react";
import "./Signup.css";



class Signup extends Component {

    render() {
        return (
            <div class="container">
                <div class="row">
                    <form id="signup" name="signup" method="post" action="/signup" class="col s12">
                        <div class="input-field col s6 offset-s3">
                            <div class="row">
                                <div class="input-field col s12">
                                    <input name="name" type="text" />
                                    <label for="name">Name</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12">
                                    <input name="email" type="email" />
                                    <label for="email">Email</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12">
                                    <input name="password" type="password" />
                                    <label for="password">Password</label>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="row center">
                    <button class="btn waves-effect waves-light purple widebtn" type="submit" value="Sign Up" name="action">
                        <a class="btntxt">Sign Up<i class="mdi-content-send right"></i></a>
                    </button>
                    <p>Already a member ? <a class="hplink" href="/signin">Log in here</a></p>
                </div>
            </div>
            
        )
    }
}