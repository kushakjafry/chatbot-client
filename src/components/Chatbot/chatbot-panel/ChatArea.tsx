import React, { useEffect, useRef, useState } from "react";
import Chat from "./Chat";
import ChatHeader from "./ChatHeader";
import Intro from "./Intro";

function ChatArea({
  showIntro,
  questionText,
  setShowIntro,
  getQuestions,
  setQuestionText,
  loadedModel,
}: any) {
  const [loadingQuestions, setLoadingQuestions] = useState(!questionText);
  useEffect(() => {
    setLoadingQuestions(false);
  }, [questionText]);
  return (
    <>
      <div className=" h-16 pr-20 pt-10 ">
        <ChatHeader />
      </div>
      <div className=" h-full flex flex-col justify-center items-center text-white p-20 text-xl">
        {showIntro && (
          <Intro setShowIntro={setShowIntro} loadedModel={loadedModel} />
        )}
        {!showIntro && loadingQuestions && <div>Loading</div>}
        {!showIntro && !loadingQuestions && (
          <Chat
            questionText={questionText}
            getQuestions={getQuestions}
            setQuestionText={setQuestionText}
            setLoadingQuestions={setLoadingQuestions}
          />
        )}
      </div>
    </>
  );
}

export default ChatArea;
