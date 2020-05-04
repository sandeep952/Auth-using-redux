import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { logout } from "../../actions/authActions";

class LogOut extends Component {
  componentDidMount() {
    this.props.logout();
  }

  render() {
    return (
      <div>
        <Redirect exact to="/" />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(logout());
    },
  };
};
export default connect(null, mapDispatchToProps)(LogOut);
