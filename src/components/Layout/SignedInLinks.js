import React from "react";
import {NavLink,Link} from 'react-router-dom'
const SignedInLinks = ({activeStyle}) => {
  return (
    <React.Fragment>
      <li className="nav-item ">
        <NavLink className="nav-link" to="/create" activeStyle={activeStyle}>
          New Blog
        </NavLink>
      </li>

      <li className="nav-item ">
        <Link className="nav-link" to="/" >
          Log Out
        </Link>
      </li>
    </React.Fragment>
  );
};
export default SignedInLinks;
