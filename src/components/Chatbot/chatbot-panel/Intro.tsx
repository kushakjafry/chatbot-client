import React from "react";
import { ChatbotQuestionsProxy } from "../Chatbot.demo";

interface IntroProps {
  setShowIntro: (showIntro: boolean) => void;
  loadedModel: boolean;
}

function Intro({ setShowIntro, loadedModel }: IntroProps) {
  return (
    <>
      <div className="mb-7 w-full">
        Lifestory lets you record the moments of your life you would want to
        save as a blog. You can view all your recordings in the Lifestory
        session and see your all the events of your life that you have recorded
        and saved.You can choose to share this on the community to inspire
        millions of others too.
      </div>
      {loadedModel && (
        <div className="w-full flex justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
            onClick={() => {
              setShowIntro(false);
            }}
          >
            Start
          </button>
          <button className="">Back</button>
        </div>
      )}
    </>
  );
}

export default Intro;
