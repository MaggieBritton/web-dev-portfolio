import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const Projects = () => {
  return (
    <section>
        <h2>projects</h2>
        
        <div>
            <h4>Anywhere Montessori School</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div>
                <GitHubIcon /> 
                <LaunchIcon />
                <p>HTML  |  CSS  |  Bootstrap</p>           
            </div>
            <img src='images/anywhereMontessoriSchool.jpg' alt='Anywhere Montessori School Webpage' />
        </div>

        <div>
            <h4>Toy Lending Library</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div>
                <GitHubIcon /> 
                <LaunchIcon />
                <p>React.js  |  CSS  |  etc.</p>           
            </div>
            <img src='images/toyLendingLibrary.jpg' alt='Toy Lending Library Webpage' />
        </div>

    </section>
  );
}

export default Projects;