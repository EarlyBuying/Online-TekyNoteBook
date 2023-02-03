import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";
import LogOutBtn from "../../Pages/auth/LogOutBtn";
import "./navbar.scss";

const Navbar = () => {
  const { loggedIn } = useContext(AuthContext);
  console.log(loggedIn);

  return (
    <div className="navbar">
      <h3 className="LogoName">TekyNote</h3>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {loggedIn === false && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
        {loggedIn === true && (
          <>
            <li>
              <Link to="/dashboard">Item Add</Link>
            </li>
            <li>
              <LogOutBtn />
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
