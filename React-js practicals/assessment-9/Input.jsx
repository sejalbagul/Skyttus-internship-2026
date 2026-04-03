import React from 'react';
import styles from './Input.module.css';

const Input = ({ type = 'text', value, onChange, placeholder, required = false, label }) => {
  return (
    <div className={styles.group}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={styles.input}
      />
    </div>
  );
};

export default Input;