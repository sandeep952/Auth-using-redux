import React from "react";
import { connect } from "react-redux";
import Nav from "../components/Layout/Nav";

const NavContainer = (props) => {
  return (
    <React.Fragment>
      <Nav {...props} />
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
  }
};
export default connect(mapStateToProps, null)(NavContainer);
