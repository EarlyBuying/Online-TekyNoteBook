import axios from "axios";
import React, { useContext } from "react";
import "../../Other/navbar/Navbar";
import AuthContext from "../../../context/AuthContext";
import { useNavigate } from 'react-router-dom';

const LogOutBtn = () => {
  const { getLoggedIn } = useContext(AuthContext);
  const history = useNavigate();

  async function logOut() {
    await axios.get("http://localhost:5000/api/logout");
    await getLoggedIn();
    history.push("/");
  }
  return <a onClick={logOut}>Log Out</a>;
};

export default LogOutBtn;
