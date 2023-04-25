import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { Login } from "./pages/account";
import { Admin } from "./pages/admin/Admin";
import { AppState } from "./store";
import { AccountState } from "./store/account/types";
import "./styles/sb-admin-2.min.css";

function App() {
  const account: AccountState = useSelector((state: AppState) => state.account);
  return (
    <div className="App" id="wrapper">
      <Router>
        <Routes>
          <Route
            element={
              account.token ? <Navigate to="/" replace /> : <Login />
            }
            path="/login"
          />
          <Route
            element={account.token ? <Admin /> : <Navigate to="/login" replace />}
            path="/"
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
