import React from 'react';
import './header.css';
 import {Link} from 'react-router-dom';


const Header =()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-fixed-top navbar-light">

            <Link className="navbar-brand" to="/">
                <h6>Harvard Business Review</h6>
                <span className="navbar-brand-span">كارفارد بزنس ريفيو </span>
            </Link>

            <div className="search"><i className="fa fa-search fa-lg"></i></div>
            <div className="person"><i className="fa fa-user fa-2x"></i></div>
            <button className="btn-s">اشتراك</button>                

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
                 
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">الرئيسية</Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/about">من نحن</Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/contactus">اتصل بنا</Link>
                </li>
                </ul>
            </div> 
      </nav>
      
    )
}
export default Header;