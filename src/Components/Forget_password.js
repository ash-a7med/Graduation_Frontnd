import { useState } from "react";
import forget_passwordfun from "../Services/forget_passwordService";

function Forget_password() {
  const [email, setEmail] = useState("");
  const [result, setResult] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await forget_passwordfun(email);
    setResult(res);
  };

  return (
    <div className="container">
      <form className="login row" onSubmit={onSubmit}>
        <div className="col-md-4"></div>
        {result !== "done" ? (
          <div className="col-md-4">
            <div className="form-group text-center mb-3">
              <label>enter your email</label>
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
  );
}

export default Forget_password;
