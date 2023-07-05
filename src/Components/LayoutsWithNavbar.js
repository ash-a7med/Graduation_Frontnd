import React from "react";
import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";

function LayoutsWithNavbar() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default LayoutsWithNavbar;
