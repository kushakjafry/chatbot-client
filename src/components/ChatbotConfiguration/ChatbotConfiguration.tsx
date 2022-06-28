import React, { useState } from "react";
import ChooseLanguage from "./ChooseLanguage";
import ChooseLocation from "./ChooseLocation";
import ChooseName from "./ChooseName";
import ChoosePixelFriend from "./ChoosePixelFriend";
import { stepHeadings } from "./constants";
import FinalStep from "./FinalStep";
import Tab from "./Tab";

function ChatbotConfiguration() {
  const [step, setStep] = useState(1);
  const [pixelFriendId, setPixelFriendId] = useState<number | undefined>(
    undefined
  );
  const [background, setBackground] = useState<number | undefined>(undefined);
  const [name, setName] = useState<string | undefined>(undefined);
  const [language, setLanguage] = useState<string | undefined>(undefined);
  const [voice, setVoice] = useState<string | undefined>(undefined);

  const mapStepToState = [pixelFriendId, background, name, language && voice];
  const disabled =
    step < 5 &&
    (mapStepToState[step - 1] === undefined ||
      (typeof mapStepToState[step - 1] === "string" &&
        (mapStepToState[step - 1]! as string).length === 0));

  const handleNextClick = () => {
    setStep(step + 1);
  };
  return (
    <div className="container mx-auto min-h-full flex flex-col justify-center items-center py-16">
      {step < 5 && (
        <>
          <h1 className="font-medium leading-tight text-4xl mb-6">
            {stepHeadings[step - 1]}
          </h1>
          <div className="flex items-center justify-around">
            <Tab step={1} text="Friend" active={step === 1} />
            <Tab step={2} text="Location" active={step === 2} />
            <Tab step={3} text="Name" active={step === 3} />
            <Tab step={4} text="Language" active={step === 4} />
          </div>
        </>
      )}
      {step == 1 && (
        <ChoosePixelFriend
          pixelFriendId={pixelFriendId}
          setPixelFriendId={setPixelFriendId}
        />
      )}
      {step == 2 && (
        <ChooseLocation background={background} setBackground={setBackground} />
      )}
      {step == 3 && (
        <ChooseName
          background={background}
          pixelFriendId={pixelFriendId}
          name={name}
          setName={setName}
        />
      )}
      {step == 4 && (
        <ChooseLanguage
          name={name}
          language={language}
          voice={voice}
          setVoice={setVoice}
          setLanguage={setLanguage}
        />
      )}
      {step === 5 && <FinalStep name={name} />}
      <div className="mt-6 w-full flex justify-between">
        <button
          className="text-black border border-solid py-2 px-4 mr-3 rounded"
          disabled={step == 1}
          onClick={() => {
            setStep(step - 1);
          }}
        >
          Back
        </button>
        {step < 5 && (
          <button
            className={`${
              disabled ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-700"
            } text-white py-2 px-4 rounded`}
            onClick={handleNextClick}
            disabled={disabled}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default ChatbotConfiguration;
