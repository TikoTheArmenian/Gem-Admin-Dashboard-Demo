import React, { useContext, useEffect } from "react";
import UserListPage from "./pages/UserListPage.jsx";
import { ThemeContext } from "./ThemeContext";
import Navbar from "./components/NavBar";
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
          <Route path="/login" element={<div />} />
          <Route path="/" element={<div />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
