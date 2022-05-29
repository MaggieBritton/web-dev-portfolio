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
          <p>I am a maker and a problem solver who enjoys both the creativity of design and the technical skill it takes to produce websites.  </p>
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