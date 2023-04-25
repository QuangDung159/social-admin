import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { accountReducer } from "./account/reducers";
const rootReducer = combineReducers({
  account: accountReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
