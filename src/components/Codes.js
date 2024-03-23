import React from "react";
import "./Codes.css";

const codes = (props) => (

<div className="codes-detail"> 
<a href={props.link} rel="">
VISIT ON WEBSITE
</a>
<i className="fa-regular fa-arrow-up-right"/>
<img src={props.image} alt="" />
<div className="label">
<h3>{props.name}</h3>
<p>{props.description}</p>
<div className="techstacks"> {
props.techstacks.map((stack, id) => (
<button className="points" key={id}>
{stack}
</button>

))
}

</div>
</div>
</div>

);

export default codes;