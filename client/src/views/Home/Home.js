import React, { Component } from "react";
import "./Home.css";



class Home extends Component {
    render() {
        return (
            <div className="home">
                <h3>Welcome to Chase!!!</h3>
                <a href="/signin"><h5>Login</h5></a>
                <a href="/signup"><h5>Add a new customer</h5></a>
            </div>
        )
    }
}

export default Home;