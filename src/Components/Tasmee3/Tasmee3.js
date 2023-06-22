import { useEffect, useRef, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { diffChars } from "diff";

function Tasmee3() {
  const [text1, setText1] = useState("عم يتساءلون");
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
    setDiff(diffChars(text1, text2));
    setStop(true);
  }

  return (
    <div>
      <p>Microphone: {listening ? "on" : "off"}</p>
      <button onClick={startListen}>Start</button>
      <button onClick={endListen}>Stop</button>

      <p>{transcript}</p>

      {stop && (
        <div className="text-diff">
          {
            <div>
              {diffResult.map((difference, index) => (
                <span
                  key={index}
                  style={{
                    backgroundColor: difference.added
                      ? "green"
                      : difference.removed
                      ? "red"
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
