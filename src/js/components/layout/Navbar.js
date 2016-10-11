import React from "react";
import { Link, IndexLink } from "react-router";

function Navbar(props) {
    const projectsActive = props.location.pathname.match(/^\/projects/) ? "active" : "";
    const resumeActive = props.location.pathname.match(/^\/resume/) ? "active" : "";
    const contactActive = props.location.pathname.match(/^\/contact/) ? "active" : "";

    return(
        <header>
            <div id="logo">
                <IndexLink to="/">JeremyHertz.com</IndexLink>
            </div>
            <nav>
                <ul>
                    <li><Link to="/projects" className={projectsActive}>Projects</Link></li>
                    <li><Link to="/resume" className={resumeActive}>Resume</Link></li>
                    <li><Link to="/contact" className={contactActive}>Contact Me</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;