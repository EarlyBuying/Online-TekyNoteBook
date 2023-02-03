import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/auth/Login/Login";
import Register from "./Components/Pages/auth/Register/Register";
import AuthContext from "./context/AuthContext";

const Router = () => {
  const { loggedIn } = useContext(AuthContext);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {loggedIn === false && (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </>
          )}
          {loggedIn === true && (
            <Route path="/dashboard" element={<Dashboard />} />
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
