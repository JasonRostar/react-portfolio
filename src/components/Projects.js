import React, { Component } from 'react';
import project1 from '../assets/images/project1.png';
import project2 from '../assets/images/project2.png';
import project3 from '../assets/images/project3.png';
import project4 from '../assets/images/project4.png';
export default class Projects extends Component {
  render() {
    

    return (
      <section id="portfolio">
         
            <h1>Projects</h1>
              <div className="projects" >
                <a href="https://hungry-saha-bc9fd0.netlify.app/login" target="_blank" rel="noopener noreferrer">
                  <img className="single-img" src={project1} alt="expat journal project" />
                </a>
                <a href="https://port-project-1-6rd5axtek-jasonrostar.vercel.app/" target="_blank" rel="noopener noreferrer">
                   <img className="single-img"  src={project2} alt="dark mode react project" />
                </a>
                <a href="https://jasonrostar.github.io/ExtendedResume/" target="_blank" rel="noopener noreferrer">
                    <img className="single-img"  src={project3} alt="extended resume with vmet and degree" />
                </a>
                <a href="https://suekernrealestate.com" target="_blank" rel="noopener noreferrer">
                    <img className="single-img"  src={project4} alt="Sue Kern Real Estate Site" />
                </a>
              </div>
      </section>
    );
  }
}
