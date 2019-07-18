import React, { Component } from 'react';

export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    //console.log(this.props.resumeData)
    /*if(this.props.resumeData){
      var skills = this.props.resumeData.skills.map(function(skills){
        var projectImage = 'images/tech/'+skills.image;
          return <div key={skills.name} className="columns feature-item">
                    <img className='skill' alt={skills.name} src={projectImage} />
                    <h5>{skills.name}</h5>
                    <p>{skills.description}</p>
                 </div>
        })
    }*/

    return (
      <section id="resume">
         <div className="row education">
            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>
            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          {/*<p>
                          {item.Achievements}
                          </p>*/}
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.years}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div>
         </div>

         <div className="row skill">

        <div className="three columns header-col">
           <h1><span>Tech Stack</span></h1>
        </div>

        <div>
          <div className="nine columns main-col"><p className="lead center">{resumeData.skillsDescription}</p></div>
          <ul className="bgrid-quarters s-bgrid-thirds cf">
           {resumeData.skills && resumeData.skills.map(function(skills){
             var projectImage = `https://firebasestorage.googleapis.com/v0/b/alpha-dog-9ce25.appspot.com/o/images%2Fskills%2F${encodeURIComponent(skills.image)}?alt=media`;
               return <div key={skills.name} className="columns feature-item">
                         <img className='skill' alt={skills.name} src={projectImage} />
                         <h5>{skills.name}</h5>
                         <p>{skills.description}</p>
                      </div>
             })}
          </ul>
       </div>
     </div>
      </section>
    );
  }
}
