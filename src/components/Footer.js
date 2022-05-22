import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';

const Footer = () => {
  return (
    <div className="footer-container">
        <p className="connect">connect with me</p>
        <div className="footer-icon-container">
            <IconButton>
              <GitHubIcon fontSize="large" sx={{ color: "#fff", "&:hover": { color: "darkgray" } }} />
            </IconButton>
            <IconButton>
              <LinkedInIcon fontSize="large" sx={{ color: "#fff", "&:hover": { color: "darkgray" } }} />
            </IconButton>  
        </div>
        <small className="copyright">&copy; 2022 M. Britton Designs</small>
    </div>
  );
}

export default Footer;