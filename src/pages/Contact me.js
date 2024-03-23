import React from "react";
import "./Contact me.css"

const Contact = () => (
<section id="contact">
<h3>Contact me</h3>
<div className="Hiring">
<h3>Contact me</h3>
</div>
<form>
<label for="fname">First Name</label>
<label for="lname">Last Name</label>
<br />
<input type="text" id="fname" name="fname" />
<input type="text" id="lname" name="lname" />
<br />
<br />
<label for="email">Email</label>
<br />
<input type="text" id="email" name="email" />
<br />
<br />
<label for="message">Message</label>
<br />
<textarea type="message" row="3" col="8"></textarea>
<br />
<input type="submit" value="Submit" />
</form>

</section>
);

export default Contact;