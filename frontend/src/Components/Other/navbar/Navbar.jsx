import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="login">Login</a>
        </li>
        <li>
          <a href="register">Register</a>
        </li>
        <li>
          <a href="dashboard">Item Add</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
