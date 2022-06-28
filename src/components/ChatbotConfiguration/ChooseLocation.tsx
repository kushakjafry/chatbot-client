import React from "react";
import { backgroundImages } from "./constants";

function ChooseLocation({ background, setBackground }: any) {
  return (
    <div className="min-h-full w-full flex flex-col justify-center items-center py-10">
      <div className="mb-4">
        Step 2: Select a background where you can chat with your pixelfriend
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        {backgroundImages.map((backgroundImage, id) => (
          <div
            className={`w-[300px] h-[200px] cursor-pointer relative ${
              background === id && "bg-white"
            }`}
            key={id}
            onClick={() => {
              setBackground(id);
            }}
          >
            <img
              src={`/background/${backgroundImage}`}
              className="h-full w-full object-cover"
            />
            {background === id && (
              <div className="absolute top-2 right-2">
                <img src="/icons/check.svg" className="h-6 w-6" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChooseLocation;
