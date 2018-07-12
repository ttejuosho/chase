import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import androidLogo from "../../assets/images/android-logo.png";
import androidLogo2 from "../../assets/images/android-logo-white.png";


const Header = () => (
  <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
  <div className="android-header mdl-layout__header mdl-layout__header--waterfall">
<div className="mdl-layout__header-row">
          <span className="android-title mdl-layout-title">
            <img className="android-logo-image" src={androidLogo} />
          </span>
         {/* Add spacer, to align navigation to the right in desktop */}
        <div className="android-header-spacer mdl-layout-spacer"></div>
        <div className="android-search-box mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right mdl-textfield--full-width">
          <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="search-field">
            <i className="material-icons">search</i>
          </label>
          <div className="mdl-textfield__expandable-holder">
            <input className="mdl-textfield__input" type="text" id="search-field" />
          </div>
        </div>
  <div className="android-navigation-container">
          <nav className="android-navigation mdl-navigation">
            <a className="mdl-navigation__link mdl-typography--text-uppercase" href="">Phones</a>
            <a className="mdl-navigation__link mdl-typography--text-uppercase" href="">Tablets</a>
            <a className="mdl-navigation__link mdl-typography--text-uppercase" href="">Wear</a>
            <a className="mdl-navigation__link mdl-typography--text-uppercase" href="">TV</a>
            <a className="mdl-navigation__link mdl-typography--text-uppercase" href="">Auto</a>
            <a className="mdl-navigation__link mdl-typography--text-uppercase" href="">One</a>
            <a className="mdl-navigation__link mdl-typography--text-uppercase" href="">Play</a>
          </nav>
        </div>
        <span className="android-mobile-title mdl-layout-title">
            <img className="android-logo-image" src={androidLogo} />
          </span>
          <button className="android-more-button mdl-button mdl-js-button mdl-button--icon mdl-js-ripple-effect" id="more-button">
          <i className="material-icons">more_vert</i>
        </button>
        <ul className="mdl-menu mdl-js-menu mdl-menu--bottom-right mdl-js-ripple-effect" htmlFor="more-button">
          <li className="mdl-menu__item">5.0 Lollipop</li>
          <li className="mdl-menu__item">4.4 KitKat</li>
          <li className="mdl-menu__item">Android History</li>
        </ul>
          </div>
          </div>

          <div className="android-drawer mdl-layout__drawer">
          <span className="mdl-layout-title">
          <img className="android-logo-image" src={androidLogo2} />
          </span>
        <nav className="mdl-navigation">
          <a className="mdl-navigation__link" href="">Phones</a>
          <a className="mdl-navigation__link" href="">Tablets</a>
          <a className="mdl-navigation__link" href="">Wear</a>
          <a className="mdl-navigation__link" href="">TV</a>
          <a className="mdl-navigation__link" href="">Auto</a>
          <a className="mdl-navigation__link" href="">One</a>
          <a className="mdl-navigation__link" href="">Play</a>
          <div className="android-drawer-separator"></div>
          <span className="mdl-navigation__link" href="">Versions</span>

        </nav>
      </div>
      <div className="android-content mdl-layout__content"><a name="top"></a></div>
      
    </div>
          
);


export default Header;