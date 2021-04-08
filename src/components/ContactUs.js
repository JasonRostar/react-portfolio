import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work or suggestions below
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                  <span>{!!resumeData.phonenumber && <a href={`tel:${resumeData.phonenumber}`}>{resumeData.phonenumber}</a>}</span>
                  <br></br>
                  <span>{!!resumeData.email ? <a href={`mailto:${resumeData.email}`}>{resumeData.email}</a> : resumeData.email}</span>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}
