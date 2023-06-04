import { NavLink } from "react-router-dom";
import { useState } from "react";
import { ReactComponent as Hamburger } from "./hamburger.svg";
import "./HomePage.css";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">El-Kottab</div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        {showNavbar && (
          <div className="nav-elements active">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/signup">Sign Up</NavLink>
              </li>
              <li>
                <NavLink to="/profile">Profile</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
