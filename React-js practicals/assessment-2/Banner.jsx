import React from 'react';
import styles from './Banner.module.css';

const Banner = () => {
  return (
    <div id="home" className={styles.banner}>
      <div className="container">
        <div className={styles.bannerContent}>
          <h1>Big Summer Sale</h1>
          <p>Up to 50% off on selected items</p>
          <button className={styles.bannerBtn}>Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;