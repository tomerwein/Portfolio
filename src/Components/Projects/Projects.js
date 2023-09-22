import React from 'react';
import './Projects.css';
import './ProjectCard.css';

import projectData from '../Data/ProjectData';
import ProjectCard from './ProjectCard';

const Projects = () => {
    return (
        <div className="projects-container">
            <h2>Projects</h2>
            
            {projectData.map(project => (
                <ProjectCard key={project.id} project={project} />
            ))}
            
        </div>
    );
};

export default Projects;
