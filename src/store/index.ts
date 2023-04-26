import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { accountReducer } from "./account/reducers";
import { setAuthToken } from "../helpers/setAuthToken";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["account"],
};

const rootReducer = combineReducers({
  account: accountReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export type AppState = ReturnType<typeof rootReducer>;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const persistedStore = persistStore(store);

let currentState = store.getState() as AppState;

store.subscribe(() => {
  let prevState = currentState;
  currentState = store.getState() as AppState;
  if (prevState.account.token !== currentState.account.token) {
    const token = currentState.account.token;
    if (token) {
      setAuthToken(token);
    }
  }
});

export { store, persistedStore };
