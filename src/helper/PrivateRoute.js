import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ children, isAuthenticated,...rest }) => {
  return (
    <Route
      {...rest}
      render={() => (isAuthenticated ? children : <Redirect to="/" />)}
    />
  );
}

const mapStateToprops = (state)=>{
    return {
        isAuthenticated : state.auth.isAuthenticated
    }
}

export default connect(mapStateToprops,null)(PrivateRoute)
