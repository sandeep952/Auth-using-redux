import React from 'react'
import Signup from '../../components/auth/SignUp'
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';


const SignupContainer = (props) =>{
    return (
        <React.Fragment>
          <Signup registerUser={props.registerUser}/>  
        </React.Fragment>
    )
}




const mapDispatchToProps = (dispatch) => {
  return {
      registerUser:(userDetails)=>{
        
       dispatch(registerUser(userDetails))

      }
 
      }
}

export default connect(null,mapDispatchToProps)(SignupContainer);