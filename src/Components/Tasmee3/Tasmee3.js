import { useEffect, useRef, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { diffChars, diffWords } from "diff";
import quran from "./quran_no_tashkeel.json";
import { useParams } from "react-router-dom";
import "./Tasmee3.css";

function Tasmee3() {
  let text1 = "";
  const { currentsurah, start, end } = useParams();
  for (let i = start - 1; i < end; ++i) {
    text1 += (i == start - 1 ? "" : " ") + quran[`${currentsurah}`][i].text;
  }

  const [text2, setText2] = useState("");
  const [stop, setStop] = useState(false);
  const [message, setMessage] = useState("");
  const { transcript, resetTranscript, listening } = useSpeechRecognition();
  let [diffResult, setDiff] = useState(null);

  function startListen() {
    SpeechRecognition.startListening({
      continuous: true,
      language: "ar-EG",
    });
    setStop(false);
  }

  useEffect(() => {
    setText2(transcript);
  }, [transcript]);
  function endListen() {
    SpeechRecognition.stopListening();

    resetTranscript();
    setDiff(diffWords(text1, text2));
    setStop(true);
  }

  return (
    <div className="mic-container">
      <p>Microphone: {listening ? "on" : "off"}</p>
      <button className="start-button" onClick={startListen}>
        ابدأ
      </button>
      <button className="stop-button" onClick={endListen}>
        توقف
      </button>

      <p className="transcript">{transcript}</p>

      {stop && (
        <div className="text-diff">
          {
            <div>
              {diffResult.map((difference, index) => (
                <span
                  key={index}
                  style={{
                    backgroundColor: difference.added
                      ? "red"
                      : difference.removed
                      ? "green"
                      : "transparent",
                    color:
                      difference.added || difference.removed
                        ? "white"
                        : "black",
                  }}
                >
                  {difference.value}
                </span>
              ))}
            </div>
          }
        </div>
      )}
    </div>
  );
}

export default Tasmee3;
