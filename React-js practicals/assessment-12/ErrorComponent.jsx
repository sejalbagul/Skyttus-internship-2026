import React from 'react';
import styles from './ErrorComponent.module.css';

const ErrorComponent = ({ message }) => (
  <div className={styles.container}>
    <p>❌ {message}</p>
    <button onClick={() => window.location.reload()}>Retry</button>
  </div>
);

export default ErrorComponent;