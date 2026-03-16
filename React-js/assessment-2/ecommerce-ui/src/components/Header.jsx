import React from "react";

const Header = ({ darkMode, toggleTheme }) => {
  return (
    <header className="header">
      <div className="logo">Shopify</div>

      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#products">Products</a>
        <a href="#contact">Contact</a>
      </nav>
      <button className="theme-btn" onClick={toggleTheme}>
        {darkMode ? "☀ Light" : "🌙 Dark"}
      </button>
    </header>
  );
};

export default Header;
