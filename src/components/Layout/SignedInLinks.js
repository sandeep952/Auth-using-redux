import React from "react";
import { NavLink, Link } from "react-router-dom";
const SignedInLinks = ({ activeStyle, username }) => {
  return (
    <React.Fragment>
      <li className="nav-item">
        <NavLink
          className="nav-link"
          exact
          to="/dashboard"
          activeStyle={activeStyle}
        >
          Dashboard
        </NavLink>
      </li>

      <li className="nav-item dropdown">
        <div
          className="nav-link dropdown-toggle btn"
          role="button"
          data-toggle="dropdown"
        >
          {username}
        </div>

        <div className="dropdown-menu">
          <Link className="nav-link dropdown-item text-dark" to="/logout">
            Log Out
          </Link>
        </div>
      </li>
    </React.Fragment>
  );
};
export default SignedInLinks;
