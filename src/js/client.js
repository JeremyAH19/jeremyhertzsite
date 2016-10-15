import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from "./pages/Layout";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ResumeContainer from "./components/ResumeContainer";
import ContactContainer from "./components/ContactContainer";
import NotFound from "./pages/NotFound";

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={About}/>
            <Route path="projects" name="projects" component={Projects}/>
            <Route path="resume" name="resume" component={ResumeContainer}/>
            <Route path="contact" name="contact" component={ContactContainer}/>
            <Route path="*" component={NotFound}/>
        </Route>
    </Router>,
app);