import React from "react";
import "./dashboard.scss";
import Add from "../../Other/add/Add";
import Sidebar from "../../Other/sidebar/Sidebar";
import Navbar from "../../Other/navbar/Navbar";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="dashboard">
        <Sidebar />
        <div className="dash_navbar">
          <Add />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
