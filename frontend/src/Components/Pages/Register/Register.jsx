import React from "react";
import { Link } from "react-router-dom";
import "./register.css";

const Register = () => {
  return (
    <div className="register_container">
      <h1>Welcome to TekyNote Online!</h1> 
      <div className="register_box">
        <form>
          <h2>Register</h2>
          <div className="inputBox">
            <input type="text" required />
            <span className="input_span">Email address</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input type="password" required />
            <span className="input_span">Password</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input type="password" required />
            <span className="input_span">Verify Password</span>
            <i></i>
          </div>
          <div className="register_links">
      

            <Link to='/login' className="linkTo">Log in here</Link>
          </div>
          <button>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
