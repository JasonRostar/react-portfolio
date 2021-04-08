import React, { Component } from 'react';
import Typed from 'react-typed';
import Particles from "react-particles-js";
import Resume from "../RostarResume.pdf";


const particlesOptions = {
    "particles": {
        "number": {
            "value": 137,
            "density": {
                "enable": true,
                "value_area": 868.0624057955
            }
        },
        "color": {
            "value": "#12abb0"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 126.26362266116361,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true

};




export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>

          <Particles className="particles" params={particlesOptions}/>
          <header id="home">
             <nav id="nav-wrap">
                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
              <a className="mobile-btn" href="/#" title="Hide navigation">Hide navigation</a>
                <ul id="nav" className="nav">
                   <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                 <li><a className="smoothscroll" href="#resume">Resume</a></li>
                   <li><a className="smoothscroll" href="#about">About</a></li>
                   <li><a className="smoothscroll" href="#projects">Projects</a></li>
                   <li><a className="smoothscroll" href="#contact">Contact</a></li>
                </ul>
             </nav>

             <div className="row banner">
                <div className="banner-text">
                   <h1 className="responsive-headline">I am {resumeData.name}.</h1>
                    <Typed style={{fontSize: 50, color: '#12ABB0'}}
                        strings={[
                            'Full Stack Web Developer',
                            'JavaScript',
                            'HTML5',
                            'CSS3',
                            'Git',
                            'React',
                            'SQL',
                            'Node',
                            'Express',
                            'Python',
                            'TablePlus',
                            'KnexJS',
                        ]}
                        typeSpeed={40}
                        backSpeed={15}
                        loop
                    />
                   <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>{resumeData.roleDescription}
                   </h3>
                   <hr/>
                   <ul className="social">
                      {
                        resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                          return(
                                  <li key={item.name}>
                                    <a href={item.url} rel="noopener noreferrer" target="_blank"><i className={item.className}></i></a>
                                  </li>
                                )
                              }
                        )
                      }
                   </ul>
                    <a href={Resume} style={{fontSize: 25}} target="_blank" rel="noopener noreferrer">Resume</a>
                </div>
             </div>

             <p className="scrolldown">
                <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
             </p>

          </header>
      </React.Fragment>
    );
  }
}
