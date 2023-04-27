import { useState } from "react";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../../../store/account/types";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppState } from "../../../store";

export const NavUserInfo = () => {
  const [isShowProfileMenu, setIsShowProfileMenu] = useState(false);

  const user = useSelector((state: AppState) => state.account.user);

  const dispatch = useDispatch();

  return (
    <li
      className={`nav-item dropdown no-arrow ${
        isShowProfileMenu ? "show" : ""
      }`}
    >
      <a
        className="nav-link dropdown-toggle"
        href="/#"
        id="userDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded={isShowProfileMenu}
        onClick={() => setIsShowProfileMenu((prev) => !prev)}
      >
        <span className="mr-2 d-none d-lg-inline text-gray-600 small">
          {`${user?.first_name} ${user?.last_name}` || "User"}
        </span>
        <img className="img-profile rounded-circle" src={user?.avatar} alt="..." />
      </a>
      {/* Dropdown - User Information */}
      <div
        className={`dropdown-menu dropdown-menu-right shadow animated--grow-in ${
          isShowProfileMenu ? "show" : ""
        }`}
        aria-labelledby="userDropdown"
      >
        <a className="dropdown-item" href="/#">
          <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
          Profile
        </a>
        <a className="dropdown-item" href="/#">
          <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
          Settings
        </a>
        <a className="dropdown-item" href="/#">
          <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
          Activity Log
        </a>
        <div className="dropdown-divider" />
        <Link
          replace={true}
          to={"/login"}
          className="dropdown-item"
          data-toggle="modal"
          data-target="#logoutModal"
          onClick={() =>
            dispatch({
              type: LOGOUT,
            })
          }
        >
          <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
          Logout
        </Link>
      </div>
    </li>
  );
};
