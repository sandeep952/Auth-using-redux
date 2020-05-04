import {
  REGISTER_REQUEST,
  REGISTER_SUCESS,
  REGISTER_FAIL,
} from "./actionTypes";
import axios from "axios";
import API from "../api";

export const registerRequest = () => {
  return {
    type: REGISTER_REQUEST,
  }
}

export const registerSuccess = (data) => {
  console.log("data",data)
  return {
    type: REGISTER_SUCESS,
    payload: data,
  };
};

const registerFail = (err) => {
  return {
    type: REGISTER_FAIL,
    payload:{
      error:err
    }
  };
};

//thunk to register new user
export const registerUser = (userDetails) => {

  return (dispatch) => {
    dispatch(registerRequest());
    return axios.post(`${API}/signup`, userDetails)
      .then((response) => {
        dispatch(registerSuccess(response.data));
      })
      .catch((err) => {
        console.log("err",err.response)
        dispatch(registerFail(err.response.data.error));
      });
  }
}
