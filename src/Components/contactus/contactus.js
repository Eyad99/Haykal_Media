import React, { useState, useEffect } from 'react';
import contactus from '../../contact_us.svg';
import '../contactus/contactus.css';


 const ContactUs =()=>{
    useEffect(() => {
        document.title = "اتصل بنا"
     }, []);
    return(
          <div className="container contactus mt-5 mb-5">
                <div className="row m-3">
                    <div className="col-lg-6 col-sm-12">
                        <img src={contactus} alt="Svg Image" width="100%" height="100%" />
                    </div>
                    <div className="col-lg-6 col-sm-12">
                    <form method="" action="">
                        <label for="name">الإسم</label>
                        <input className="form-control" type="text" name="name" placeholder="الاسم" />
                        <label for="email">الإيميل</label>

                        <input className="form-control" type="email" name="email" placeholder="الإيميل" />
                        <label for="description">محتوى الرسالة</label>

                        <textarea className="form-control" name="description" rows="10" color="50" placeholder="محتوى الرسالة"></textarea>
                    </form>
                    </div>
                </div>
        </div>       
    )
}
export default ContactUs