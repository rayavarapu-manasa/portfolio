import React from 'react'
import {Link} from 'react-router-dom';
import './Project.css';

function Projects() {
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
        <h1>My Projects</h1>
        <div className='project'>
          <h2>E-Commerce Website</h2>
          <p>An ECommerce website usually displays a catalog of products or services available for purchase. Each product listing includes details such as images, descriptions, prices, and available variations.</p>
          <button className="project-button"><a href="https://github.com/rayavarapu-manasa/E-commerce-website">View Project</a></button>
        </div>
        <div className='project'>
          <h2>Doctor Patient Application System</h2>
          <p>The Doctor Patient Application System serves as a comprehensive platform that enables efficient communication and management of healthcare-related tasks. It provides a seamless interface for doctors and patients to interact, schedule appointments, access medical records, and receive timely assistance.</p>
          <button className="project-button"><a href="https://github.com/rayavarapu-manasa/Doctor-Patient-Application-System">View Project</a></button>
        </div>
        <div className='project'>
        <h2>E-Ration Card Management System</h2>
        <p>The e-ration card management system utilizes ReactJS, Hooks, and JSX to create a responsive and user-friendly interface. Through efficient rendering and dynamic components, it streamlines the management of ration cards electronically. Deployment ensures accessibility, allowing authorized users to access the system online. This technology stack enhances efficiency and convenience in the management of e-ration cards.</p>
        <button className="project-button"><a href="https://github.com/rayavarapu-manasa/E-Rationcard-Management-System">View Project</a></button>
        <button className="project-button"><a href="https://dulcet-lokum-112d49.netlify.app">Website Link</a></button>
      </div>
        
      </div>
  

    </>
  )
}

export default Projects
