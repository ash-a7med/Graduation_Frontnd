import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Signup from "./Signup";
import Login from "./Login";
import Categories from "./Categories";
import Details from "./Details";
import Round1 from "./Round1";

function Navbar() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="round1" element={<Round1 />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Navbar;
