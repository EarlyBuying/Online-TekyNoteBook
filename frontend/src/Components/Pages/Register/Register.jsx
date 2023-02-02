import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [vfyPassword, setVfyPassword] = useState("");

  const registerData = (e) => {
    e.preventDefault();
    try {
      const regData = {
        email,
        password,
        passwordVerify: vfyPassword,
      };
      axios.post("http://localhost:5000/api/register", regData).then((res) => {
        setEmail("");
        setPassword("");
        setVfyPassword("");
        console.log(res);
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="register_container">
      <h1>Welcome to TekyNote Online!</h1>
      <div className="register_box">
        <form>
          <h2>Register</h2>
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
          <div className="inputBox">
            <input
              type="password"
              onChange={(e) => setVfyPassword(e.target.value)}
              required
            />
            <span className="input_span">Verify Password</span>
            <i></i>
          </div>
          <div className="register_links">
            <Link to="/login" className="linkTo">
              Log in here
            </Link>
          </div>
          <button onClick={registerData}>Register</button>
        </form>
      </div>
      <a href="/" className="regi_back_btn">
        Home
      </a>
    </div>
  );
};

export default Register;
