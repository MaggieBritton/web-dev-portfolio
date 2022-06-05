import React from 'react';
import { PROJECTSDATA } from '../data/projectsData';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import IconButton from '@mui/material/IconButton';

const Projects = () => {
  
    const projectsData = PROJECTSDATA;
  
    return (
    <div className="projects-container" id="projects">
        <h2>projects</h2>
        {projectsData.map((item, index) => {
            return (
                <>
                    <div className="project-content-container">
                        <div key={index} className="project-container" >
                            <h4>{item.title}</h4>
                            <p className="project-text">{item.description}</p>
                            <div className="bottom-project-container">
                                <div className="icon-container">
                                    <IconButton 
                                    href={item.gitHubLink} target="_blank">
                                        <GitHubIcon fontSize="large" sx={{ color: "#fff", "&:hover": { color: "darkgray" } }} />  
                                    </IconButton>
                                    <IconButton 
                                    href={item.externalLink}
                                    target="_blank">
                                        <LaunchIcon fontSize="large"
                                        sx={{ color: "#fff", "&:hover": { color: "darkgray" } }} 
                                    />   
                                    </IconButton>   
                                </div>
                                <span className="project-tech">{item.technologies.join(' | ')}</span>           
                            </div>
                        </div>
                        <img className="project-img" src={item.imageSrc} alt={item.imageAlt} />
                    </div>
                </>
            )
        })}
    </div>
  );
}

export default Projects;