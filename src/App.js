import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import Settings from "./pages/Settings";
import PlayerPage from "./pages/PlayerPage";
import { useSelector } from "react-redux";
import { fetchUser } from "./utils/fetchUser";
import Explore from "./pages/Explore";

function App() {
  const user = fetchUser();
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
  }, []);

  return (
    <Routes>
      <Route exact path="/home" element={<HomePage />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/home/:videoId" element={<PlayerPage />} />
      <Route exact path="/explore" element={<Explore />} />
      <Route exact path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default App;
