import React from "react";
import { Link } from "react-scroll";
import "./Home.css";

const Home = () => (
  <section id="Home"> 
    <div className="Heading">
        <h1> I am a Frontend Developer </h1>
        <p> Gaining of Full Stack Developer experience and working with different Tech Stacks for Learning Front-End Developement in different 
        scenrios. I take a short course of Web Designing in which i learn HTML5/CSS3, JavaScript, JQuery, Bootstrap and WordPress. I also 
        learn Photoshop for graphics designing purpose. Then i start to learn React (Most popular framework of JavaScript). </p>
        <a href="" rel=""> Download My CV </a> 
    </div>
    <div className="Images">
        <img src="images/profile.jpg" alt="" />      
    </div>
  </section>
);

export default Home;