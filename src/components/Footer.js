import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <section>
        <p>connect with me</p>
        <div>
            <GitHubIcon />
            <LinkedInIcon />
        </div>
        <small>&copy; 2022 M. Britton Designs</small>
    </section>
  );
}

export default Footer;