import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [user, setUser] = useState("");

  useEffect(() => {
    const user = Cookies.get("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <Link className="navbar-brand" to="/user/profile">
          <i
            className="fa-solid fa-user-circle"
            style={{ width: "30px", height: "30px" }}
          ></i>
          {user.username}
        </Link>

        <span className="nav-item  ">
          <Link className="nav-link " to="/user/suars">
            <span style={{ color: "black" }}>تفسير القران الكريم</span>
          </Link>
        </span>

        <span className="nav-item active ">
          <Link className="nav-link" to="/user/categories">
            <span style={{ color: "black" }}>المحطات السبع</span>
          </Link>
        </span>
        <span className="nav-item active ">
          <Link className="nav-link" to="/user/quranText">
            <span style={{ color: "black" }}>المصحف الشريف</span>
          </Link>
        </span>

        <span className="nav-item active ">
          <Link className="nav-link" to="/">
            <span style={{ color: "black" }}> الصفحة الرئسية</span>
          </Link>
        </span>
      </nav>
    </div>
  );
}

export default Navbar;
