import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

class Register extends Component {
    render() {
        return (
            <div className="row">
                    <form id="register" name="register" className="col s12">
                        <div className="input-field col s6 offset-s3">
                        <h5 className="page-title">Business Information</h5>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input name="businessName" type="text" />
                                    <label htmlFor="businessName">Business Name</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input name="businessAddress" type="text" />
                                    <label htmlFor="businessAddress">Business Address</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input name="businessPhone" type="text" />
                                    <label htmlFor="businessPhone">Business Phone Number</label>
                                </div>
                            </div>
                            <div className="row center">
                    <button className="btn waves-effect waves-light" type="submit" value="">Continue</button>
                </div>
                        </div>
                    </form>
                </div>
        ) 
    }
}

export default Register;