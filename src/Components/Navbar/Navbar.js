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
            تفسير القران الكريم
          </Link>
        </span>

        <span className="nav-item active ">
          <Link className="nav-link" to="/user/categories">
            المحطات السبع
          </Link>
        </span>
        <span className="nav-item active ">
          <Link className="nav-link" to="/user/quranText">
            المصحف الشريف
          </Link>
        </span>

        <span className="nav-item active ">
          <Link className="nav-link" to="/">
            الصفحة الرئسية
          </Link>
        </span>
      </nav>
    </div>
  );
}

export default Navbar;
