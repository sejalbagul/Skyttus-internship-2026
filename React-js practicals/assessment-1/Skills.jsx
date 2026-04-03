import React from 'react';
import SkillCard from './SkillCard';
import styles from './Skills.module.css';

const skillsData = [
  { name: 'JavaScript', level: 90, icon: '⚡' },
  { name: 'ReactJS', level: 88, icon: '⚛️' },
  { name: 'Node.js', level: 85, icon: '🟢' },
];

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <div className="container"><h2>Technical Skills</h2>
        <div className={styles.grid}>
          {skillsData.map((s, i) => <SkillCard key={i} name={s.name} level={s.level} icon={s.icon} />)}
        </div>
      </div>
    </section>
  );
};

export default Skills;