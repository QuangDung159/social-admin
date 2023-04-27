import { useState } from "react";
import { TOP_BAR_ALERT } from "../../../constants/commons";
import { TopBarListAlert } from "./TopBarListAlert";
import { TopBarListMessage } from "./TopBarListMessage";

export const TopBarItem = ({ counter, header, icon, type }: any) => {
  const isAlert = type === TOP_BAR_ALERT;
  const [isShowDropdown, setIsShowDropdown] = useState(false);
  return (
    <li
      className={`nav-item dropdown no-arrow mx-1 ${
        isShowDropdown ? "show" : ""
      }`}
    >
      <a
        className="nav-link dropdown-toggle"
        href="/#"
        id="alertsDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded={isShowDropdown}
        onClick={() => setIsShowDropdown((prev) => !prev)}
      >
        <i className={icon} />
        <span className="badge badge-danger badge-counter">{counter}</span>
      </a>
      <div
        className={`dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in ${
          isShowDropdown ? "show" : ""
        }`}
        aria-labelledby={`${isAlert ? "alertDropdown" : "messagesDropdown"}`}
      >
        {isAlert ? <TopBarListAlert /> : <TopBarListMessage />}
      </div>
    </li>
  );
};
