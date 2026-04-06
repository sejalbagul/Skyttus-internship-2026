import React from 'react';
import styles from './Loader.module.css';

const Loader = () => (
  <div className={styles.container}>
    <div className={styles.spinner}></div>
    <p>Loading products...</p>
  </div>
);

export default Loader;