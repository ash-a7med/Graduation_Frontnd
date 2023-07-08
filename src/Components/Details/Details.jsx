import Cookies from "js-cookie";
import { useEffect, useRef, useState } from "react";
import Suar from "./Surah.json";
import { createAudio, numbers } from "./DetailsService";
import { useNavigate, useParams } from "react-router-dom";
import "../Details/Details.css";

const styles = {
  width: "700px",
  height: "auto",
  margin: "0 auto",
  marginTop: "40px",
};

function Details({ surahs }) {
  const audioRef = useRef(null);
  const navigate = useNavigate();
  const { currentSurah } = useParams();
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(1);
  let [num_t, setNum_t] = useState(1);
  let [num_a, setNum_a] = useState(1);
  let currentPos = useRef(0);
  const arabnum = {
    0: "٠",
    1: "١",
    2: "٢",
    3: "٣",
    4: "٤",
    5: "٥",
    6: "٦",
    7: "٧",
    8: "٨",
    9: "٩",
  };

  function convertToArabic(num) {
    let st = String(num).split("");
    st = st.map((ch) => arabnum[Number(ch)]);
    st = st.join("");
    return st;
  }

  async function playAudio(AyatAudio) {
    for (let t = 0; t < num_t; t++) {
      for (let i = 0; i < AyatAudio.length; i++) {
        audioRef.current = AyatAudio[i];
        currentPos = i + Number(start);
        console.log(currentPos);

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
    return (
      <div style={styles}>
        {surahs[currentSurah - 1].ayahs.map((aya, index) => (
          <text key={index}>
            {aya.text} ﴿{convertToArabic(index + Number(1))}﴾{" "}
          </text>
        ))}
      </div>
    );
  }

  return (
    <div className="container">
      <section class="details">
        <div class="details-container">
          <label>من</label>
          <select
            onChange={(event) => {
              setStart(event.target.value);
              setEnd(event.target.value);
            }}
            value={start}
          >
            {numbers(surahs[currentSurah - 1].numberOfAyahs)}
          </select>
          <label>الي</label>
          <select
            onChange={(event) => {
              if (event.target.value >= start) setEnd(event.target.value);
            }}
            value={end}
          >
            {numbers(surahs[currentSurah - 1].numberOfAyahs)}
          </select>

          <label>عدد مرات تكرار المقطع </label>
          <select
            onChange={(event) => {
              setNum_t(event.target.value);
            }}
            value={num_t}
          >
            {numbers(10)}
          </select>
          <label>عدد مرات تكرار الأية </label>
          <select
            onChange={(event) => {
              setNum_a(event.target.value);
            }}
            value={num_a}
          >
            {numbers(10)}
          </select>
        </div>
        <div className="button-container">
          <button
            onClick={() => {
              turnOnAudio();
            }}
            disabled={false}
          >
            استماع
          </button>
          <button
            onClick={() =>
              navigate(`/user/tasmee3/${currentSurah}/${start}/${end}`)
            }
          >
            تسميع
          </button>
        </div>
        <div className="surah-style">{createAyatText()}</div>
      </section>
    </div>
  );
}

export default Details;
