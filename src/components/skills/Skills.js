import React from 'react';
import './Skills.css';
import {Link} from 'react-router-dom';

function Skills() {
  return (
    <>
    <div className='navbar'>

    <ul className='left'>
      <li> Portfolio</li>
    </ul>
    <ul className='right'>

      <li><Link to="/about">About</Link></li>
      <li><Link to="/skills">Skills</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </div>
      <div className="content">
        <h1>My Skills</h1>
        <div className="skills-container">
          <Skill name="HTML" />
          <Skill name="CSS" />
          <Skill name="JavaScript" />
          <Skill name="ReactJS" />
          <Skill name="Node.js" />
          <Skill name="MongoDB" />
          <Skill name="MySql" />
          <Skill name="Git" />
        </div>
      </div>
    </>
    
  );
}

function Skill({ name }) {
  return (
    <div className="skill">
      {name}
    </div>
  );
}

export default Skills;
