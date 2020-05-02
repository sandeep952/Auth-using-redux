import * as actions from "../../actions/actionTypes";
import { checkAuth, authenticate } from "../../helper/utils";

const initialState = {
  isAuthenticated: checkAuth(),
  isLoading: false,
  token: checkAuth().token,
  error: "",
  user: checkAuth().user,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN_REQUEST:
    case actions.REGISTER_REQUEST:
      console.log("req received");
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

    case actions.LOGIN_OUT:
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
