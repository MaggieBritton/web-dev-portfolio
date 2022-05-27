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
                    <div key={index} className="project-container" >
                        <h4>{item.title}</h4>
                        <p className="project-text">{item.description}</p>
                        <div className="bottom-project-container">
                            <div>
                                <IconButton onClick={projectsData.gitHubLink}>
                                    <GitHubIcon fontSize="large" sx={{ color: "#fff", "&:hover": { color: "darkgray" } }} />  
                                </IconButton>
                                <IconButton>
                                    <LaunchIcon fontSize="large"
                                    sx={{ color: "#fff", "&:hover": { color: "darkgray" } }} 
                                />   
                                </IconButton>   
                            </div>
                        <span className="project-tech">{item.technologies.join(' | ')}</span>           
                    </div>
                </div>
                <img className="project-img" src={item.imageSrc} alt={item.imageAlt} />
            </>
            )
        })}
    </div>
  );
}

export default Projects;