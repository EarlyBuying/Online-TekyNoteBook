import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <div className="login_container">
      <h1>Welcome to TekyNote Online!</h1> 
      <div className="login_box">
        <form>
          <h2>Sign in</h2>
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
          <div className="login_links">
            <Link className="linkTo">Forget Password</Link>

            <Link to='/register' className="linkTo">Register here</Link>
          </div>
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
