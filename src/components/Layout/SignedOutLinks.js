import React from "react";
import {NavLink} from 'react-router-dom'
const SignedOutLinks = ({activeStyle}) => {
  return (
    <React.Fragment>
      <li className="nav-item ">
        <NavLink className="nav-link" to="/" exact activeStyle={activeStyle}>
          Signup
        </NavLink>
      </li>

      <li className="nav-item ">
        <NavLink className="nav-link" to="/signin" activeStyle={activeStyle}>
          LogIn
        </NavLink>
      </li>
    </React.Fragment>
  );
};
export default SignedOutLinks;
