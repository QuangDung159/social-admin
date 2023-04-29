import { useState } from "react";
import { Link } from "react-router-dom";
import { NavItem } from "./NavItem";
import { urlConst } from "../../../constants/url";

export const Sidebar = () => {
  const [sidebarToggled, setSidebarToggled] = useState(false);

  return (
    <ul
      className={`navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ${
        sidebarToggled && "toggled"
      }`}
      id="accordionSidebar"
    >
      {/* Sidebar - Brand */}
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink" />
        </div>
        <div className="sidebar-brand-text mx-3">
          SB Admin <sup>2</sup>
        </div>
      </a>
      {/* Divider */}
      <hr className="sidebar-divider my-0" />
      {/* Nav Item - Dashboard */}
      <li className="nav-item active">
        <Link className="nav-link" to={"/"}>
          <i className="fas fa-fw fa-tachometer-alt" />
          <span>Dashboard</span>
        </Link>
      </li>
      {/* Divider */}
      <hr className="sidebar-divider" />
      {/* Heading */}
      <div className="sidebar-heading">Interface</div>
      {/* Nav Item - Pages Collapse Menu */}
      <NavItem label="Users" />
      {/* Nav Item - Utilities Collapse Menu */}
      <NavItem label="Utilities" />
      <li className="nav-item">
        <Link className="nav-link" to={urlConst.USER_LISTING}>
          <i className="fas fa-fw fa-table" />
          <span>List User</span>
        </Link>
      </li>
      {/* Divider */}
      <hr className="sidebar-divider" />
      {/* Heading */}
      <div className="sidebar-heading">Addons</div>
      {/* Nav Item - Pages Collapse Menu */}
      <NavItem label="Pages" />
      {/* Nav Item - Charts */}
      <li className="nav-item">
        <a className="nav-link" href="charts.html">
          <i className="fas fa-fw fa-chart-area" />
          <span>Charts</span>
        </a>
      </li>
      {/* Nav Item - Tables */}
      <li className="nav-item">
        <Link className="nav-link" to={urlConst.USER_LISTING}>
          <i className="fas fa-fw fa-table" />
          <span>Tables</span>
        </Link>
      </li>
      {/* Divider */}
      <hr className="sidebar-divider d-none d-md-block" />
      {/* Sidebar Toggler (Sidebar) */}
      <div className="text-center d-none d-md-inline">
        <button
          className="rounded-circle border-0"
          id="sidebarToggle"
          onClick={() => {
            setSidebarToggled((prev) => !prev);
          }}
        />
      </div>
      {/* Sidebar Message */}
      <div className="sidebar-card d-none d-lg-flex">
        <img
          className="sidebar-card-illustration mb-2"
          src="img/undraw_rocket.svg"
          alt="..."
        />
        <p className="text-center mb-2">
          <strong>SB Admin Pro</strong> is packed with premium features,
          components, and more!
        </p>
        <a
          className="btn btn-success btn-sm"
          href="https://startbootstrap.com/theme/sb-admin-pro"
        >
          Upgrade to Pro!
        </a>
      </div>
    </ul>
  );
};
