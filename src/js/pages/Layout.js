import React from "react";

import Navbar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";

function Layout(props) {
    return(
        <div>
            <Navbar location={props.location}/>
            <div id="container">
                {props.children}
            </div>
            <Footer/>
        </div>
    );
}

export default Layout;