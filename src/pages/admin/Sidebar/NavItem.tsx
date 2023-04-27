import { useState } from "react";
import { Link } from "react-router-dom";

export const NavItem = ({ label }: any) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <li className="nav-item">
      <a
        role="button"
        onClick={() => {
          setIsCollapsed((prev) => !prev);
        }}
        className={`nav-link ${isCollapsed && "collapsed"}`}
        data-toggle="collapse"
        data-target="#collapseTwo"
        aria-expanded={!isCollapsed}
        aria-controls="collapseTwo"
      >
        <i className="fas fa-fw fa-cog" />
        <span>{label}</span>
      </a>
      <div
        id="collapseTwo"
        className={`collapse ${!isCollapsed && "show"}`}
        aria-labelledby="headingTwo"
        data-parent="#accordionSidebar"
      >
        <div className="bg-white py-2 collapse-inner rounded">
          <h6 className="collapse-header">Custom Components:</h6>
          <Link className="collapse-item" to={"/list-user"}>
            Listing
          </Link>
          <a className="collapse-item" href="cards.html">
            Add New
          </a>
        </div>
      </div>
    </li>
  );
};
