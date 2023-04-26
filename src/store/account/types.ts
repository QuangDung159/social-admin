export const LOGIN_REQUEST: string = "LOGIN_REQUEST";
export const LOGIN_SUCCESS: string = "LOGIN_SUCCESS";
export const LOGIN_FAIL: string = "LOGIN_FAIL";

export const LOGOUT: string = "LOGOUT";

export const LOAD_CURRENT_LOGIN_USER_REQUEST =
  "LOAD_CURRENT_LOGIN_USER_REQUEST";
export const LOAD_CURRENT_LOGIN_USER_SUCCESS =
  "LOAD_CURRENT_LOGIN_USER_SUCCESS";
export const LOAD_CURRENT_LOGIN_USER_FAIL = "LOAD_CURRENT_LOGIN_USER_FAIL";

export interface AuthenticatedUser {
  _id: string;
  last_name: string;
  email: string;
  avatar: string;
}

export interface LoginRequest {
  type: typeof LOGIN_REQUEST;
  payload: {
    email: string;
    password: string;
  };
}

export interface LoginSuccess {
  type: typeof LOGIN_SUCCESS;
  payload: {
    token: string;
    user: AuthenticatedUser;
  };
}

export interface LoginFail {
  type: typeof LOGIN_FAIL;
  payload: {
    error: string;
  };
}

export interface Logout {
  type: typeof LOGOUT;
}

export interface AccountState {
  user: AuthenticatedUser | null;
  loading: boolean;
  error: string | null;
  token: string | null;
}

export type AccountActionTypes =
  | LoginRequest
  | LoginSuccess
  | LoginFail
  | Logout;

export interface LoadCurrentLoginUserRequest {
  type: typeof LOAD_CURRENT_LOGIN_USER_REQUEST;
}

export interface LoadCurrentLoginUserSuccess {
  type: typeof LOAD_CURRENT_LOGIN_USER_SUCCESS;
  payload: {
    user: AuthenticatedUser;
  };
}

export interface LoadCurrentLoginUserFail {
  type: typeof LOAD_CURRENT_LOGIN_USER_FAIL;
  payload: {
    error: string;
  };
}
