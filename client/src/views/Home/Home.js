import React, { Component } from "react";
import "./Home.css";



class Home extends Component {
    render() {
        return (
            <div className="home">
                <h3>Welcome to Chase!!!</h3>
                <a href="/signin"><h5>Signin Here</h5></a>
                <a href="/signup"><h5>Signup Here</h5></a>
            </div>
        )
    }
}

export default Home;