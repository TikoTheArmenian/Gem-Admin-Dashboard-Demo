import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import "./Navbar.css";

function Navbar() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <nav className={darkMode ? "navbar dark" : "navbar"}>
      <a href="/" className="navbar-brand">
        My Dashboard
      </a>
      <div className="navbar-links">
        <a href="/users">Users</a>
        <a href="/settings">Settings</a>
        <a href="/logout">Logout</a>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
