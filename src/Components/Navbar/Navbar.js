import React from "react";

function Navbar(user) {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="/profile">
          <i
            className="fa-solid fa-user-circle"
            style={{ width: "30px", height: "30px" }}
          ></i>
          {user.user.username}
        </a>

        <span className="nav-item active ">
          <a className="nav-link" href="/suars">
            تفسير القران الكريم
          </a>
        </span>

        <span className="nav-item active ">
          <a className="nav-link" href="/categories">
            المحطات السبع
          </a>
        </span>
        <span className="nav-item active ">
          <a className="nav-link" href="/quranText">
            المصحف الشريف
          </a>
        </span>

        <span className="nav-item active ">
          <a className="nav-link" href="/">
            الصفحة الرئسية
          </a>
        </span>
      </nav>
    </div>
  );
}

export default Navbar;
