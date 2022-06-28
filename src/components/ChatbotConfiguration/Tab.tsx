import React from "react";

function Tab({
  step,
  text,
  active = false,
}: {
  step: number;
  text: string;
  active?: boolean;
}) {
  return (
    <div
      className="md:w-[200px] py-3 px-7 bg-white mx-3 md:mx-7 rounded-lg"
      style={active ? { boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" } : {}}
    >
      <span className="px-2 rounded-full bg-gray-300 mr-3">{step}</span>
      <span className="">{text}</span>
    </div>
  );
}

export default Tab;
