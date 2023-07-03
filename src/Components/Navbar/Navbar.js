import React from "react";

function Navbar(user) {
  return (
    <div>
      <nav class="navbar navbar-light bg-light" style={{ marginBottom: "5px" }}>
        <a class="navbar-brand" href="/profile">
          <i
            className="fa-solid fa-user-circle"
            style={{ width: "30px", height: "30px" }}
          ></i>
          {user.user.username}
        </a>

        <span class="nav-item active ">
          <a class="nav-link" href="/suars">
            تفسير القران الكريم
          </a>
        </span>

        <span class="nav-item active ">
          <a class="nav-link" href="/categories">
            المحطات السبع
          </a>
        </span>
        <span class="nav-item active ">
          <a class="nav-link" href="/quranText">
            المصحف الشريف
          </a>
        </span>

        <span class="nav-item active ">
          <a class="nav-link" href="/landing">
            الصفحة الرئسية
          </a>
        </span>
      </nav>
    </div>
  );
}

export default Navbar;
