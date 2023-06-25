import { useState } from "react";
import forget_passwordfun from "./forget_passwordService";


function Forget_password() {
  const [email, setEmail] = useState("");
  const [result, setResult] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await forget_passwordfun(email);
    setResult(res);
  };

  return (
    <div className=" d-flex align-items-center">
    <div className="container" style={{height:"100vh"}}>
      <form className="login row justify-content-center align-items-center w-100 h-100" onSubmit={onSubmit}>
        {result !== "done" ? (
          <div className="col-md-8">
              <div className="form-group text-center mb-3">
              <label className="form-label">enter your email</label>
              <input
                id="email"
                type="email"
                placeholder=" البريد الالكتروني"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="text-center mb-3">
              <input
                type="submit"
                value="اعادة تعيين كلمة المرور"
                className="abtn"
              />
            </div>
            {result && <div>{result}</div>}
          </div>
        ) : (
          "link has been send to your email"
        )}
      </form>
      </div>
    </div>
  );
}

export default Forget_password;
