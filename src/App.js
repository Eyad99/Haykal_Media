import React, { Component } from 'react';
import Header from './Components/header/header';
import Title from './Components/title/title';
import Content from './Components/content/content';
import Footer from './Components/footer/footer';
import $ from 'jquery'; 


class App extends Component{

  componentDidMount(){
    $(window).scroll(function(){
      if ($(this).scrollTop() > 100) {
        $('.navbar .navbar-brand h6').text('LOGO');
    }
    if ($(this).scrollTop() < 100) {
        $('.navbar .navbar-brand h6').text('Harvard Business Review');
    }
    });
  }
  render(){
    return(
        <div>
          <Header />
          <Title />
          <Content />
          <Footer />
        </div>
    )
  }
}

export default App;
