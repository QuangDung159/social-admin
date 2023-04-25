import { Route, RouteProps } from "react-router-dom";
import { Login } from "../pages/account";

export const PrivateRoute = ({
  children,
  ...rest
}: RouteProps) => {
  return <Route element={<Login></Login>} path="/"></Route>;
};
