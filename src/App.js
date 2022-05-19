import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;
