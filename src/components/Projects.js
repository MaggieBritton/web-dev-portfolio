import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import IconButton from '@mui/material/IconButton';

const Projects = () => {
  return (
    <div className="projects-container">
        <h2>projects</h2>
        
        <div className="project-container">
            <h4>Anywhere Montessori School</h4>
            <p className="project-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className="bottom-project-container">
                <div>
                    <IconButton>
                      <GitHubIcon fontSize="large" sx={{ color: "#fff", "&:hover": { color: "darkgray" } }} />  
                    </IconButton>
                    <IconButton>
                        <LaunchIcon fontSize="large"
                        sx={{ color: "#fff", "&:hover": { color: "darkgray" } }} 
                        />   
                    </IconButton>   
                </div>
                
                <span className="project-tech">HTML  |  CSS  |  Bootstrap</span>           
            </div>
        </div>
        <img className="project-img" src='images/anywhereMontessoriSchool.jpg' alt='Anywhere Montessori School Webpage' />

        <div className="project-container">
            <h4>Toy Lending Library</h4>
            <p className="project-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className="bottom-project-container">
                <div>
                <IconButton>
                      <GitHubIcon fontSize="large" sx={{ color: "#fff", "&:hover": { color: "darkgray" } }} />  
                    </IconButton>
                    <IconButton>
                        <LaunchIcon fontSize="large"
                        sx={{ color: "#fff", "&:hover": { color: "darkgray" } }} 
                        />   
                    </IconButton>  
                </div>
                 
                <span className="project-tech">React  |  CSS  |  Reactstrap</span>           
            </div>
        </div>
        <img className="project-img" src='images/toyLendingLibrary.jpg' alt='Toy Lending Library Webpage' />

    </div>
  );
}

export default Projects;