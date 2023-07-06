import React from "react";
import "./Landing.css";
import book from '../../assets/book.png';
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";


function Landing() {
  const navigate = useNavigate();
  const enter = () => {
    const user = Cookies.get("user");
    if (user) {
      navigate("/user/categories");
    } else navigate("/login");
  };

  return (
    <div className="home-container">
      <div className="header">
        <div className="header-icon">
          <img src={book} height={40} alt="Book Icon"/>
        </div>
        <div className="side1">El-Kottab</div>
      </div>
      <div>
        <section className="about">
          <div className="content">
            <br />
            <br />
            <div className="title">
              <span>مرحبًا بك في النسخة الأولى من موقع الكتّاب</span>
              <br />
              <span>
                تم تصميم الموقع لمساعدتك أخي الكريم في حفظ ومراجعة القرآن الكريم
              </span>
            </div>
            <button className="buttonHover w-50 m-auto" onClick={enter}>
              دخول
            </button>

            <div className="boxes row">
              <div className="box">
                <div className="topic">
                  <p>السبع مراحل</p>
                </div>
                <p>
                  الموقع يستند إلى نظام السبع مراحل في الحفظ. حيث يتم تقسيم كتاب
                  الله إلى سبعة أقسام وتنتقل من قسم إلى آخر. مما يسهل عليك الحفظ
                  ويترك انطباعًا بالتقدم والتطور الدائم.
                </p>
              </div>
              <div className="box">
                <div className="topic">
                  <p>التكرار</p>
                </div>
                <p>
                  نعتمد في الحفظ على تكرار الآيات على مسمعك مع مراعاة أحكام
                  التجويد. حتى يستقر في عقلك بصورة صحيحة. ويمكنك التحكم في عدد
                  مرات التكرار والآيات.
                </p>
              </div>
              <div className="box">
                <div className="topic">
                  <p>التسميع</p>
                </div>
                <p>
                  بعد أن تنتهي من الحفظ يأتي دور التسميع. ويرتكز الموقع على نظام
                  التعرف على الكلام الذي يعمل بالذكاء الاصطناعي. حتى يتمكن من
                  تحديد الأخطاء التي تقع بها وإظهارها لك.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section className="contact" id="contact">
          <div className="content">
            <div className="input3">
              <div className="rightside1">
                <div className="title1">
                  <span> تواصل معنا </span>
                </div>
                <div className="content1">
                  يسعدنا ان تراسلنا في حالة وجود أي أخطاء وسوف نحاول دائما أن
                  نحسن من موفعنا ومن خدماتنا
                  <span>
                    <a href="mailto: abc@example.com"> gmail </a>
                  </span>
                </div>
                <div className="title1">
                  <span>More Information</span>
                </div>
                <div className="content1">
                  الموقع يعتمد على الذكاء الصناعي لذلك يوجد نسبة خطأ وارده نعتذر
                  عنها مقدما ونتبرأ منها أمام الله عز وجل فقد بذلنا جهدنا في أن
                  يكون الموقع في أفضل وأدق صورة
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Landing;
