import React from 'react';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ title, description, tech, image }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>{image}</div>
      <div><h3>{title}</h3><p>{description}</p>
        <div className={styles.tech}>{tech.map(t => <span key={t}>{t}</span>)}</div>
      </div>
    </div>
  );
};

export default ProjectCard;