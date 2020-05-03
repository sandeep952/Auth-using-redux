import React from "react";
import Signup from "../../components/auth/SignUp";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import { Redirect } from "react-router-dom";
const SignupContainer = (props) => {
  
  const didRedirect = ()=>{
    if(props.isAuthenticated){
      return <Redirect exact to="/dashboard" />
    }
  }

  return (
    <React.Fragment>
    {console.log("container render")}
      {didRedirect()}
      <Signup {...props} />
    </React.Fragment>
  )
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (userDetails) => {
      dispatch(registerUser(userDetails));
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);
