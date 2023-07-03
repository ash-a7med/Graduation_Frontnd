import React, { useState } from "react";
import "./Profile.css";
import { Link } from "react-router-dom";

function Profile(user) {
  return (
    <div className="card">
      <div className="card_background_img"></div>
      <div className="card_profile_img"></div>
      <div className="user_details">
        <h3>{user.user.username}</h3>
        <br />
        <p>{user.user.email}</p>
      </div>
      <div className="card_count">
        <div className="count">
          <div className="fans">
            <p>النقاط</p>
            <h3>00</h3>
          </div>
          <div className="following">
            <p>المستوى</p>
            <h3>الأول</h3>
          </div>
          <div className="post">
            <p>المعدل العام</p>
            <h3>لم يحدد بعد</h3>
          </div>
        </div>
        <Link to="/">
          <div className="btn">العودة للصفحة الرئيسية</div>
        </Link>
      </div>
    </div>
  );
}

export default Profile;
