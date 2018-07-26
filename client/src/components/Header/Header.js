import React from "react";
import "./Header.css";
import "../../assets/materialize/css/materialize.css";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";

const Header = ({ authUser }) => (
<header className="navbar-fixed">
  <nav>
    <div className="nav-wrapper">
      <Link to="/" className="brand-logo">Kòwòpè</Link>
      <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      <ul className="right hide-on-med-and-down">
        <li><Link to="/">Branches</Link></li>
        <li><Link to="/">Credit Officers</Link></li>
        <li><Link to="/">Customers</Link></li>
        { !authUser ? <li><Link to="/signin">Log In</Link></li> : "" }
        { authUser ? <li><Link to="/home">Log Out</Link></li> : "" }
      </ul>
    </div>
  </nav>
  <ul className="sidenav" id="mobile-demo">
        <li><Link to="/">Branches</Link></li>
        <li><Link to="/">Credit Officers</Link></li>
        <li><Link to="/">Customers</Link></li>
        { !authUser ? <li><Link to="/signin">Log In</Link></li> : "" }
        { authUser ? <li><Link to="/home">Log Out</Link></li> : "" }
  </ul>
</header>
);


export default Header;