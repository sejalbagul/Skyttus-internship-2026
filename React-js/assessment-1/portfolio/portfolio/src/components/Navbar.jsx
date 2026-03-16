import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  

  
  return (
    <header className="navbar">
      
      <div className="logo">Parth Portfolio</div>

      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

     

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

    </header>
  );
};

export default Navbar;
