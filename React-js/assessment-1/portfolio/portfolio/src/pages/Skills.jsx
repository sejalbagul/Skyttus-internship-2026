import React from "react";
import "../styles/Skills.css";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Git",
  "Responsive Design",
  "Python",
  "SQL",
  "C++"
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
