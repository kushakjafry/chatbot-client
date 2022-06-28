import React from "react";
import { pixelFriends } from "./constants";

function ChoosePixelFriend({ pixelFriendId, setPixelFriendId }: any) {
  return (
    <div className="min-h-full w-full flex flex-col justify-center items-center py-10">
      <div className="mb-4">Step 1: Select a face for your pixelfriend</div>
      <div className=" grid grid-cols-3 grid-rows-2 gap-4">
        {pixelFriends.map((image, id) => (
          <div
            className={`w-[300px] h-[200px] cursor-pointer relative ${
              pixelFriendId === id && "bg-white"
            }`}
            key={id}
            onClick={() => {
              console.log(id);
              setPixelFriendId(id);
            }}
          >
            <img
              src={`/model/${image}`}
              className="h-full w-full object-cover"
            />
            {pixelFriendId === id && (
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

export default ChoosePixelFriend;
