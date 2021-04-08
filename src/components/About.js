import React, { Component } from 'react';

export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic" src={require("../assets/images/profile-pic-2-circle.png")} alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>{resumeData.name}</span>
                     <br></br>
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    <span>{resumeData.website}</span>
                    <br/>
                      <span>{!!resumeData.phonenumber && <a href={`tel:${resumeData.phonenumber}`}>{resumeData.phonenumber}</a>}</span>
                      {/*<span>{resumeData.phonenumber}</span>*/}
                      <br></br>
                      <span>{!!resumeData.email ? <a href={`mailto:${resumeData.email}`}>{resumeData.email}</a> : resumeData.email}</span>
                      </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}
