import React from 'react';

const About = () => {
  return (
    <div className="about-container" id="about">
      <h2>about</h2>
      <div className="about-img-container">
        <img className="about-img" src='images/margaretBritton.jpg' alt='Margaret Britton' />
        <h3>Margaret Britton</h3>
      </div>
      <div className="about-content-container">
        <div className="about-body">
          <p>I am a maker and a problem solver with an incredible attention to detail. 
            
            For the past ten years, I have worked as an adjunct professor of music theory
            
            I am a maker and a problem solver with an incredible attention to detail who has spent the last decade as an adjunct professor of music theory, cashier, proofreader, and mom. 
            
            who enjoys both the creativity of design and the technicality of coding. I graduated in May 2022 from the Nucamp Front End Web and Mobile Development Bootcamp.
            
            I am a music theorist who constantly worked to create lessons and assignments to better suit the needs of my students. I am a self-taught seamstress who enjoys designing and sewing clothes for my young sons. I am a vocalist, pianist, and guitarist. Whether writing about musical gesture in Chopin's Mazurkas, sewing a mailman costume for my son, or creating engaging lessons for my students... </p>
        </div>
        <h5 className="about-frameworks">Current Frameworks / Libraries / Technologies: </h5>
        <p className="about-framework-list">HTML  |  CSS  |  JavaScript <br /> React.js  |  React Native  |  VS Code
        </p>
        <button className="resume-button">Resum&eacute;</button>
      </div>
    </div>
  );
}

export default About;