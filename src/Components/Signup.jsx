import { useState } from "react";
import { Link } from "react-router-dom";
import signupfun from "../Services/signupAuth";

function Signup() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");
  const [signuperr, setSignuperr] = useState("");

  const onsubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signupfun(
        firstname + " " + lastname,
        email,
        pass,
        cpass
      );
      setSignuperr(res);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <section class="signup">
      <div class="container">
        <form class="login row" onSubmit={onsubmit}>
          <div class="col-md-4"></div>
          <div class="col-md-4">
            <div class="form-group text-center mb-3">
              <input
                type="text"
                placeholder="الاسم الاول "
                required
                name="Fname"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
              <i class="fa-regular fa-user"></i>
            </div>
            <div class="form-group text-center mb-3">
              <input
                type="text"
                placeholder="الاسم الاخير "
                required
                name="Lname"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
              <i class="fa-regular fa-user"></i>
            </div>
            <div class="form-group text-center mb-3">
              <input
                id="pass"
                type="password"
                placeholder="تعيين كلمة السر"
                required
                name="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
              <i class="fa-solid fa-lock"></i>
              <i id="iconpass" class="fa-solid fa-eye"></i>
            </div>
            <div class="form-group text-center mb-3">
              <input
                id="cpass"
                type="password"
                required
                placeholder="تأكيد كلمة السر"
                name="Conpassword"
                value={cpass}
                onChange={(e) => setCpass(e.target.value)}
              />
              <i class="fa-solid fa-lock"></i>
              <i id="iconcpass" class="fa-solid fa-eye"></i>
            </div>
            <div class="form-group text-center mb-3">
              <input
                type="email"
                required
                placeholder="البريد الالكتروني"
                name="mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="text-center mb-3">
              <input type="submit" value="انشاء حساب" class="abtn" />
            </div>
            {signuperr && (
              <div className="d-block text-center mb-2">{signuperr}</div>
            )}
            <Link to="/login" class="d-block text-center mb-2">
              تسجيل الدخول ... ؟
            </Link>
          </div>
          <div class="col-md-4"></div>
        </form>
      </div>
    </section>
  );
}

export default Signup;
