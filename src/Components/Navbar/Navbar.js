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
      </nav>
    </div>
  );
}

export default Navbar;
