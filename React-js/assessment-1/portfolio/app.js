import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div>
      {/* <h1>My Portfolio</h1> */}
       <>
      <Navbar />
      {/* <h1 style={{ padding: "40px" }}>Portfolio Content Coming...</h1> */}
      <Home name="Parth" role="React Developer" />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
    </div>
    
  );
};

export default App;
