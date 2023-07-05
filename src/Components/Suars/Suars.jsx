import React, { Suspense } from "react";
import { useNavigate } from "react-router-dom";

function Suars({ surahs }) {
  const naviagte = useNavigate();
  const suars = surahs.map((surah) => {
    return (
      <div key={surah.number} className="cursor-pointer">
        <div
          className="words"
          onClick={() => naviagte(`/user/tafseer/${surah.number}`)}
        >
          <h2 className="category_name">{surah.name}</h2>
        </div>
      </div>
    );
  });

  const suarsItemLength = Math.floor(suars.length / 2);
  const firstHalf = suars.slice(0, suarsItemLength);
  const secondHalf = suars.slice(suarsItemLength);
  return (
    <div className="cats py-5">
      <div className="container">
        <h4 className="text-center">{" تفسير القرأن الكريم "}</h4>
        <Suspense fallback={<div>Loading...</div>}>
          <div className="row">
            <div className="col-md-6 ">{firstHalf}</div>
            <div className="col-md-6 ">{secondHalf}</div>
          </div>
        </Suspense>
      </div>
    </div>
  );
}

export default Suars;
