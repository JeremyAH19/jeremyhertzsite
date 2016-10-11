import React from "react";

function Resume(props) {
    return(
        <div id="resume">
            <p className="heading">Summary of Qualifications</p>
            <p className="text">
                Former Electrical Engineer turned Software Engineer, trained in various technical skills such as
                programming languages, frameworks, and IDEs.  Highly motivated and results-driven individual who
                thrives in fast paced and stimulating environments that allow for both independent and collaborative
                teamwork. Seeking a challenging and rewarding opportunity to create, innovate and problem solve.
            </p>
            <p className="heading">Technical Skills</p>
            <ul id="skills">
                <li>Java</li>
                <li>JavaScript</li>
                <li>ReactJS</li>
                <li>ExpressJS</li>
                <li>C#</li>
                <li>SQL</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>XML/JSON</li>
                <li>Eclipse</li>
                <li>WebStorm</li>
                <li>Git</li>
            </ul>
        </div>
    );
}

export default Resume;