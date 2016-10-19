import React from "react";

function Resume(props) {
    return(
        <div id="resume">
            <div className="section-title">
                <h3>RESUME</h3>
            </div>
            <div className="section-content">
                <p className="heading">Summary of Qualifications</p>
                <p className="text">
                    Former Electrical Engineer turned Software Engineer, trained in various technical skills such as
                    programming languages, frameworks, and IDEs.  Highly motivated and results-driven individual who
                    thrives in fast paced and stimulating environments that allow for both independent and collaborative
                    teamwork. Seeking a challenging and rewarding opportunity to create, innovate and problem solve.
                </p>
                <p className="heading">Technical Skills</p>
                <ul className="skills text">
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
                    <li className="hidden"/>
                    <li className="hidden"/>
                    <li className="hidden"/>
                </ul>
                <p className="heading">Work History</p>
                <div className="company">
                    <span>Happy Cloud, Inc., <em>New York, NY</em></span>
                    <span className="jobtitle">Game Porting Engineer</span>
                    <span>Sep. 2014 – Feb. 2016</span>
                </div>
                <p className="text">
                    Happy Cloud, Inc., a unique and innovative game technology startup that pioneered
                    cloud-based progressive download technology for PC and Mobile gaming.
                </p>
                <ul className="workpoints">
                    <li>
                        • Applied advanced download technology to games for both PC and mobile platforms,
                        reducing download time by as much as 90% for gamers
                    </li>
                    <li>
                        • Utilized Happy Cloud client to analyze gameplay and understand how data is requested
                    </li>
                    <li>
                        • Studied analysis of data requests and created specific JSON-formatted files to determine
                        the optimal download priority of game assets
                    </li>
                    <li>
                        • Designed Happy Cloud game launchers using HTML, CSS, and JavaScript
                    </li>
                    <li>
                        • Directly communicated with game players in order to repair bugs and other technological issues
                        that came up during gameplay, and used SQL to organize bug reports
                    </li>
                    <li>
                        • Brainstormed, created and tested other innovative Happy Cloud technologies and determined how
                        to best utilize such tools on behalf of the client
                    </li>
                    <li>
                        • Created programs in Java and C# to parse through contents of packaged game data, allowing for
                        a faster and more accurate analysis of data requested and a higher level of efficiency
                        amongst team members
                    </li>
                </ul>
                <p className="heading">Relevant Links</p>
                <p className="text">
                    Github Profile: <a href="https://github.com/JeremyAH19">https://github.com/JeremyAH19</a>
                </p>
                <p className="heading">Education</p>
                <div className="education text">
                    <span>Rochester Institute of Technology, <em>Rochester, NY</em></span>
                    <span>B.S. Electrical Engineering Technology (2011)</span>
                </div>
                <div className="download">
                    <span>Download: </span>
                    <button type="button" name="docx" onClick={props.onDownloadClick}>WORD</button>
                    <button type="button" name="pdf" onClick={props.onDownloadClick}>PDF</button>
                </div>
            </div>
        </div>
    );
}

Resume.propTypes = {
    onDownloadClick: React.PropTypes.func.isRequired
};

export default Resume;