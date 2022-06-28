import React from "react";
import { useNavigate } from "react-router-dom";

function FinalStep({ name }: any) {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("chatbot", { replace: true });
  };
  return (
    <div className="min-h-1/2 max-w-[350px] flex flex-col">
      <h1 className="font-bold text-lg mb-6">Lets get you Started</h1>
      <p>You are about to meet your pixelfriend, {name}.</p>
      <br />
      <p>
        Audio and Video data will be kept secure and only used to analyse your
        emotions and body language throughout the conversation.
      </p>
      <br />

      <p>
        {" "}
        By clicking "Start" you are agreeing to our{" "}
        <a href="/privacy-policy" className="underline text-blue-500">
          Privacy Policy
        </a>
        .
      </p>
      <div className="mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
          onClick={handleStart}
        >
          START
        </button>
      </div>
    </div>
  );
}

export default FinalStep;
