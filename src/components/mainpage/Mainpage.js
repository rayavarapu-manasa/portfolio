import React from 'react';
import './Mainpage.css';
import {Link} from 'react-router-dom';

function Mainpage() {
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
      <div className='content'>
        <h1>Manasa Rayavarapu</h1>

        <h2>I'm a FullStack Developer</h2>
        <p>Hi! Im an undergraduate student at Roorkee Institute of technology Computer Science Department.
          As a fullstack developer,I bring a comprehensive skill set that covers both frontend and backend technologies.
          With proficiency in HTML,CSS,Javascript,I excel in crafting responsive and visually appleaing user interfaces.My experience with
          ReactJs enables me to develop dynamic and interactive web applications,while my expertise in NodeJs allows me to build robust server-side
          logic and also proficient in Mysql and MongoDB.
        </p>
        <button className="resume-button">
          <a href="https://drive.google.com/file/d/1g2JNNZeuiwGPW1SMdHNsYY8g_3rApIpQ/view?usp=sharing" download>View Resume</a>
        </button>
      </div>
    </>
  )
}

export default Mainpage;
