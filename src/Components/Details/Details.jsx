import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import Suar from "./Surah.json";
import { createAudio, numbers } from "./DetailsService";

function Details() {
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(1);
  let [currentSurah, setCurrentSurah] = useState(1);
  let [num_t, setNum_t] = useState(1);
  const [num_a, setNum_a] = useState(1);

  useEffect(() => {
    setCurrentSurah(Cookies.get("currentsurah"));
  }, []);

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
        <button onClick={() => createAudio(currentSurah, start, end, num_t)}>
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
    </section>
  );
}

export default Details;
