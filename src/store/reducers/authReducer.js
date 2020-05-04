import * as actions from "../../actions/actionTypes";
import { checkAuth, authenticate, logout } from "../../helper/utils";

const initialState = {
  isAuthenticated: checkAuth() ? true : false,
  isLoading: false,
  token: checkAuth() ? checkAuth.token : null,
  error: "",
  user: checkAuth() ? checkAuth().user : null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN_REQUEST:
    case actions.REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: "",
        user: null,
        token: null,
      };
    case actions.LOGIN_SUCESS:
    case actions.REGISTER_SUCESS:
      authenticate(action.payload);
      return {
        ...state,
        isLoading: false,
        user:action.payload.user,
        token:action.payload.token,        
        isAuthenticated: true,
        error: "",
      };

    case actions.LOGOUT:
    case actions.LOGIN_FAIL:
    case actions.REGISTER_FAIL:
      logout();
      return {
        ...state,
        isLoading: false,
        user:null,
        token:null,
        isAuthenticated:false,
        error: action.payload ? action.payload.error : "",
      };

    default:
      return state;
  }
};

export default authReducer;
