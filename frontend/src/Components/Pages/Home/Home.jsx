import React from "react";
import Navbar from "../../Other/navbar/Navbar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="home_navbar">{<Navbar />}</div>
      <div className="home_container">
        <h1>TEKY NOTEBOOK</h1>
      </div>
 
    </div>
  );
};

export default Home;
