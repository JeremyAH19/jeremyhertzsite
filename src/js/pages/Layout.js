import React from "react";

import NavbarContainer from "../components/NavbarContainer";

import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import ResumeContainer from '../components/ResumeContainer';
import ContactContainer from '../components/ContactContainer';

import Footer from "../components/layout/Footer";

function Layout(props) {
    return(
        <div>
            <NavbarContainer/>
            <div id="container">
                <Home/>
                <About/>
                <Projects/>
                <ResumeContainer/>
                <ContactContainer/>
            </div>
            <Footer/>
        </div>
    );
}

export default Layout;