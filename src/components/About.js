import React from "react";
import { image } from "../data/data.js";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I hope this JSX runs correctly!</p>
      <img src={image} alt="I made this"></img>
    </div>
  );
}

export default About;
