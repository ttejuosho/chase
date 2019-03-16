import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./NewCreditOfficer.css";


class NewCreditOfficer extends Component{
    render(){
        return(
            <main>
            <div className="row">
                <form id="signup" name="signup" method="post" action="/signup" className="col s12">
                    <div className="input-field col s6 offset-s3">
                    <h5>Add New Credit Officer</h5>
                        <div className="row">
                            <div className="input-field col s12">
                                <input name="co-name" type="text" />
                                <label htmlFor="co-name">Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input name="co-address" type="text" />
                                <label htmlFor="co-address">Address</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input name="co-email" type="email" />
                                <label htmlFor="co-email">Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input name="co-phone" type="text" />
                                <label htmlFor="co-phone">Phone Number</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input name="branch" type="text" />
                                <label htmlFor="branch">Branch</label>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className="row center">
                <button className="btn waves-effect waves-light" type="submit" value="Sign Up">Add Credit Officer</button>
            </div>
        </main>
        )
    }
}

export default withRouter(NewCreditOfficer);