import React, { Component } from 'react';
const axios = require("axios");



export default class ContactUs extends Component {

  render() {
    let resumeData = this.props.resumeData;

    const contactForm = () =>{
      return(
        <form action="" method="post" id="contactForm" name="contactForm">
          <fieldset>
               <div>
                     <label htmlFor="contactName">Name <span className="required">*</span></label>
                     <input
                      type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={e => this.setState({name:e.target.value})}/>
               </div>
               <div>
                     <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                     <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={e => this.setState({email:e.target.value})}/>
               </div>

               <div>
                    <label htmlFor="contactSubject">Subject</label>
                    <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={e => this.setState({subject:e.target.value})}/>
               </div>

               <div>
                  <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                  <textarea cols="50" rows="15" id="contactMessage" name="contactMessage" onChange={e => this.setState({message:e.target.value})}></textarea>
               </div>

               <div>
                  <button className="submit" onClick={e => this.handleFormSubmit(e)}>Submit</button>
               </div>
           </fieldset>
        </form>
      )
    }
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work oppertunities
              </p>
            </div>
          </div>

          <div className="row">
            <div className="eight columns">
              {contactForm()}
              <span id="image-loader">
                       <img alt="" src="https://firebasestorage.googleapis.com/v0/b/alpha-dog-9ce25.appspot.com/o/images%2Floader.gif?alt=media" />
                </span>

                <span id="message-success">
                    <i className="fa fa-check">Your message was sent, thank you!</i>
          			</span>


            </div>

            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">
    					   <h4>Address and Phone</h4>
    					   <p className="address">
    						   {resumeData.name}<br />
    						   {resumeData.address===undefined?null:resumeData.address.city} <br />
    						   {resumeData.address===undefined?null:resumeData.address.state}, {resumeData.address===undefined?null:resumeData.address.zip}<br />
    						   <span>{resumeData.phone}</span><br />
                   <span><a href="mailto:vikramrao2512@gmail.com">{resumeData.email}</a></span>
    					   </p>
    				   </div>
            </aside>
           </div>
        </section>
        );
  }
}
