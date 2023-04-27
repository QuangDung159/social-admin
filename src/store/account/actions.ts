import {
  AccountActionTypes,
  AuthenticatedUser,
  LOAD_CURRENT_LOGIN_USER_FAIL,
  LOAD_CURRENT_LOGIN_USER_REQUEST,
  LOAD_CURRENT_LOGIN_USER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./types";

export const onLogin = (email: string, password: string) => {
  return {
    type: LOGIN_REQUEST,
    payload: { email, password },
  };
};

export const onLoginSuccess = (res: any) => {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      token: res.token,
    },
  };
};

export const loginFail = (error: string) => {
  return {
    type: LOGIN_FAIL,
    payload: { error },
  };
};

export const logout = (): AccountActionTypes => {
  return {
    type: LOGOUT,
  };
};

export const getCurrentLoginUserRequest = () => {
  return {
    type: LOAD_CURRENT_LOGIN_USER_REQUEST,
  };
};

export const getCurrentLoginUserSuccess = (user: AuthenticatedUser) => {
  return {
    type: LOAD_CURRENT_LOGIN_USER_SUCCESS,
    payload: {
      user,
    },
  };
};

export const getCurrentLoginUserFail = (error: string) => {
  return {
    type: LOAD_CURRENT_LOGIN_USER_FAIL,
    payload: { error },
  };
};
