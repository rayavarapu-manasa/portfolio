import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Mainpage from './components/mainpage/Mainpage';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Mainpage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      
      
    </Router>
  );
}

export default App;
