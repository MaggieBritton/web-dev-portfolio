import React from 'react';
import { PROJECTSDATA } from '../data/projectsData';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import YouTubeIcon from '@mui/icons-material/YouTube';
import IconButton from '@mui/material/IconButton';
import { motion } from 'framer-motion';

const Projects = () => {
  
    const projectsData = PROJECTSDATA;
  
    return (
    <div className="projects-container" id="projects">
        <motion.h2
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y:0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ ease: 'easeOut', duration: 1 }}
        >projects</motion.h2>
        {projectsData.map((item, index) => {
            return (
                <>
                    <motion.div className="project-content-container"
                    initial={{ y: 200, opacity: 0 }}
                    whileInView={{ y:0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ ease: 'easeOut', duration: 1 }}
                    >
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
                                     {item.youTubeLink != null &&
                                        <IconButton href={item.youTubeLink} target="_blank">
                                            <YouTubeIcon fontSize="large" sx={{ color: "#fff", "&:hover": { color: "darkgray" } }} />  
                                        </IconButton>   
                                    } 
                                     
                                </div>
                                <span className="project-tech">{item.technologies.join(' | ')}</span>           
                            </div>
                        </div>
                        <div className="project-img-container">
                          <motion.img 
                            className="project-img" 
                            src={item.imageSrc} 
                            alt={item.imageAlt}
                            whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.5 }
                            }}
                            whileFocus={{
                                scale: 1.1,
                                transition: { duration: 0.5 }
                            }}
                            />  
                        </div>
                        
                    </motion.div>
                </>
            )
        })}
    </div>
  );
}

export default Projects;