import React,{Component} from 'react';
import $ from 'jquery'; 
import playstore from '../../play-store.png';
import './content.css';


class Content extends Component{
  
  componentDidMount(){
      document.title = "الصفحة الرئيسية";

      $("#flip").click(function(e){
        e.preventDefault();
        $("#panel").slideToggle("slow",function(){     
          $(this).animate({ height: '130px' });
        });
        $(this).text( $(this).text() == 'إخفاء كل ميزات الإشتراك' ? 'عرض كل ميزات الإشتراك' : 'إخفاء كل ميزات الإشتراك');    
      })

      $("#flip1").click(function(e){
        e.preventDefault();
        $("#panel1").slideToggle("slow",function(){     
          $(this).animate({ height: '130px' });
        });
        $(this).text( $(this).text() == 'إخفاء كل ميزات الإشتراك' ? 'عرض كل ميزات الإشتراك' : 'إخفاء كل ميزات الإشتراك');    
      })

      $("#flip2").click(function(e){
        e.preventDefault();
        $("#panel2").slideToggle("slow",function(){     
          $(this).animate({ height: '130px' });
        });
        $(this).text( $(this).text() == 'إخفاء كل ميزات الإشتراك' ? 'عرض كل ميزات الإشتراك' : 'إخفاء كل ميزات الإشتراك');    
      })
    
  }


  render(){
    return(
  
      <div className="containerr p-3">
            <div className="row title-r">
              <div className="col">
                  <h2 className="h2">الاشتركات</h2>  
              </div>
            </div>
        <h4 className="title">الاشتراكات الرقمية</h4>
        <div className="card-deck">
            <div className="card text-center" >
                <div className="card-body text-center">
                  <h2 className="card-title font-weight-bold ">اشتراك سنوي</h2>
                  <p className="card-text text-muted">اشتراك رقمي فقط</p>
                  <hr />
                  <p className="card-text price">73$ <small className="text-muted">سنوياً</small></p>
                  <p className="card-text">أفضل قيمة | وفر47 دولار</p>
                  <button type="button" className="form-control btn-color ">اشترك الآن</button>
                    <ul className="text-left mt-3" id="panel" >
                      <li className="li">وصول رقمي للمحتوى عبر التطبيق والموقع</li>
                      <li className="li">إصادار  من المجلة 30</li>
                      <li className="li" >فيديو قيم يثري معارفك 300</li>
                      <li className="li">5 آلالف   مقالة تزداد يومياً</li>
                      <li className="li">مكتبة المحتوى الصوتي نشرة بريدية خاصة بالاعضاء</li>
                    </ul>
                    <hr />
                    <p id="flip" className="card-text flip"><small className="text-muted">إخفاء كل ميزات الإشتراك</small></p>
                    <i className="fa fa-angle-up" aria-hidden="true"></i>
                </div>
            </div>
            <div className="card">
                <div className="card-body text-center">
                  <h2 className="card-title font-weight-bold ">اشتراك 6 أشهر</h2>
                  <p className="card-text text-muted">اشتراك رقمي فقط</p>
                  <hr />
                  <p className="card-text price">73$ <small className="text-muted">كل 6 أشهر</small></p>
                  <p className="card-text">أفضل قيمة | وفر47 دولار</p>
                  <button type="button" className="form-control btn-color ">اشترك الآن</button>
                    <ul className="text-left mt-3" id="panel1">
                      <li className="li">وصول رقمي للمحتوى عبر التطبيق والموقع</li>
                      <li className="li">إصادار  من المجلة 30</li>
                      <li className="li">فيديو قيم يثري معارفك 300</li>
                      <li className="li">5 آلالف   مقالة تزداد يومياً</li>
                      <li className="li">مكتبة المحتوى الصوتي نشرة بريدية خاصة بالاعضاء</li>
                    </ul>
                  <hr />
                  <p id="flip1" className="card-text flip"><small className="text-muted">إخفاء كل ميزات الإشتراك</small></p>
                    <i className="fa fa-angle-up" aria-hidden="true"></i>
                </div>
            </div>
            <div className="card">
                <div className="card-body text-center">
                  <h2 className="card-title font-weight-bold ">اشتراك شهري</h2>
                  <p className="card-text text-muted">اشتراك رقمي فقط</p>
                  <hr />
                  <p className="card-text price">73$ <small className="text-muted">شهرياً</small></p>
                  <p className="card-text">أفضل قيمة | وفر47 دولار</p>
                  <button type="button" className="form-control btn-color ">اشترك الآن</button>
                    <ul className="text-left mt-3" id="panel2">
                      <li className="li">وصول رقمي للمحتوى عبر التطبيق والموقع</li>
                      <li className="li">إصادار  من المجلة 30</li>
                      <li className="li">فيديو قيم يثري معارفك 300</li>
                      <li className="li">5 آلالف   مقالة تزداد يومياً</li>
                      <li className="li">مكتبة المحتوى الصوتي نشرة بريدية خاصة بالاعضاء</li>
                    </ul>
                  <hr />
                  <p id="flip2" className="card-text flip"><small className="text-muted">إخفاء كل ميزات الإشتراك</small></p>
                    <i className="fa fa-angle-up" aria-hidden="true"></i>
                </div>
            </div>
        </div>

        <div className="row text-center m-3">
          <div className="col-md-4 text-dark">
            <p className="card-text">يمكنك تحميل تطبيق هارفارد بزنس ريفيو من هنا</p>
            <img src={playstore} alt="Googly Play" />
            <img src={playstore} alt="Googly Play" />
          </div>
          <div className="col-md-4 text-muted">
            <p className="card-text">ان كان لديك أي استفسار يمكنك التواصل معنا</p>
            <button type="button" className="form-control btn-color-gray">اشترك الآن</button>
          </div>
          <div className="col-md-4 twitter text-left">
          <p className="card-text twitter-p">أو ببساطة غرد بسؤالك ل @hbrarabia وسنقوم بالرد عليك فوراً</p>
          </div>

        </div>
      </div>
    
    )
  }
}

export default Content;