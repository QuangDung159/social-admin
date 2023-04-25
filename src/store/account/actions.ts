import { Dispatch } from "react";
import {
  AccountActionTypes,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./types";
import { userService } from "../../services";

export const login = (email: string, password: string) => {
  return async (dispatch: Dispatch<AccountActionTypes>) => {
    dispatch({
      type: LOGIN_REQUEST,
      payload: {
        email,
        password,
      },
    });

    const res = await userService.login(email, password);

    if (res && !res.error) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res,
      });
    } else {
      dispatch({
        type: LOGIN_FAIL,
        payload: { error: res.error.toString() },
      });
    }
  };
};

export const logout = (): AccountActionTypes => {
  return {
    type: LOGOUT,
  };
};

export {};
