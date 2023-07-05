import Cookies from "js-cookie";
import { useEffect, useRef, useState } from "react";
import Suar from "./Surah.json";
import { createAudio, numbers } from "./DetailsService";
import { useNavigate, useParams } from "react-router-dom";
import "../Details/Details.css";

const styles = {
  container: {
    flex: 1,
  },
  scroll: {
    flex: 1,
    padding: 7,
  },
  surahPage: {
    flex: 1,
    marginTop: 15,
    textAlign: "justify",
  },

  ayat: {
    flex: 1,

    fontSize: 30,
  },

  number: {
    fontSize: 18,
  },
};

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
    return (
      <safeAreaView style={styles.container}>
        <divider
          orientation="vertical"
          width={5}
          style={{ borderBottomColor: "#545353" }}
        />

        <text style={styles.surahPage} adjustsFontSizeToFit>
          {surahs[currentSurah - 1].ayahs.map((aya, index) => (
            <text key={index} allowFontScaling={false} selectable={true}>
              <text selectable={true} style={styles.ayat}>
                {aya.text}
              </text>
            </text>
          ))}
        </text>
      </safeAreaView>
    );
  }

  return (
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
          {numbers(50)}
        </select>
      </div>
      <div className="button-container">
        <button
          onClick={() => {
            turnOnAudio();
          }}
          disabled={false}
        >
          {" "}
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
      <div>{createAyatText()}</div>
    </section>
  );
}

export default Details;
