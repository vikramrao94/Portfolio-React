import React, { Component } from 'react';
export default class About extends Component {

  render() {
    let resumeData = this.props.resumeData;

    const profilePic = () => {
      return(
        <div className="three columns">
           <img className="profile-pic"  src="images/profilepic.jpg" alt="" />
        </div>
      );
    }

    const contactDetails = () => {
      return(

        <div className="nine columns main-col">
           <h2>About Me</h2>
           <p>{resumeData.aboutme}</p>
           <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
      						   <span>{resumeData.name}</span><br />
                     <span>{resumeData.address===undefined?null:resumeData.address.city}<br />
      						         {resumeData.address===undefined?null:resumeData.address.state}, {resumeData.address===undefined?null:resumeData.address.zip}
                         </span><br />
      						   <span>{resumeData.phone}</span><br />
                      <span><a href="mailto:vikramrao2512@gmail.com">{resumeData.email}</a></span>
					        </p>
              </div>
              <div className="columns download">
                <p>
                    <a href={resumeData.resume} className="button" target="_blank"><i className="fa fa-download"></i>View Resume</a>
                </p>
              </div>
           </div>
        </div>
      )
    }

    return (
      <section id="about">
         <div className="row">
          {profilePic()}
          {contactDetails()}
         </div>
      </section>
    );
  }
}
