import React from "react";
import "../styles/Projects.css";

const projects = [
  {
    title: "Fake News Detection",
    description:
      "A Fake News Detection built using AI/ML and Web Scraping through Beautiful Soup.",
       github: "https://github.com/parthlad1124/Fake-News-Detection",
  },
  {
    title: "Neo-Learn",
    description:
      "A Neo-Learn application for students buid using React, modern CSS and integrated AI TSS model.",
      github: "https://github.com/parthlad1124/Neo_Learn",
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <button onClick={() => window.open(project.github, "_blank")}>View Project</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
