import React, { useState } from "react";

export const NavItem = ({ label }: any) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <li className="nav-item">
      <a
        onClick={() => {
          setIsCollapsed((prev) => !prev);
        }}
        className={`nav-link ${isCollapsed && "collapsed"}`}
        href="/#"
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
          <a className="collapse-item" href="buttons.html">
            Buttons
          </a>
          <a className="collapse-item" href="cards.html">
            Cards
          </a>
        </div>
      </div>
    </li>
  );
};
