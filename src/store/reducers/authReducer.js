import * as actions from "../../actions/actionTypes";
import { checkAuth, authenticate } from "../../helper/utils";

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
      let token = action.payload.token;
      let user = action.payload.user;

      authenticate(action.payload);
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        token: token,
        user: user,
        error: "",
      };

    case actions.LOGOUT:
    case actions.LOGIN_FAIL:
    case actions.REGISTER_FAIL:
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
};

export default authReducer;
