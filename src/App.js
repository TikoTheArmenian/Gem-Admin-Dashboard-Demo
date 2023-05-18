import React, { useContext, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";
import Navbar from "./components/NavBar";
import UserListPage from './pages/UserListPage';
import SettingsPage from './pages/SettingsPage';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import "./App.css";


// import necessary components from react-router-dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="App">
      <Navbar toggleDarkMode={toggleDarkMode} />
      <Router>
        <Routes>
          <Route path="/users" element={<UserListPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
