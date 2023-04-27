import { Pagination } from "../../helpers";
import {
  LOAD_PAGING_USER_FAIL,
  LOAD_PAGING_USER_REQUEST,
  LOAD_PAGING_USER_SUCCESS,
  User,
  UserActionTypes,
} from "./types";

export const getListUserPagingRequest = (): UserActionTypes => {
  return {
    type: LOAD_PAGING_USER_REQUEST,
  };
};

export const getListUserPagingSuccess = (
  listUser: Pagination<User>
): UserActionTypes => {
  return {
    type: LOAD_PAGING_USER_SUCCESS,
    payload: {
      listUser,
    },
  };
};

export const getListUserPagingFail = (error: string): UserActionTypes => {
  return {
    type: LOAD_PAGING_USER_FAIL,
    payload: {
      error,
    },
  };
};
