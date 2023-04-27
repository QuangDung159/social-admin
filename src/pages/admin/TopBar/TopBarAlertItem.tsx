import React from "react";

export const TopBarAlertItem = ({alertItem}: any) => {
  return (
    <a className="dropdown-item d-flex align-items-center" href="/#">
      <div className="mr-3">
        <div className={alertItem.icon.background}>
          <i className={alertItem.icon.name} />
        </div>
      </div>
      <div>
        <div className="small text-gray-500">{alertItem.date}</div>
        <span className="font-weight-bold">
          {alertItem.title}
        </span>
      </div>
    </a>
  );
};
