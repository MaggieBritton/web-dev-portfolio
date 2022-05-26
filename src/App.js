import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
