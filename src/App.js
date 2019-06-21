import React, { Component } from 'react';
import $ from 'jquery'
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
      foo: 'bar',
      resumeData: {}
    };

    //ReactGA.initialize('UA-110570651-1');
    //ReactGA.pageview(window.location.pathname);

  }

  getResumeData(){
    $.ajax({
      url:'https://alpha-dog-9ce25.firebaseio.com/.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
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
