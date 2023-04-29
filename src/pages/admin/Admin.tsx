import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { userService } from "../../services";
import {
  getCurrentLoginUserFail,
  getCurrentLoginUserRequest,
  getCurrentLoginUserSuccess,
} from "../../store/account/actions";
import { ListUser } from "../User/ListUser";
import { Footer } from "./Footer/Footer";
import { Home } from "./Home/Home";
import { Sidebar } from "./Sidebar/Sidebar";
import { TopBar } from "./TopBar/TopBar";
import { AddNewUser } from "../User/AddNewUser";
import { urlConst } from "../../constants/url";

export const Admin = () => {
  const dispatch = useDispatch();

  const onGetCurrentUser = useCallback(async () => {
    dispatch(getCurrentLoginUserRequest());

    const data = await userService.getCurrentLoginUser();
    if (!data.error) {
      dispatch(getCurrentLoginUserSuccess(data));
    } else {
      dispatch(getCurrentLoginUserFail(data.error));
    }
  }, [dispatch]);

  useEffect(() => {
    onGetCurrentUser();
  }, [onGetCurrentUser]);

  return (
    <div id="wrapper">
      <Sidebar />
      {/* Content Wrapper */}
      <div id="content-wrapper" className="d-flex flex-column">
        {/* Main Content */}
        <div id="content">
          {/* Topbar */}
          <TopBar />
          {/* End of Topbar */}
          {/* Begin Page Content */}
          <div className="container-fluid">
            <Routes>
              <Route path={urlConst.HOME} element={<Home />}></Route>
              <Route
                path={urlConst.USER_LISTING}
                element={<ListUser />}
              ></Route>
              <Route path={urlConst.USER_ADD_NEW} element={<AddNewUser />} />
            </Routes>
          </div>
          {/* <ListUser /> */}
          {/* /.container-fluid */}
        </div>
        {/* End of Main Content */}
        {/* Footer */}
        <Footer />
        {/* End of Footer */}
      </div>
      {/* End of Content Wrapper */}
    </div>
  );
};
