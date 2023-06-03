import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="bg-cyan-950 text-white text-center sticky top-0">
        Rick and Morty characters
      </div>
      <div className="container max-w-7xl mx-auto mt-8 pb-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
