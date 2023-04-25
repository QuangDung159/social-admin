import {
  AccountActionTypes,
  AccountState,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./types";

const initState: AccountState = {
  error: null,
  loading: false,
  token: null,
  user: null,
};

const accountReducer = (
  state: AccountState = initState,
  action: AccountActionTypes
): AccountState => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
        user:
          "payload" in action
            ? "token" in action.payload
              ? action.payload.user
              : null
            : null,
        token:
          "payload" in action
            ? "token" in action.payload
              ? action.payload.token
              : null
            : null,
      };
    }
    case LOGIN_FAIL: {
      return {
        ...state,
        loading: false,
        error:
          "payload" in action
            ? "error" in action.payload
              ? action.payload.error
              : null
            : null,
      };
    }
    case LOGOUT: {
      return initState;
    }
    default:
      return state;
  }
};

export { accountReducer };
