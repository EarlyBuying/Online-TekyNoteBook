import React from "react";
import './dashboard.scss'
import Add from "../../Other/add/Add";
import Sidebar from "../../Other/sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dash_navbar">
        <Add />
      </div>
    </div>
  );
};

export default Dashboard;
