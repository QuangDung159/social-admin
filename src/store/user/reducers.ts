import {
  LOAD_PAGING_USER_FAIL,
  LOAD_PAGING_USER_REQUEST,
  LOAD_PAGING_USER_SUCCESS,
  UPDATE_KEYWORD,
  UserActionTypes,
  UserState,
} from "./types";

const initState: UserState = {
  deletedCount: 0,
  error: null,
  listUser: null,
  loading: false,
  total: 0,
  pageSize: 2,
  keyword: null,
};

const userReducer = (
  state: UserState = initState,
  action: UserActionTypes
): UserState => {
  switch (action.type) {
    case LOAD_PAGING_USER_REQUEST: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case LOAD_PAGING_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        listUser: action.payload.listUser,
        total: action.payload.listUser.total,
        pageSize: action.payload.listUser.pageSize,
        error: null,
      };
    }
    case LOAD_PAGING_USER_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }
    case UPDATE_KEYWORD: {
      return {
        ...state,
        keyword: action.payload.keyword,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export { userReducer };
