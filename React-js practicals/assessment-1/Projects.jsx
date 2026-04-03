import React from 'react';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

const projectsData = [
  { title: 'E-Commerce', description: 'Full-stack online store.', tech: ['React', 'Node.js'], image: '🛒' },
  { title: 'Task Manager', description: 'Collaborative task app.', tech: ['React', 'Firebase'], image: '✅' },
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className="container"><h2>Featured Projects</h2>
        <div className={styles.grid}>
          {projectsData.map((p, i) => <ProjectCard key={i} {...p} />)}
        </div>
      </div>
    </section>
  );
};

export default Projects;