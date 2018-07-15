import React from "react";
import "./Header.css";
import "../../assets/materialize/css/materialize.css";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";

const Header = () => (
<header className="navbar-fixed">
  <nav>
    <div className="nav-wrapper">
      <a href="/" className="brand-logo">Kòwòpè</a>
      <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      <ul className="right hide-on-med-and-down">
        <li><a href="/">Branches</a></li>
        <li><a href="/">Credit Officers</a></li>
        <li><a href="/">Customers</a></li>
        <li><a href="/signin">Log In</a></li>
      </ul>
    </div>
  </nav>
  <ul className="sidenav" id="mobile-demo">
        <li><a href="/">Branches</a></li>
        <li><a href="/">Credit Officers</a></li>
        <li><a href="/">Customers</a></li>
        <li><a href="/signin">Log In</a></li>
  </ul>
</header>
);


export default Header;