import {
  REGISTER_REQUEST,
  REGISTER_SUCESS,
  REGISTER_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "./actionTypes";
import axios from "axios";
import API from "../api";

 const registerRequest = () => {
  return {
    type: REGISTER_REQUEST,
  };
};

 const registerSuccess = (data) => {
  console.log("data", data);
  return {
    type: REGISTER_SUCESS,
    payload: data,
  };
};

 const registerFail = (err) => {
  return {
    type: REGISTER_FAIL,
    payload: {
      error: err,
    },
  };
};

 const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

 const loginSuccess = (data) => {
  console.log("data", data);
  return {
    type: LOGIN_SUCESS,
    payload: data,
  };
};

const loginFail = (err) => {
  
  return {
    type: LOGIN_FAIL,
    payload: {
      error: err,
    },
  };
};


export const logout = ()=>{
  return {
    type:LOGOUT
  }
}
//thunk to register new user
export const registerUser = (userDetails) => {
  return (dispatch) => {
    dispatch(registerRequest());
    return axios
      .post(`${API}/signup`, userDetails)
      .then((response) => {
        dispatch(registerSuccess(response.data));
      })
      .catch((err) => {
        console.log("err", err.response);
        dispatch(registerFail(err.response.data.error));
      });
  };
};

//thunk to login user:

export const loginUser = (userDetails) => {
  return (dispatch) => {
    dispatch(loginRequest());

    axios
      .post(`${API}/signin`,userDetails)
      .then((response) => {
        dispatch(loginSuccess(response.data));
      })
      .catch((err) => {
        if(err.response){
          dispatch(loginFail(err.response.data.error));
        }
        else{
          dispatch(loginFail(err.message))
        }
      });
  };
};
