import Cookies from "js-cookie";
import { useEffect, useRef, useState } from "react";
import Suar from "./Surah.json";
import { createAudio, numbers } from "./DetailsService";
import { useNavigate, useParams } from "react-router-dom";

function Details({ surahs }) {
  const audioRef = useRef(null);
  const navigate = useNavigate();
  const { currentSurah } = useParams();
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(1);
  let [num_t, setNum_t] = useState(1);
  let [num_a, setNum_a] = useState(1);

  async function playAudio(AyatAudio) {
    for (let t = 0; t < num_t; t++) {
      for (let i = 0; i < AyatAudio.length; i++) {
        audioRef.current = AyatAudio[i];

        for (let a = 0; a < num_a; a++) {
          audioRef.current.play();

          await new Promise((resolve) => {
            audioRef.current.onended = resolve;
          });
        }
      }
    }
  }

  function turnOnAudio() {
    let AyatAudio = createAudio(currentSurah, start, end);
    playAudio(AyatAudio);
  }

  function createAyatText() {
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
          {numbers(surahs[currentSurah - 1].numberOfAyahs)}
        </select>

        <select
          onChange={(event) => {
            if (event.target.value >= start) setEnd(event.target.value);
          }}
          value={end}
        >
          {numbers(surahs[currentSurah - 1].numberOfAyahs)}
        </select>
        <button
          onClick={() => {
            turnOnAudio();
          }}
          disabled={false}
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

        <select
          onChange={(event) => {
            setNum_a(event.target.value);
          }}
          value={num_a}
        >
          {numbers(50)}
        </select>
      </div>
      <div>{createAyatText()}</div>

      <button class="abtn" onClick={() => navigate(`/tasmee3`)}>
        تسميع
      </button>
    </section>
  );
}

export default Details;
