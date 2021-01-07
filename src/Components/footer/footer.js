import React from 'react';
import './footer.css';
import playstore from '../../play-store.png';


const Footer =()=>{
    return(
        <div className="containe">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-6">
                <p className="text-muted">تواصل معنا</p>
                <i className="fa fa-twitter" aria-hidden="true"></i>
                <i className="fa fa-facebook" aria-hidden="true"></i>
                <i className="fa fa-instagram" aria-hidden="true"></i>
                <i className="fa fa-instagram" aria-hidden="true"></i>                
                </div>
                <div className="col-lg-3 col-md-6 col-6">
                <a className="navbar-brand " href="#">
                        Harvard Business Review
                        <span className="navbar-brand-span">كارفارد بزنس ريفيو </span>
                    </a> 
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <div id="accordion">
                            <div className="" id="headingOne">
                                <h5 className="mb-0">
                                    <button className="btn btn-link b" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        معلومات حولنا
                                    </button>
                                </h5>
                                </div>

                                <div id="collapseOne" className="collapse"  aria-labelledby="headingOne" data-parent="#accordion">
                                <div className="card-body">
                                </div>
                            </div>
                        </div>
                        <div id="accordion1">
                            <div className="" id="headingTow">
                                <h5 className="mb-0">
                                    <button className="btn btn-link b" data-toggle="collapse" data-target="#collapseTow" aria-expanded="true" aria-controls="collapseTow">
                                        سياسات الاشتراك
                                    </button>

                                </h5>
                                </div>

                                <div id="collapseTow" className="collapse"  aria-labelledby="headingTow" data-parent="#accordion1">
                                <div className="card-body">
                                </div>
                            </div>
                        </div>
                        <div id="accordion2">
                            <div className="">
                                <h5 className="mb-0">
                                    <button className="btn btn-link b" data-toggle="collapse">
                                        معلومات حولنا
                                    </button>
                                </h5>
                                </div>
                        </div>
                    </div>
                <div className="col-lg-3 col-md-6 col-12 text-center">
                <p className="card-text">حمل تطبيق هارفارد بزنس ريفيو</p>
                <img src={playstore} alt="Googly Play" />
                <img src={playstore} alt="Googly Play" />

                </div>  
            </div>
            
            <div className="row text-center footer">
                <div className="col">
                <p className="text-muted">جميع الحقوق محفوظة لشركة هارفارد بزنس ريفيو سكول ببليشينغ @2020</p>
                </div>
            </div>
        </div>

    )
}
export default Footer;