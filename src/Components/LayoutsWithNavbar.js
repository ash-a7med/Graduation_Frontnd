import React from "react";
import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";

function LayoutsWithNavbar(user) {
  return (
    <div>
      <Navbar user={user.user} />
      <Outlet />
    </div>
  );
}

export default LayoutsWithNavbar;
