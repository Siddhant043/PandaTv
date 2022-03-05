import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import Settings from "./pages/Settings";
import PlayerPage from "./pages/PlayerPage";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user?.user);
  const navigate = useNavigate();

  useEffect(() => {
    function checkUser() {
      if (!user) {
        navigate("/login");
      } else {
        navigate("/home");
      }
    }
    return checkUser();
  }, [user]);

  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/home/:videoId" element={<PlayerPage />} />
      <Route path="settings" element={<Settings />} />
    </Routes>
  );
}

export default App;
