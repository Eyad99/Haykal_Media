import React from 'react';
import './header.css';



const Header =()=>{
    return(
        <nav className="navbar navbar-expand-lg fixed-top navbar-light">

            <a className="navbar-brand" href="#">
                <h6>Harvard Business Review</h6>
                <span className="navbar-brand-span">كارفارد بزنس ريفيو </span>
            </a>

            <div className="search"><i className="fa fa-search fa-lg"></i></div>
            <div className="person"><i className="fa fa-user fa-2x"></i></div>
            <button className="btn-s">اشتراك</button>                

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
                 
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#">الرئيسية</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="#">من نحن</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="#">اتصل بنا</a>
                </li>
                </ul>
            </div> 
      </nav>
      
    )
}
export default Header;