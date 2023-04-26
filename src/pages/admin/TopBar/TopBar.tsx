
import { TOP_TAB_BAR_ALERT, TOP_TAB_BAR_MESSAGE } from "../../../constants/commons";
import { NavUserInfo } from "./NavUserInfo";
import { TopBarItem } from "./TopBarItem";
import { TopBarSearch } from "./TopBarSearch";

export const TopBar = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      {/* Sidebar Toggle (Topbar) */}
      <button
        id="sidebarToggleTop"
        className="btn btn-link d-md-none rounded-circle mr-3"
      >
        <i className="fa fa-bars" />
      </button>
      {/* Topbar Search */}
      <TopBarSearch />
      {/* Topbar Navbar */}
      <ul className="navbar-nav ml-auto">
        {/* Nav Item - Search Dropdown (Visible Only XS) */}
        <li className="nav-item dropdown no-arrow d-sm-none">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="searchDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-search fa-fw" />
          </a>
          {/* Dropdown - Messages */}
          <div
            className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
            aria-labelledby="searchDropdown"
          >
            <form className="form-inline mr-auto w-100 navbar-search">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control bg-light border-0 small"
                  placeholder="Search for..."
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button">
                    <i className="fas fa-search fa-sm" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </li>
        {/* Nav Item - Alerts */}
        <TopBarItem
          counter="3+"
          header="Alerts Center"
          icon="fas fa-bell fa-fw"
          type={TOP_TAB_BAR_ALERT}
        />
        {/* Nav Item - Messages */}
        <TopBarItem
          counter="9+"
          header="Message Center"
          icon="fas fa-envelope fa-fw"
          type={TOP_TAB_BAR_MESSAGE}
        />
        <div className="topbar-divider d-none d-sm-block" />
        {/* Nav Item - User Information */}
        <NavUserInfo />
      </ul>
    </nav>
  );
};
