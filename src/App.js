import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Hero />
      <About />
      <Projects />
    </React.Fragment>
  );
}

export default App;
