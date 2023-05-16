import React, { useState } from "react";
import { useParams } from "react-router-dom";
import reset_passwordfun from "../Services/rest_passwordService";

function Reset_password() {
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");
  const { id, token } = useParams();
  const [reseterr, setReseterr] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await reset_passwordfun(pass, cpass, id, token);
    setReseterr(res);
  };

  return (
    <div class="container">
      <form className="login row" onSubmit={onSubmit}>
        <div className="col-md-4"></div>

        <div className="col-md-4">
          <div className="form-group text-center mb-3">
            <input
              id="pass"
              type="password"
              placeholder="كلمة المرور "
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <div className="form-group text-center mb-3">
            <input
              id="pass"
              type="password"
              placeholder="تأكيد كلمة المرور "
              value={cpass}
              onChange={(e) => setCpass(e.target.value)}
            />
          </div>
          <div className="text-center mb-3">
            <input
              type="submit"
              value="اعادة تعيين كلمة المرور"
              className="abtn"
            />
          </div>
          {reseterr && <div>{reseterr}</div>}
        </div>
      </form>
    </div>
  );
}

export default Reset_password;
