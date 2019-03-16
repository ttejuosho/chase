import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./CustomerProfile.css";


class CustomerProfile extends Component{
    state = {
        userData: null
    }

    componentDidMount() {
        if (this.props.userData) {
            this.setState({ userData: this.props.userData })
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.userData) {
            this.setState({ userData: nextProps.userData })
        }
    }
    
    render(){
        return(
            <main>

            </main>
        )
    }
}

export default withRouter(CustomerProfile);