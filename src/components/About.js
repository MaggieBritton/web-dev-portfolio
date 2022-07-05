import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div className="about-container" id="about"
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y:0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ ease: 'easeOut', duration: 1 }}
    >
      <h2>about</h2>
      <div className="about-content-container">
        <img className="about-img" src='images/margaretBritton.jpg' alt='Margaret Britton' />
        <h3>Margaret Britton</h3>
        <div className="about-body">
          <p className="about-me-list">coder | designer | music theorist | educator | musician | sewist </p>
          <p className="about-body-text">I am Margaret Britton, an educator, maker, and problem solver with an incredible attention to detail. I've been interested in computers since the early 1990s when my dad brought home a Macintosh Performa 450 and taught my siblings and me how to use it well enough to play games like Yogi's Basic Spelling Tricks and draw with Kid Pix. Now, decades later, I'm returning to one of my childhood interests to forge a career in web development. I recently graduated from Nucamp's Front End Web and Mobile Development Bootcamp with honors. </p>   
            
          <p className="about-body-text">I fancy myself a coder with a designer's eye. In high school and college, I dabbled in design, creating CD and DVD artwork for theater productions, music recitals, and concerts, as well as promotional posters. Years later, after my first child was born, I taught myself to sew, and now enjoy designing and sewing clothes for my two sons.</p>

          <p className="about-body-text">Most recently, I taught music theory and aural skills as an adjunct professor of music at Luther College, a job which allowed me to use my technical skills in that field, but also provided me with a creative outlet as I designed my courses and improved them over time.
</p>

          <p>A native of Milwaukee, WI, I now live in Spokane, WA with my husband and two young sons. When I’m not designing and coding websites, I can be found spending time with my sons, making music, sewing, and exploring the outdoors.</p>
          
        </div>
        <div className="about-frameworks-container">
          <h5 className="about-frameworks">Current Frameworks / Libraries / Technologies: </h5>
          <p className="about-framework-list">HTML  |  CSS  |  JavaScript <br /> React  |  VS Code
          </p>
          <button className="resume-button">Coming Soon: Resum&eacute;</button>
        </div>
      </div>
    </motion.div>
  );
}

export default About;