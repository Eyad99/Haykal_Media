import React, { Component } from 'react';
import Header from './Components/header/header';
import Content from './Components/content/content';
import Footer from './Components/footer/footer';
import About from './Components/about/about';
import ContactUs from './Components/contactus/contactus';
import $ from 'jquery'; 
import {Route,Switch,BrowserRouter,Redirect} from 'react-router-dom';


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
          // <BrowserRouter>
          //    <Switch>
          //       <Route exact path="/" component={Content} />
          //       <Route  path="/about" component={About} />
          //       <Route  path="/contactus" component={ContactUs} />
          //   </Switch> 
          // </BrowserRouter>
          <div>
              <Header />
              <Content />
            <Footer />
          </div>

      
  
    )
  }
}

export default App;
