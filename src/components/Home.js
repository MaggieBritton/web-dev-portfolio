import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { HashLink } from 'react-router-hash-link';
import { SIDEBARDATA } from '../data/sidebarData';
import { motion } from 'framer-motion';

const Home = () => {
  
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => setSidebar(!sidebar);

  const sidebarData = SIDEBARDATA;
  
  return (
      <div id="home">
        <nav className={sidebar ? "sidebar-open" : "sidebar-closed"}>
          <div className="sidebar-container">
              <ul className="sidebar-list">
                  {sidebarData.map((item, index) => {
                  return(
                      <li key={index} className="sidebar-list-item" onClick={toggleSidebar}>
                      <HashLink to={item.path} className="sidebar-link" smooth>{item.name}</HashLink>
                      </li>
                  )
                  })}
              </ul>
          </div>
        </nav>
        <div className={sidebar ? "hero-container translate" : "hero-container"} >
          <div className="header">
            <IconButton onClick={toggleSidebar}>   
                {sidebar ? 
                <CloseIcon className="close-icon" fontSize="large" sx={{ color: "#000", "&:hover": { color: "#005477" } }} /> 
                :
                <MenuIcon className="menu-icon" fontSize="large" sx={{ color: "#000", "&:hover": { color: "#005477" } }}  />
              }  
            </IconButton>  
          </div>
          <motion.div className="hero-content"
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 1.5 }}
          >
            <p className="hero-intro">Hi, my name is</p>
            <h1>Margaret Britton</h1>
            <p className="hero-body">I'm a <strong>front&ndash;end web developer</strong> with a background in <strong>music theory</strong> and a passion for making the web both <strong>functional</strong> and <strong>beautiful</strong>.</p>
          </motion.div>
        </div>
      </div>
  );
}

export default Home;