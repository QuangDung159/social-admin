import { UserActionTypes, UserState } from "./types";

const initState: UserState = {
  deletedCount: 0,
  error: null,
  listUser: [],
  loading: false,
  total: 0,
};

const userReducer = (
  state: UserState = initState,
  action: UserActionTypes
): UserState => {
  switch (action) {
    default: {
      return { ...state };
    }
  }
};

export { userReducer };
