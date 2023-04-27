import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { userService } from "../../services";
import {
  LOAD_CURRENT_LOGIN_USER_FAIL,
  LOAD_CURRENT_LOGIN_USER_REQUEST,
  LOAD_CURRENT_LOGIN_USER_SUCCESS,
} from "../../store/account/types";
import { Footer } from "./Footer/Footer";
import { Home } from "./Home/Home";
import { Sidebar } from "./Sidebar/Sidebar";
import { TopBar } from "./TopBar/TopBar";

export const Admin = () => {
  const dispatch = useDispatch();

  const onGetCurrentUser = useCallback(async () => {
    dispatch({
      type: LOAD_CURRENT_LOGIN_USER_REQUEST,
    });

    const data = await userService.getCurrentLoginUser();
    if (!data.error) {
      dispatch({
        type: LOAD_CURRENT_LOGIN_USER_SUCCESS,
        payload: { user: data },
      });
    } else {
      dispatch({
        type: LOAD_CURRENT_LOGIN_USER_FAIL,
        payload: {
          error: data.error,
        },
      });
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
          <Home />
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
