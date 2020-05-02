import React from "react";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import {NavLink} from 'react-router-dom'
const Nav = () => {
  const activeStyle= {color:"white" , fontWeight:"bold"}
    return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
      <span className="navbar-brand">Tutor 247</span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link"  exact to="/dashboard" activeStyle={activeStyle}>
              Dashboard
            </NavLink>
          </li>
          <SignedOutLinks activeStyle={activeStyle}/>
          <SignedInLinks activeStyle={activeStyle}/>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
