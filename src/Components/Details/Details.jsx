import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import Suar from "./Surah.json";
import { createAudio, numbers } from "./DetailsService";

import { useParams } from "react-router-dom";

function Details({ surahs }) {
  const { currentSurah } = useParams();
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(1);

  let [num_t, setNum_t] = useState(1);

  function createAyat() {
    let ayat = surahs[currentSurah - 1].ayahs.map((aya) => (
      <span>
        {aya.text} {aya.verse}
      </span>
    ));

    return ayat;
  }

  return (
    <section class="signup">
      <div class="container">
        <select
          onChange={(event) => {
            setStart(event.target.value);
            setEnd(event.target.value);
          }}
          value={start}
        >
          {numbers(Suar[currentSurah].nAyah)}
        </select>

        <select
          onChange={(event) => {
            if (event.target.value >= start) setEnd(event.target.value);
          }}
          value={end}
        >
          {numbers(Suar[currentSurah].nAyah)}
        </select>
        <button
          onClick={() => {
            createAudio(currentSurah, start, end, num_t);
          }}
        >
          {" "}
          submit
        </button>
        <select
          onChange={(event) => {
            setNum_t(event.target.value);
          }}
          value={num_t}
        >
          {numbers(50)}
        </select>
      </div>
      <div>{createAyat()}</div>
    </section>
  );
}

export default Details;
