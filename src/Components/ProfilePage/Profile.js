import React, { useState } from "react";
import "./Profile.css";

function Profile() {
    return (
        <div className="card">
        <div className="card_background_img"></div>
        <div className="card_profile_img"></div>
        <div className="user_details">
            <h3>User</h3>
            <br />
            <p>user@gmail.com</p>
        </div>
        <div className="card_count">
            <div className="count">
            <div className="fans">
                <p>الناتج</p>
                <h3>50 / 60</h3>
            </div>
            <div className="following">
                <p>المستوى</p>
                <h3>الأول</h3>
            </div>
            <div className="post">
                <p>المعدل العام</p>
                <h3>جيد جدا</h3>
            </div>
            </div>
            <div className="btn">العودة للصفحة الرئيسية</div>
        </div>
        </div>
    );
}

export default Profile;
