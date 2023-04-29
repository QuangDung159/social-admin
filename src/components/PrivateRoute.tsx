import { Route, RouteProps } from "react-router-dom";
import { Login } from "../pages/account";
import { urlConst } from "../constants/url";

export const PrivateRoute = ({ children, ...rest }: RouteProps) => {
  return <Route element={<Login />} path={urlConst.HOME}></Route>;
};
