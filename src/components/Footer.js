import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';

const Footer = () => {
  return (
    <div className="footer-container">
        <p className="connect">connect with me</p>
        <div className="footer-icon-container">
            <IconButton href="https://github.com/MaggieBritton" target="_blank">
              <GitHubIcon fontSize="large" sx={{ color: "#fff", "&:hover": { color: "darkgray" } }} />
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/maggiebritton4/" target="_blank">
              <LinkedInIcon fontSize="large" sx={{ color: "#fff", "&:hover": { color: "darkgray" } }} />
            </IconButton>  
        </div>
        <small className="copyright">&copy; 2022 Margaret Britton</small>
    </div>
  );
}

export default Footer;