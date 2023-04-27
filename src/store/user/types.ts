import { Pagination } from "../../helpers";

export const LOAD_PAGING_USER_REQUEST = "LOAD_PAGING_USER_REQUEST";
export const LOAD_PAGING_USER_SUCCESS = "LOAD_PAGING_USER_SUCCESS";
export const LOAD_PAGING_USER_FAIL = "LOAD_PAGING_USER_FAIL";

export const UPDATE_KEYWORD = "UPDATE_KEYWORD";

export interface User {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}

interface LoadPagingUserRequest {
  type: typeof LOAD_PAGING_USER_REQUEST;
}

interface LoadPagingUserSuccess {
  type: typeof LOAD_PAGING_USER_SUCCESS;
  payload: {
    listUser: Pagination<User>;
  };
}

interface LoadPagingUserFail {
  type: typeof LOAD_PAGING_USER_FAIL;
  payload: {
    error: string;
  };
}

interface UpdateKeyword {
  type: typeof UPDATE_KEYWORD;
  payload: {
    keyword: string;
  };
}

export interface UserState {
  listUser: Pagination<User> | null;
  loading: boolean;
  total: number;
  deletedCount: number;
  error: string | null;
  pageSize: number;
  keyword: string | null;
}

export type UserActionTypes =
  | LoadPagingUserFail
  | LoadPagingUserRequest
  | LoadPagingUserSuccess
  | UpdateKeyword;
