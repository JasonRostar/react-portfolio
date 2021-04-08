import React, { Component } from 'react';
import project1 from '../assets/images/project1.png';
import project2 from '../assets/images/project2.png';
import project3 from '../assets/images/project3.png';
export default class Projects extends Component {
  render() {
    

    return (
      <section id="portfolio">
         
            <h1>Projects</h1>
              <div className="projects" >
                   
                  <img className="single-img" src={project1} alt="logo" />
                  <img className="single-img"  src={project2} alt="logo" />
                  <img className="single-img"  src={project3} alt="logo" />
              </div>
      </section>
    );
  }
}
