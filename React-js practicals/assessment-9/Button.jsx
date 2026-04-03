import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, onClick, variant = 'primary', type = 'button', disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles.btn} ${styles[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;