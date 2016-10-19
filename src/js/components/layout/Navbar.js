import React from "react";

function Navbar(props) {
    const hiddenClass = props.isHidden ? "nav-hidden" : "";

    return(
        <header>
            <div>
                <button onClick={props.onHiddenToggle}>
                    <i className="material-icons md-48">menu</i>
                </button>
            </div>
            <nav className={hiddenClass}>
                <ul>
                    <li><a onClick={props.onHiddenToggle} href="#home">Home</a></li>
                    <li><a onClick={props.onHiddenToggle} href="#about">About</a></li>
                    <li><a onClick={props.onHiddenToggle} href="#projects">Projects</a></li>
                    <li><a onClick={props.onHiddenToggle} href="#resume">Resume</a></li>
                    <li><a onClick={props.onHiddenToggle} href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

Navbar.propTypes = {
    isHidden: React.PropTypes.bool.isRequired,
    onHiddenToggle: React.PropTypes.func.isRequired
};

export default Navbar;