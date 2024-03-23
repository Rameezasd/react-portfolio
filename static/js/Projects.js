import React from "react";
import "./Projects.css";
import Build from "../components/Codes";

const Project = () => {
const detail = [
{
image: "images/project1.jpg",
name: "Project1 (Guitar Lesson Website)",
description: "It is a simple WordPress Website that is made on Guitar Lesson topic",
techStacks: ["WordPress", "Elementor", "Simply Static"],
link: "https://Rameezasd.github.io/guitarlesson-website",
},
{
image: "images/project2.jpg",
name: "Project2 (Foods Website)",
description: "It is a simple Wordpress Website that is made on Foods topic",
techStacks: ["WordPress", "Elementor", "Simply Static"],
link: "https://Rameezasd.github.io/foods-website",
},
{
image: "images/project3.jpg",
name: "Project3 (Cyber Security Website)",
description: "It is a simple Wordpress Website that is made on Cyber Security topic",
techStacks: ["WordPress", "Elementor", "Simply Static"],
link: "https://Rameezasd.github.io/cybersecurity-website",
},
{
image: "images/project4.jpg",
name: "Project4 (Furnitures Website)",
description: "It is a simple Wordpress Website that is made on Furnitures topic",
techStacks: ["WordPress", "Elementor", "Simply Static"],
link: "https://Rameezasd.github.io/Furnitures-website",
},
{
image: "images/project5.jpg",
name: "Project5 (Clothes Website)",
description: "It is a simple Wordpress Website that is made on Clothes topic",
techStacks: ["WordPress", "Elementor", "Simply Static"],
link: "https://Rameezasd.github.io/Clothes-website",
},
{
image: "images/project6.jpg",
name: "Project6 (Restaurant Website)",
description: "It is a simple Wordpress Website that is made on Restaurant topic",
techStacks: ["HTML5", "CSS3", "JavaScript"],
link: "https://Rameezasd.github.io/Frontend-Developer",
}
]
return (
<section id="Projects">
<div className="project-catagory">
<h3>Projects (Websites)</h3>
<p></p>
</div>
<div className="print">
{detail.map((project, id) => (
<Build
key={id}
image={project.image}
name={project.name}
description={project.description}
techstacks={project.techStacks}
link={project.link}
/>
))}
</div>
</section>
)
}

export default Project;