import React from "react";
import { useNavigate } from "react-router-dom";

function ChatHeader() {
  const navigate = useNavigate();
  const handleEndClick = () => {
    navigate("/chatbot");
  };
  return (
    <div className="flex flex-row justify-end text-white">
      <div className=" mr-4">Record Conversation</div> |
      <div className=" ml-4 cursor-pointer" onClick={handleEndClick}>
        End Conversation
      </div>
    </div>
  );
}

export default ChatHeader;
