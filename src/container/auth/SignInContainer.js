import React from "react";
import SignIn from "../../components/auth/SignIn";
import { Redirect } from "react-router-dom";
import { loginUser } from "../../actions/authActions";
import { connect } from "react-redux";

const SignInContainer = (props) => {
  const didRedirect = () => {
    if (props.isAuthenticated) {
      return <Redirect exact to="/dashboard" />;
    }
  };

  return (
    <React.Fragment>
      {didRedirect()}
      <SignIn {...props} />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser:(userDetails)=>{
        dispatch(loginUser(userDetails))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);
