import React, { useEffect , useState, useRef } from 'react';
import hark from 'hark'; // Detect silence
import toWav from 'audiobuffer-to-wav';
import { diffChars ,diffWords } from "diff";
import quran from "./quran.json";
import { useParams } from "react-router-dom";
import "./Daqeeq.css";

const Daqeeq = () => {

    const constraints = {
        audio: {
            channelCount: 1,
            noiseSuppression: true,
        }
    };

    const { currentsurah, start, end } = useParams();
    let [diffResult, setDiff] = useState(null);
    const [audioBlob, setAudioBlob] = useState(null);
    const [isRecording, setIsRecording] = useState(false);
    const mediaRecorderRef = useRef(null);
    const silenceTimeoutRef = useRef(null);
    const [transcript, setTranscript] = useState('');
    let text = ""
    for (let i = start - 1; i < end; ++i) {
        text += (i == start - 1 ? "" : " ") + quran[`${currentsurah}`][i].text; //text is the original Quranic text
    }

    const handleAudioRecording = async () => {
    // Record audio using the MediaRecorder API
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    const mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/webm;codecs=opus' });
    mediaRecorderRef.current = mediaRecorder;
    const chunks = [];


    mediaRecorder.addEventListener('dataavailable', (event) => {
      chunks.push(event.data);
    });

    mediaRecorder.start();
    setIsRecording(true);

    // Detect silence
    const speechEvents = hark(stream, { threshold: -65 });
    speechEvents.on('stopped_speaking', () => {
      silenceTimeoutRef.current = setTimeout(() => {
        mediaRecorder.stop();
        stream.getTracks().forEach((track) => track.stop());
      }, 2000); // 2 seconds of silence
    });
    speechEvents.on('speaking', () => {
      clearTimeout(silenceTimeoutRef.current);
    });

    return new Promise((resolve) => {
      mediaRecorder.addEventListener('stop', () => {
        setIsRecording(false);
        const blob = new Blob(chunks, { type: 'audio/webm;codecs=opus' });
        resolve(blob);
      });
    });
  };

  const convertBlobToWav = async (blob) => {
    // Read the blob as an ArrayBuffer
    const arrayBuffer = await blob.arrayBuffer();

    // Decode the audio data
    const audioContext = new AudioContext();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

    // Convert the audio data to WAV format
    const wavBuffer = toWav(audioBuffer);

    const wavBlob = new Blob([wavBuffer], { type: 'audio/wav' });
    return wavBlob;
  };

  const handleRecordClick = async () => {
    if (isRecording) {
      // Stop recording
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream.getTracks().forEach((track) => track.stop());
      clearTimeout(silenceTimeoutRef.current);
    } else {
      // start Recording audio
      const recordedBlob = await handleAudioRecording();

      // Convert recorded audio to WAV format
      const wavBlob = await convertBlobToWav(recordedBlob);
      
      // Update component state with the WAV audio blob
      setAudioBlob(wavBlob);

    //   await handleTranscribeAudio();
    }
    
  };

  //now wavBlob has the audio we need to send to the api

  const handleTranscribeAudio = async () => {
    if (!audioBlob) return;

    const formData = new FormData();
    formData.append('audio', audioBlob, 'recording.wav');

    try {
      const response = await fetch('http://localhost:3300/api/audio', { //change this to URL if we upload model to a server
        method: 'POST',
        body: formData,
      });

      const data = await response.text();
      setTranscript(data);

      //compare the transcript with the original text
      let diff = diffWords(text, data);
      setDiff(diff);
    } catch (error) {
      console.error('Error transcribing audio:', error);
    }

  };

  return (
    <div className="mic-container">
      <p>Microphone: {isRecording ? "on" : "off"}</p>
      <button className={!isRecording ? "start-button":"stop-button"} onClick={handleRecordClick}> {!isRecording ? 'سجل': 'توقف'}</button>
        <button className="transcribe-button" onClick={handleTranscribeAudio}>التحقق من التسميع</button>
      <p className="transcript">{transcript}</p>

      { diffResult &&
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
      }
    </div>
  );
}
export default Daqeeq;