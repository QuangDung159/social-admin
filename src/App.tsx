import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { Login, Register } from "./pages/account";
import { Admin } from "./pages/admin";
import { AppState } from "./store";
import { AccountState } from "./store/account/types";
import "./styles/sb-admin-2.min.css";
import { urlConst } from "./constants/url";

function App() {
  const account: AccountState = useSelector((state: AppState) => state.account);
  return (
    <div className="App" id="wrapper">
      <Router>
        <Routes>
          <Route
            element={
              account.token ? (
                <Navigate to={urlConst.HOME} replace />
              ) : (
                <Login />
              )
            }
            path={urlConst.ACCOUNT_LOGIN}
          />
          <Route
            element={
              account.token ? (
                <Admin />
              ) : (
                <Navigate to={urlConst.ACCOUNT_LOGIN} replace />
              )
            }
            path="/*"
          />
          <Route
            element={
              account.token ? (
                <Navigate to={urlConst.HOME} replace />
              ) : (
                <Register />
              )
            }
            path={urlConst.ACCOUNT_REGISTER}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
