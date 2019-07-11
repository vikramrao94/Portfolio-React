import React, { Component } from 'react';
import $ from 'jquery';
import ReactGA from 'react-ga';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Testimonials from  './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      resumeData: {}
    };
    ReactGA.initialize('UA-143688469-1');
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData(){
    const load = document.getElementById('siteLoading')
    $.ajax({
      url:'https://alpha-dog-9ce25.firebaseio.com/.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
        setTimeout(()=>{
          load.outerHTML='';
        },500)
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    //console.log(this.state.resumeData)
    return (
      <div className="App">
        <Header resumeData={this.state.resumeData}/>
        <About resumeData={this.state.resumeData}/>
        <Resume resumeData={this.state.resumeData}/>
        <Portfolio resumeData={this.state.resumeData}/>
        <ContactUs resumeData={this.state.resumeData}/>
        <Footer resumeData={this.state.resumeData}/>
      </div>
    );
  }
}

export default App;
