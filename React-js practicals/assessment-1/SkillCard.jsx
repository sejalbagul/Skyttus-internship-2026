import React from 'react';
import styles from './SkillCard.module.css';

const SkillCard = ({ name, level, icon }) => {
  return (
    <div className={styles.card}>
      <div><span>{icon}</span> <h3>{name}</h3></div>
      <div className={styles.progressBar}><div style={{ width: `${level}%` }} className={styles.progressFill}></div></div>
      <p>{level}%</p>
    </div>
  );
};

export default SkillCard;