import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className="container"><h2>About Me</h2>
        <div className={styles.content}>
          <p>I'm a Full Stack Developer with 4+ years experience in React and Node.js.</p>
          <div className={styles.stats}>
            <div><h3>20+</h3><p>Projects</p></div>
            <div><h3>4+</h3><p>Years</p></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;