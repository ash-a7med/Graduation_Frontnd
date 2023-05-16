import { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/msg857782380-96632.jpg";
import loginfun from "../Services/loginAuth";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loginerr, setLoginerr] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginfun(email, pass);
      setLoginerr(res);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <header className="login mb-5">
        <div className="text-center">
          <img src={img1} alt="logo" height={300} />
        </div>
      </header>
      <div className="container">
        <form className="login row" onSubmit={onSubmit}>
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="form-group text-center mb-3">
              <input
                type="text"
                placeholder=" البريد الالكتروني"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <i className="fa-regular fa-user"></i>
            </div>
            <div className="form-group text-center mb-3">
              <input
                id="pass"
                type="password"
                placeholder="كلمة السر"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />

              <i className="fa-solid fa-lock"></i>
              <i id="iconpass" className="fa-solid fa-eye"></i>
            </div>
            <div className="text-center mb-3">
              <input
                type="submit"
                value="تسجيل الدخول"
                className="abtn"
                to="/categories"
              />
            </div>
            {loginerr && (
              <div className="d-block text-center mb-2">{loginerr}</div>
            )}
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
  );
}

export default Login;
