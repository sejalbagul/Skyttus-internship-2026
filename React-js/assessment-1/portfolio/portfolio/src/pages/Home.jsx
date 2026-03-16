import React from "react";
import "../styles/Home.css";

const Home = ({ name, role }) => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>
          Hi, I'm <span>{name}</span>
        </h1>
        <h2>{role}</h2>
        <p>
          I build modern, responsive web applications using React and
          JavaScript.
        </p>
        <button className="home-btn">View About</button>
      </div>
    </section>
  );
};

export default Home;
