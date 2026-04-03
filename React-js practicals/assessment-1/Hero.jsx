import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Hi, I'm <span className={styles.highlight}>SEJAL</span></h1>
          <h2>Full Stack Developer</h2>
          <p>I build responsive web apps with ReactJS.</p>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn">Get In Touch</button>
        </div>
        <div className={styles.imagePlaceholder}>💻</div>
      </div>
    </section>
  );
};

export default Hero;