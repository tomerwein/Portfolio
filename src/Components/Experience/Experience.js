import React, { useState } from "react";
import "./Experience.css";

const Experience = () => {
    const [hoveredButton, setHoveredButton] = useState(null);

    return (
        
        <div className="experience-container">
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
    )
}

export default Experience;
