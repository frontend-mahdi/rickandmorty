import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="bg-cyan-950 text-white">Header</div>
      <div className="container max-w-7xl">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
