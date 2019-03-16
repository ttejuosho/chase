import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./NewCustomer.css";


class NewCustomer extends Component {
    render(){
        return(
            <main>
                <div className="row">
                    <form id="signup" name="signup" method="post" action="/signup" className="col s12">
                        <div className="input-field col s6 offset-s3">
                        <h5 className="page-title">Add New Customer</h5>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input name="name" type="text" />
                                    <label htmlFor="name">Name</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input name="homeAddress" type="text" />
                                    <label htmlFor="homeAddress">Home Address</label>
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
                        </div>
                    </form>
                </div>
                <div className="row center">
                    <button className="btn waves-effect waves-light" type="submit" value="Sign Up">Add Customer</button>
                </div>
            </main>
        )
    }
}

export default withRouter(NewCustomer);