import React from "react";
import { TopBarAlertItem } from "./TopBarAlertItem";

export const TopBarListAlert = () => {
  return (
    <>
      <h6 className="dropdown-header">Alerts Center</h6>
      <TopBarAlertItem
        alertItem={{
          date: "December 12, 2019",
          title: "A new monthly report is ready to download!",
          icon: {
            background: "icon-circle bg-primary",
            name: "fas fa-file-alt text-white",
          },
        }}
      />
      <TopBarAlertItem
        alertItem={{
          date: "December 7, 2019",
          title: "$290.29 has been deposited into your account!",
          icon: {
            background: "icon-circle bg-success",
            name: "fas fa-donate text-white",
          },
        }}
      />
      <TopBarAlertItem
        alertItem={{
          date: "December 2, 2019",
          title:
            "Spending Alert: We've noticed unusually high spending for your account.",
          icon: {
            background: "icon-circle bg-warning",
            name: "fas fa-exclamation-triangle text-white",
          },
        }}
      />
      <a className="dropdown-item text-center small text-gray-500" href="/#">
        Show All Alerts
      </a>
    </>
  );
};
