import React, { useState } from "react";
import './About.css';
import MetaImage from '../../Media/General/Meta.png';

const About = () => {
    const [hoveredButton, setHoveredButton] = useState(null);

    return (
        <div className="about-container">
            <h1>About Me</h1>
            <p>
                I am on the verge of completing my Computer Science (CS)
                 bachelor's degree at Ben Gurion University in Israel. <br/>
                 I have a lot of motivation, I'm a quick learner 
                  and have a passion for taking on large projects and running with them!
            </p>
            <h2>Experience</h2>
            <div className="experience-buttons">

                <div className="experience-buttons-row">
                    <button 
                        className={hoveredButton === 'meta' ? "meta-hover-button" : "meta-button"} 
                        onMouseEnter={() => setHoveredButton('meta')}
                        onMouseLeave={() => setHoveredButton(null)}
                    >
                        {hoveredButton === 'meta' ? 'Backend Software Engineer Internship' : null}
                    </button>
                    
                    <button 
                        className={hoveredButton === 'python' ? "python-hover-button" : "python-button"} 
                        onMouseEnter={() => setHoveredButton('python')}
                        onMouseLeave={() => setHoveredButton(null)}
                    >
                        {hoveredButton === 'python' ? 'Python Instructor At Nitzanim' : null}
                    </button>
                </div>

                <div className="experience-buttons-row">
                    <button 
                        className={hoveredButton === 'idf' ? "idf-hover-button" : "idf-button"} 
                        onMouseEnter={() => setHoveredButton('idf')}
                        onMouseLeave={() => setHoveredButton(null)}
                    >
                        {hoveredButton === 'idf' ? 'Intelligence analyst in the IDF' : null}
                    </button>
                    
                    <button 
                        className={hoveredButton === 'projects' ? "projects-hover-button" : "projects-button"}
                        onMouseEnter={() => setHoveredButton('projects')}
                        onMouseLeave={() => setHoveredButton(null)}
                    >
                        {hoveredButton === 'projects' ? 'Click here to watch my projects' : null}
                    </button>
                </div>

            </div>
        </div>
    );
};

export default About;
