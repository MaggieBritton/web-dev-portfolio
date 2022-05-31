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
          <p className="about-me-list">coder | designer | music theorist | pianist | vocalist | guitarist | sewist </p>
          <p className="about-body-text">I am Margaret Britton, a maker and a problem solver with an incredible attention to detail. I've been interested in computers since the early 1990s when my dad brought home a Macintosh Performa 450 and taught my siblings and I how to use it well enough to play games like Yogi's Basic Spelling Tricks and draw with Kid Pix. Now, decades later, I'm returning to one of my childhood interests to forge a career in web development, after graduating from Nucamp's Front End Web and Mobile Development Bootcamp with honors in May 2022. </p>   
            
          <p className="about-body-text">I fancy myself a coder with a designer's eye. In high school and college, I dabbled in design, creating CD and DVD artwork for theater productions and music recitals and concerts, as well as promotional posters. Years later, after my first child was born, I taught myself to sew, and now enjoy designing and sewing clothes for my two sons.</p>

          <p className="about-body-text">Most recently, I taught music theory and aural skills as an adjunct professor of music at Luther College, a job which allowed me to use my technical skills in the field, but also provided me with a creative outlet as I designed my courses. I have also worked as a cashier at a local food co-op, and as a proofreader for a major music publishing company.</p>

          <p>So, why web development? Because I'm super picky about making things just so, writing clean code, and making it pretty while I do it. It's the perfect blend of creativity, technicality, and fastidiousness.   </p>

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