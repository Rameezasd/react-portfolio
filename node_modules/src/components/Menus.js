import React, { useEffect, useState } from 'react';
import './Menus.css';
import { Link } from 'react-scroll';

const menus = () => {
const [menusStyle, setMenusStyle] = useState({})
const [open, setOpen] = useState(false)
const [scroll, setScroll] = useState(false)

const toggleMenu = () => {
setOpen(!open)
}

useEffect(() => {
const handleScroll = () => {
const scrollTop = window.scrollY || document.documentElement.scrollTop
const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
const scrollPercentage = (scrollTop / scrollHeight) * 100

if (scrollPercentage >= 2) {
setScroll(true)

setMenusStyle({
backgroundColor: "rgba(0, 0, 0, 0.2)",
})
}else{
setMenusStyle({})

setScroll(false)
}
}
window.addEventListener("scroll", handleScroll)
return () => {
window.addEventListener("scroll", handleScroll)
}
}, [])

return (
<>
<nav
style={menusStyle}
className={`navbar ${open ? "nav-open" : ""}${
scroll ? "scrolled" : ""
}`}
>
<div className="picture">
<Link
className="name-logo"
spy
smooth
offset={50}
duration={500}
to="home"
>
<img src="images/logo.jpg" alt="" />
</Link> {" "}
<div className={`menu-btn ${open ? "opened-btn" : ""}`}
onClick={toggleMenu}
/>
</div>
<ul className={`menu ${open ? "open" : ""}`}>
<li>
<Link
spy
smooth
offset={50}
duration={500}
onClick={toggleMenu}
to="Home"
>
<a href="" rel="">Home</a>
</Link>
</li>
<li>
<Link
spy
smooth
offset={50}
duration={500}
onClick={toggleMenu}
to="About myself"
>
<a href="" rel="">About Myself</a>
</Link>
</li>
<li>
<Link
spy
smooth
offset={50}
duration={500}
onClick={toggleMenu}
to="Skills"
>
<a href="" rel="">Skills</a>
</Link>
</li>
<li>
<Link
spy
smooth
offset={50}
duration={500}
onClick={toggleMenu}
to="Projects"
>
<a href="" rel="">Projects</a>
</Link>
</li>
<li>
<li>
<Link
spy
smooth
offset={50}
duration={500}
onClick={toggleMenu}
to="contact me"
>
<a href="" rel="">Contact Me</a>
</Link>
</li>
</li>
</ul>
</nav>
<div className={`scroll-to-top ${scroll ? "scroll-true" : ""}`}>
<Link spy smooth offset={50} duration={1000} to="Home">
<i className="fa-solid fa-arrow-up" />
</Link>
</div>
</>
)
}

export default menus;