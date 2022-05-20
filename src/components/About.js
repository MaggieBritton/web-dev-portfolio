import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <h2>about</h2>
      <div className="about-img-container">
        <img className="about-img" src='images/margaretBritton.jpg' alt='Margaret Britton' />
        <h3>Margaret Britton</h3>
      </div>
      <div className="about-content-container">
        <div className="about-body">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus magna fringilla urna porttitor rhoncus dolor. Penatibus et magnis dis parturient montes nascetur ridiculus mus. At quis risus sed vulputate odio ut enim blandit volutpat.</p>
          <p>Enim eu turpis egestas pretium aenean pharetra magna. Augue eget arcu dictum varius duis at consectetur lorem donec. Tempus urna et pharetra pharetra massa massa ultricies. Parturient montes nascetur ridiculus mus. Facilisi cras fermentum odio eu feugiat.</p>
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