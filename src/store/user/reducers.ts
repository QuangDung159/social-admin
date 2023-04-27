import {
  LOAD_PAGING_USER_FAIL,
  LOAD_PAGING_USER_REQUEST,
  LOAD_PAGING_USER_SUCCESS,
  UserActionTypes,
  UserState,
} from "./types";

const initState: UserState = {
  deletedCount: 0,
  error: null,
  listUser: null,
  loading: false,
  total: 0,
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
    default: {
      return { ...state };
    }
  }
};

export { userReducer };
