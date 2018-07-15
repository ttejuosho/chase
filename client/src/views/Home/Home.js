import React, { Component } from "react";
import "./Home.css";


class Home extends Component {
    render() {
        return (
            <div>
            <div className="section section__hero" id="index-banner">
            <div className="container">
              <div className="row">
                <div className="col s12 m7">
                  <h1 className="header">Kòwòpè Credit Union</h1>
                  <h3 className="header">Olòwó Lòlòwó</h3>
                  <h5 className="header">Dont mind this gorilla o ==></h5> 
                </div>
                <div className="col s12 m5 gorilla"> </div>
              </div>
              <div className="row center">
                  <a id="cta__main" href="#!" className="btn btn-large">Learn More</a>
              </div>
            </div>
          </div>
              <div id="pricing" className="section section__pricing | center"> 
              <div className="row">
                 <h2 className="center">Products</h2>
                <div className="col s12 m12 l6"> 
                  <div className="card">
                    <h2>Savings</h2>
                    
                    <p className="bold">Just give us your money everyday, e fit be small money or big money, we go take am cos we need it.</p>
                    
                   
                    <div className="card-reveal">
                      <span className="card-title"> <i className="mdi-navigation-close right">&nbsp;</i><br />More information.</span>
                      <p>Beep.</p>
                      <p className="price">Beep.</p>
                    </div>
                  </div>
                </div>
                <div className="col s12 m12 l6"> 
                  <div className="card">
                    <h2>Loans</h2>
                    
                    <p className="bold">We give you money and you pay us back everyday through the credit officers. You miss a payment, You see gorilla.</p>
                    
                    
                    <div className="card-reveal">
                      <span className="card-title"> <i className="mdi-navigation-close right"></i><br /> More information.</span>
                      <p> Beep. </p>
                      <p className="price">Beep.</p>
                    </div>
                  </div>
                </div>
              </div>          
            </div>
            </div> 

        )
    }
}

export default Home;