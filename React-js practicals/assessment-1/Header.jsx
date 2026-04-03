import React, { useState } from 'react';
import styles from './Header.module.css';

const Header = ({ toggleTheme, theme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    closeMenu();
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}><h2>DevPortfolio</h2></div>
        <button className={styles.hamburger} onClick={toggleMenu}>☰</button>
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            <li><button onClick={() => scrollToSection('home')}>Home</button></li>
            <li><button onClick={() => scrollToSection('about')}>About</button></li>
            <li><button onClick={() => scrollToSection('skills')}>Skills</button></li>
            <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
            <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
          </ul>
        </nav>
        <button onClick={toggleTheme} className={styles.themeToggle}>{theme === 'light' ? '🌙' : '☀️'}</button>
      </div>
    </header>
  );
};

export default Header;