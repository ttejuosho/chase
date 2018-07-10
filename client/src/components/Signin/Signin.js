import React, { Component } from "react";
import "./Signin.css";



class Signin extends Component {
    render() {
        return (
            
            <div class="container">
                <div class="row">
                    <form class="col s12" id="signin" method="post" action="signin">
                    <div class="row">
                        <div class="input-field col s6 offset-s3">
                            <div class="row">
                                <div class="input-field col s12">
                                    <input id="email" name="email" type="email" class="validate" />
                                    <label for="email">Email</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12">
                                    <input id="password" name="password" type="password" class="validate" />
                                    <label for="password">Password</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    </form>
                </div>
                <div class="row center">
                    <button class="btn waves-effect waves-light purple widebtn" type="submit" name="action">
                            <a class="btntxt" value="Sign In" href="/posts">Log In<i class="mdi-content-send right"></i></a>
                    </button>
                    <p>Not a member yet ? <a class="hplink" href="/signup">Sign Up Here</a></p>
                </div>
            </div>

        )
    }
}