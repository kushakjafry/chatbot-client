import React from "react";
import MaterialInput from "../UI/MaterialInput";
import { backgroundImages, pixelFriends } from "./constants";

function ChooseName({ background, pixelFriendId, name, setName }: any) {
  return (
    <div className="min-h-full w-full flex flex-col justify-center items-center py-10">
      <div className="mb-4">Step 3: Choose a name for your PixelFriend</div>
      <div
        className=" w-[300px] h-[200px] relative"
        style={{
          background: `url(/background/${backgroundImages[background]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img
          src={`/model/${pixelFriends[pixelFriendId]}`}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mt-5 w-[300px]">
        <MaterialInput
          name="name"
          value={name}
          placeholder="Type the name here"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default ChooseName;
