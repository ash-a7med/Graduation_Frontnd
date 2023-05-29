import React from "react";
import { Link } from "react-router-dom";
import Suar from "./Surah.json";
import Cookies from "js-cookie";

function Round1() {
  function CreateSuar() {
    let options = [];
    for (let i = 78; i <= 114; ++i) {
      options.push(
        <Link
          to="/details"
          onClick={() => {
            Cookies.set("currentsurah", i);
          }}
        >
          <div className="words">
            <h2 class="category_name">{Suar[i].name}</h2>
          </div>
        </Link>
      );
    }
    return options;
  }

  return (
    <section class="cats py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6 mb-3">{CreateSuar()}</div>
        </div>
      </div>
    </section>
  );
}

export default Round1;
