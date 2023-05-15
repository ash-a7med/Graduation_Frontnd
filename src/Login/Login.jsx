import React from 'react'
import { Link } from 'react-router-dom'
import img1 from "../assets/msg857782380-96632.jpg";
function Login() {
    return (
        <>
            <header className="login mb-5">
                <div className="text-center">
                
                    <img src={img1} alt="logo" height={300} />
                </div>
            </header>
            <div className="container">
                <form className="login row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <div className="form-group text-center mb-3">
                            <input type="text" placeholder="اسم المستخدم" />
                            <i className="fa-regular fa-user"></i>
                        </div>
                        <div className="form-group text-center mb-3">
                            <input
                                id="pass"
                                type="password" placeholder="كلمة السر" />
                            <i className="fa-solid fa-lock"></i>
                            <i
                                id="iconpass"
                                className="fa-solid fa-eye"></i>
                        </div>
                        <div className="text-center mb-3">
                            <Link
                                className="abtn"
                                to="/categories">
                                تسجيل الدخول
                            </Link>
                        </div>
                        <Link to="" className="d-block text-center mb-2">
                            نسيت كلمة السر ... ؟
                        </Link>
                        <Link to="/Signup" className="d-block text-center mb-2">
                            مستخدم جديد ... ؟
                        </Link>
                    </div>
                    <div className="col-md-4"></div>
                </form>
            </div>
    </>
)
}

export default Login