import React from 'react';
import { Sidebar } from './Sidebar';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

const Hero = () => {
  return (
      <React.Fragment>
        <Sidebar />
        <div className="hero-container">
          <div className="header">
            <span className="logo">&lt;MB {"  "} &frasl; &gt;</span>
            <IconButton>
              <MenuIcon fontSize="large" sx={{ color: "#000", "&:hover": { color: "#005477" } }}  />
            </IconButton>  
          </div>
          <div className="hero-content">
            <p className="hero-intro">Hi, my name is</p>
            <h1>Margaret Britton</h1>
            <p className="hero-body">I'm a <strong>front&ndash;end web developer</strong> with a background in <strong>music theory</strong> and a passion for making the web both <strong>functional</strong> and <strong>beautiful</strong>.</p>
          </div>
        </div>
      </React.Fragment>
  );
}

export default Hero;