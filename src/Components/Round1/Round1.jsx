import React from "react";
import { useNavigate } from "react-router-dom";

function Round1({ surahs, setSurahs }) {
  const navigate = useNavigate();
  const suars = surahs.filter((surah) => surah.number >= 78);
  const suarsItem = suars.map((surah) => {
    return (
      <div
        key={surah.number}
        className="cursor-pointer"
        onClick={() => navigate(`/user/details/${surah.number}`)}
      >
        <div className="words">
          <h2 className="category_name">{surah.name}</h2>
        </div>
      </div>
    );
  });
  const suarsItemLength = Math.floor(suarsItem.length / 2);
  const firstHalf = suarsItem.slice(0, suarsItemLength);
  const secondHalf = suarsItem.slice(suarsItemLength);
  return (
    <div className="cats py-5">
      <div className="container" style={{ marginLeft: "80px" }}>
        <div className="row">
          {suarsItem.map((surah) => {
            return <div style={{ margin: "0px 20px" }}>{surah}</div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Round1;
