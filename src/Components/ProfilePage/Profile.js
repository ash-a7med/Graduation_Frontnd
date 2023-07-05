import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import "./Profile.css";
import { Link } from "react-router-dom";

function Profile() {
  const [user, setUser] = useState("");

  useEffect(() => {
    const user = Cookies.get("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  return (
    <div className="card">
      <div className="card_background_img"></div>
      <div className="card_profile_img"></div>
      <div className="user_details">
        <h3>{user.username}</h3>
        <br />
        <p>{user.email}</p>
      </div>
      <div className="card_count">
        <div className="count">
          <div className="fans">
            <p>النقاط</p>
            <h3 className="a3">00</h3>
          </div>
          <div className="following">
            <p>المستوى</p>
            <h3 className="a3">الأول</h3>
          </div>
          <div className="post">
            <p>المعدل العام</p>
            <h3 className="a3">لم يحدد بعد</h3>
          </div>
        </div>
        <Link to="/">
          <div className="abtn">العودة للصفحة الرئيسية</div>
        </Link>
      </div>
    </div>
  );
}

export default Profile;
