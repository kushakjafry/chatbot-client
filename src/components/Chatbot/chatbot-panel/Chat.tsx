import React, { useEffect, useRef, useState } from "react";
import MaterialInput from "../../UI/MaterialInput";

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

function Chat({ questionText, getQuestions, setLoadingQuestions }: any) {
  const [answer, setAnswer] = useState("");
  const speechRecognitionRef = useRef(new window.webkitSpeechRecognition());
  useEffect(() => {
    const speechRecognition = speechRecognitionRef.current;
    speechRecognition.onresult = (e: any) => {
      const transcript = e.results[0][0].transcript;
      const speech = answer + " " + transcript;
      setAnswer(speech);
    };
  }, []);

  const handleAnswerChange = (event: any) => {
    setAnswer(event.target.value);
  };

  const handleEnterPress = (event: any) => {
    if (event.keyCode === 13) {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    setLoadingQuestions(true);
    getQuestions();
  };

  const handleMicClick = () => {
    const speechRecognition = speechRecognitionRef.current;
    speechRecognition.start();
  };
  return (
    <>
      <div className="w-4/5 mb-7">{questionText}</div>
      <div className="w-4/5 mb-7">
        <MaterialInput
          value={answer}
          onChange={handleAnswerChange}
          name="message"
          placeholder="Type Here. And Press enter to submit"
          onKeyDown={handleEnterPress}
          icon="/icons/mic.png"
          onIconClick={handleMicClick}
        />
      </div>
    </>
  );
}

export default Chat;
