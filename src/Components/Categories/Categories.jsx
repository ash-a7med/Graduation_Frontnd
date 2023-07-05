import React from "react";
import "./Categories.css";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <div>
      <section className="cats py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-3">
              <Link to="/user/round1" className="item">
                <div>
                  <p>المحطة الأولي</p>
                  <p>جزء عم</p>
                </div>
                <p className="count">1</p>
              </Link>
            </div>
            <div className="col-md-12 mb-3">
              <div className="item">
                <div>
                  <i class="fa-solid fa-lock text-dark "></i>
                  <p>المحطة الثانية</p>
                  <p>من سورة تبارك إلى سورة ق</p>
                </div>
                <p className="count">2</p>
              </div>
            </div>
            <div className="col-md-12 mb-3">
              <div className="item">
                <div>
                  <i className="fa-solid fa-lock text-dark "></i>
                  <p>المحطة الثالثة</p>
                  <p>من سورة ق إلى سورة يس</p>
                </div>
                <p className="count">3</p>
              </div>
            </div>
            <div className="col-md-12 mb-3">
              <div className="item">
                <div>
                  <i className="fa-solid fa-lock text-dark "></i>
                  <p>المحطة الرابعة</p>
                  <p> سورة البقرة و سورة آل عمران</p>
                </div>
                <p className="count">4</p>
              </div>
            </div>
            <div className="col-md-12 mb-3">
              <div className="item">
                <div>
                  <i className="fa-solid fa-lock text-dark "></i>
                  <p>المحطة الخامسة</p>
                  <p> من سورة يس إلى سورة الكهف</p>
                </div>
                <p className="count">5</p>
              </div>
            </div>
            <div className="col-md-12 mb-3">
              <div className="item">
                <div>
                  <i className="fa-solid fa-lock text-dark "></i>
                  <p>المحطة السادسة</p>
                  <p> من سورة الكهف إلى سورة الأعراف</p>
                </div>
                <p className="count">6</p>
              </div>
            </div>
            <div className="col-md-12 mb-3">
              <div className="item">
                <div>
                  <i className="fa-solid fa-lock text-dark "></i>
                  <p>المحطة السابعة</p>
                  <p>من سورة الأعراف إلى سورة النساء</p>
                </div>
                <p className="count">7</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Categories;
