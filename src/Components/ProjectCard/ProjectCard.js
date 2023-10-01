import React from "react";
import ImageGallery from "react-image-gallery";
import './ProjectCard.css';
import "react-image-gallery/styles/css/image-gallery.css";
import githubIcon from '../../Media/General/github.png';
import techToLogoMapping from '../Data/TechLogos';

const ProjectCard = ({ project }) => {
    const images = project.images.map(image => ({
        original: image,
        thumbnail: image,
    }));

    return (
        <div className="project-card">
            <div className="project-content">
                <h1 className="project-title">{project.title}</h1>
                <p className="project-description">{project.description}</p>

                <div className="tech-stack">
                    {project.techStack.map((tech, index) => (
                        <div key={index} classname='tech-item-container'>
                            
                            <span className="tech-item">
                                {techToLogoMapping[tech] && <img src={techToLogoMapping[tech]} alt={tech} className="tech-logo" />}
                                {tech}
                            </span>
                        </div>
                    ))}
                </div>

                <a href={project.gitLink} target="_blank" rel="noopener noreferrer" className="github-link">                
                    <img src={githubIcon} alt="GitHub" className="github-icon" />
                    GitHub Link                                        
                </a>

            </div>
            
            <div className="project-images">
                {images && (
                    <ImageGallery
                        items={images}
                        autoPlay={true}
                        showBullets={true}
                        showFullscreenButton={false}
                        slideDuration={750}
                        slideInterval={5000}
                    />
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
