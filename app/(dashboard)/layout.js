import { Sidebar } from "@/components/Sidebar";
import React from "react";
import { FaBarsStaggered } from "react-icons/fa6";
const layout = ({ children }) => {
  return (
    <div className="drawer lg:drawer-open">
      <input type="checkbox" id="my-drawer-2" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer-2"
          className="drawer-button lg:hidden fixed top-5 right-5"
        >
          <FaBarsStaggered className="w-8 h-8 text-primary" />
        </label>
        <div className="bg-base-200 px-8 py-12 min-h-screen">{children}</div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          className="drawer-overlay"
          aria-label="close sidebar"
        ></label>

        <Sidebar/>
      </div>
    </div>
  );
};

export default layout;
