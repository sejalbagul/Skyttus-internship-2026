import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  // Smooth scroll to any element by id
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          {/* Logo clicks scroll to home */}
          <div 
            className={styles.logo} 
            onClick={() => scrollToSection('home')} 
            style={{ cursor: 'pointer' }}
          >
            🛍️ ShopEase
          </div>
          <nav className={styles.nav}>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('products'); }}>Products</a>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('products'); }}>Deals</a>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;