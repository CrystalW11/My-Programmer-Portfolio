/** @format */
import React from "react";
import Nav from "../components/Nav.jsx";
import CityWithFrequencyWaves from "../assets/CityWithFrequencyWaves.png";
import DigitalCityGridImage from "../assets/DigitalCityGridImage.png";

const Blog = () => {
  const skills = [
    "Problem Solving",
    "Analytical Thinking ",
    "Code Optimization",
    "Understanding Complexity",
    "Attention to Detail",

    // Add more skills as needed
  ];

  const softwareUsed = [
    "React",
    "Express.js",
    "MongoDB",
    "JWT",
    "Axios",
    "Bootstrap",
    "Mongoose",
    "Node.js",
    // Add more skills as needed
  ];

  return (
    <>
      <Nav />
      <h1>Welcome to My Blog!</h1>
      <img
        className="image-resize"
        src={CityWithFrequencyWaves}
        alt="CityWithFrequencyWaves"
      />
      <hr />
      <h2>Crystal Warmack</h2>
      <h2>Python | Java | JavaScript</h2>
      <h2>Software Developer</h2>
      <h3>
        "Passionate Software Developer with a Strong Analytical Background"
      </h3>
      <h4>
        I am a dedicated Software Developer excited about the opportunity to
        work in dynamic, forward-thinking environments.
      </h4>
      <h4>
        My experience at my last job has equipped me with strong analytical and
        problem-solving abilities, which I now apply to software development.
      </h4>
      <h4>With proficiency in Python, Java, JavaScript, and the MERN stack,</h4>
      <h4>
        I am committed to delivering innovative solutions that align with your
        commitment to excellence.
      </h4>
      <h4>
        My last role honed analytical and problem-solving skills through credit
      </h4>
      <h4>
        risk assessment and data-driven decision-making, which are directly
        applicable to programming and software development.
      </h4>
      <div className="container">
        <br />
        <hr />
        <h2>Software Used</h2>
        <ul className="skills">
          {softwareUsed.map((softwareUsed, index) => (
            <ul key={index}>{softwareUsed}</ul>
          ))}
        </ul>
        <hr />
        <h2>Technical Skills</h2>
        <ul className="skills">
          {skills.map((skill, index) => (
            <ul key={index}>{skill}</ul>
          ))}
        </ul>
      </div>
      <hr />
      <div>
        <img
          className="image-resize"
          src={DigitalCityGridImage}
          alt="Digital City Grid"
          style={{ width: "auto", height: "auto" }}
        />
      </div>
      <br />
    </>
  );
};

export default Blog;
