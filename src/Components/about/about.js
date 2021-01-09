import React, { Component } from 'react';
import '../about/about.css'

class About extends Component {
    componentDidMount(){
        document.title = "من نحن";
    }
    render(){
        return(
                <div className="container about mt-5 mb-5">
                    <div className="card text-center" >
                    <div className="card-body text-center">
                    <hr />
                      <h3 className="card-title text-muted">
                      تأسست في عام 2004 من قبل عبد السلام هيكل ، تقوم شركتنا بإنشاء منصات للشركات لإيصال رسائلها. يتم ذلك من خلال منتجاتنا الإعلامية ، والتي تشمل Harvard Business Review Arabia و Popular Science Arabia و MIT Technology Review Arabia وغيرها ، جنبًا إلى جنب مع خدمات إنشاء المحتوى التي تساعد الشركات على توصيل رسائل جيدة الصنع لجمهورها ، بمساعدة أحداثنا وقسم المؤتمرات ، الذي يجمع المحتوى والمجتمع معًا.
                        هيكل ميديا ​​يعمل على سد الثغرات في مساحة المحتوى العربي ذات الجودة العالية. نهدف من خلال منشوراتنا إلى دعم جهود التمكين والتمكين في العالم العربي ، وزيادة وصول العرب إلى المعرفة في جميع أنحاء المنطقة. يقع كل من منشوراتنا في مركز النظام البيئي الذي يغطيها ، ويبني مجتمعًا من المكونات المشاركة. نعتقد أن المحتوى الموثوق به والمنتج جيدًا هو حجر الأساس لعملنا ،
                            يقع مقر هيكل ميديا ​​في أبو ظبي ، الإمارات العربية المتحدة ، مع ممثلين في الرياض والقاهرة ولندن
                      </h3>
                        <hr />
                    </div>
                </div>
            </div>
        )
    }

}
export default About