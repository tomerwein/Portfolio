import React, { useState } from "react";
import './About.css';

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
                        onMouseEnter={() => setHoveredButton('meta')}
                        onMouseLeave={() => setHoveredButton(null)}
                    >
                        {hoveredButton === 'meta' ? 'More information about Meta internship' : 'Backend internship at Meta'}
                    </button>
                    
                    <button 
                        onMouseEnter={() => setHoveredButton('python')}
                        onMouseLeave={() => setHoveredButton(null)}
                    >
                        {hoveredButton === 'python' ? 'I was a Python instructor for a project aimed at guiding high school students from the periphery into technological units in the IDF' : 'Python instructor'}
                    </button>
                </div>

                <div className="experience-buttons-row">
                    <button 
                        onMouseEnter={() => setHoveredButton('idf')}
                        onMouseLeave={() => setHoveredButton(null)}
                    >
                        {hoveredButton === 'idf' ? 'More information about IDF intelligence analyst' : 'Intelligence analyst in the IDF'}
                    </button>
                    
                    <button 
                        onMouseEnter={() => setHoveredButton('projects')}
                        onMouseLeave={() => setHoveredButton(null)}
                    >
                        {hoveredButton === 'projects' ? 'Projects that will be showcased here' : 'Projects'}
                    </button>
                </div>

            </div>
        </div>
    );
};

export default About;
