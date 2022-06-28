import React from "react";
import { languageList, voicesList } from "./constants";

function ChooseLanguage({ name, voice, language, setLanguage, setVoice }: any) {
  return (
    <div className="min-h-full w-full flex flex-col justify-center items-center py-10">
      <div className="mb-4">Step 4: Select language and a voice for {name}</div>
      <div className=" w-1/2 mt-4">
        <label htmlFor="language" className="block mb-2 text-sm text-gray-500">
          What language would you like to speak to {name} in?
        </label>
        <select
          value={language}
          onChange={(event) => {
            setLanguage(event.target.value);
          }}
          id="language"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
        >
          {languageList.map(({ language, language_code }) => (
            <option key={language} value={language_code}>
              {language}
            </option>
          ))}
        </select>
      </div>
      <div className=" w-1/2 mt-4">
        <label htmlFor="voice" className="block mb-2 text-sm text-gray-500">
          What accent and voice would you like {name} to talk in?
        </label>
        <select
          value={voice}
          onChange={(e) => setVoice(e.target.value)}
          id="voice"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
        >
          {voicesList.map((voiceFromList) => (
            <option key={voiceFromList} value={voiceFromList}>
              {voiceFromList}
            </option>
          ))}
        </select>
      </div>
      {voice && language && (
        <div className="mt-4 flex justify-center items-center cursor-pointer">
          <span className="mr-2">Test Voice</span>{" "}
          <span>
            <img src="/icons/speaker.svg" className="h-4 w-4 inline-flex" />{" "}
          </span>
        </div>
      )}
    </div>
  );
}

export default ChooseLanguage;
