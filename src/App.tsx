import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

import { Login } from "./pages/account";
import "./styles/sb-admin-2.min.css";
import { Admin } from "./pages/admin/Admin";

const isLogin: boolean = true;

function App() {
  return (
    <div className="App" id="wrapper">
      <Router>
        <Routes>
          <Route
            element={isLogin ? <Login></Login> : <Admin />}
            path="/"
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
