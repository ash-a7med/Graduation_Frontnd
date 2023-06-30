import React from "react";
import "./Landing.css";
import logo from "../../assets/logo.jpg";

function Landing() {
    return (
        <div>
        <div className="line" id="Home">
            <div className="side1">
            <h1>El-Kottab</h1>
            </div>
            <div className="side2">
            <img src={logo} width="500" alt="Logo" />
            </div>
        </div>
        <div>
            <section className="about" id="My Projects">
            <div className="content">
                <br />
                <br />
                <div className="title">
                <span>مرحبًا بك في النسخة الأولى من موقع الكتاب</span>
                <br />
                <span>
                    تم تصميم الموقع لمساعدتك أخي الكريم في حفظ ومراجعة القرآن الكريم
                </span>
                </div>
                <div className="boxes">
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
                    يسعدنا ان تراسلنا في حالة وجود اي اخطاء وسوف نحاول دائما ان
                    نحسن من موفعنا ومن خدماتنا
                    <h3>
                        <a href="mailto: abc@example.com">Gmail</a>
                    </h3>
                    </div>
                    <div className="title1">
                    <span>More Information</span>
                    </div>
                    <div className="content1">
                    الموقع يعتمد علي الذكاء الصناعي لذلك يوجد نسبة خطأ وارده نعتذر
                    عنها مقدما ونتبرأ منها امام الله عز وجل فقد بذلنا جهدنا في ان
                    يكون الموقع في افضل وادق صوره
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
