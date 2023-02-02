import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginSubmit = (e) => {
    e.preventDefault();
    const loginData = {
      email,
      password,
    };
    axios.post("http://localhost:5000/api/login", loginData).then((res) => {
      setEmail("");
      setPassword("");
      console.log(res);
    });
    try {
      console.log(loginData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login_container">
      <h1>Welcome to TekyNote Online!</h1>
      <div className="login_box">
        <form>
          <h2>Sign in</h2>
          <div className="inputBox">
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span className="input_span">Email address</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="input_span">Password</span>
            <i></i>
          </div>
          <div className="login_links">
            <Link to="/register" className="linkTo">
              Register here
            </Link>
          </div>
          <button onClick={loginSubmit}>Login</button>
        </form>
      </div>
      <a href="/" className="log_back_btn">
        Home
      </a>
    </div>
  );
};

export default Login;
