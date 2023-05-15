import React from 'react'
import { Link } from 'react-router-dom'
function Signup() {
  return (
    <section class="signup">
            <div class="container">
            <form class="login row">
                <div class="col-md-4"></div>
                <div class="col-md-4">
                    <div class="form-group text-center mb-3">
                        <input type="text" required placeholder="الاسم الاول " name="Fname"/>
                        <i class="fa-regular fa-user"></i>
                    </div>
                    <div class="form-group text-center mb-3">
                        <input type="text" required placeholder="الاسم الاخير " name="Lname"/>
                        <i class="fa-regular fa-user"></i>
                    </div>
                    <div class="form-group text-center mb-3">
                        <input 
                        id="pass"
                        type="password" required placeholder="تعيين كلمة السر" name="password" />
                        <i class="fa-solid fa-lock"></i>
                        <i 
                        id="iconpass"
                        class="fa-solid fa-eye"></i>
                    </div>
                    <div class="form-group text-center mb-3">
                        <input 
                        id="cpass"
                        type="password" required placeholder="تأكيد كلمة السر" name="Conpassword" />
                        <i class="fa-solid fa-lock"></i>
                        <i 
                        id="iconcpass"
                        class="fa-solid fa-eye"></i>
                    </div>
                    <div class="form-group text-center mb-3">
                        <input 
                        type="email" required placeholder="الايميل الالكتروني" name="mail" />
                    
                    </div>
                    <div class="text-center mb-3">
                        <Link 
                        class="abtn"
                        to="/">
                            انشاء حساب
                        </Link>
                    </div>
                    <Link to="/login" class="d-block text-center mb-2">
                        تسجيل الدخول ... ؟
                    </Link>
                </div>
                <div class="col-md-4"></div> 
            </form>
        </div>
    </section>
  )
}

export default Signup