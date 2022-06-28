import React from "react";
import "./MaterialInput.css";

interface MaterialInputProps {
  value: string;
  onChange: (event: any) => void;
  placeholder?: string;
  name: string;
  onKeyDown?: (event: any) => void;
  icon?: string;
  onIconClick?: () => void;
}

function MaterialInput({
  value,
  onChange,
  placeholder = "",
  name,
  onKeyDown,
  icon,
  onIconClick,
}: MaterialInputProps) {
  return (
    <div className="relative border-b-2 focus-within:border-indigo-200 w-full">
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        className="block w-full appearance-none focus:outline-none bg-transparent pr-6"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />

      {icon && (
        <div
          className="absolute top-0 right-0 text-white"
          onClick={onIconClick}
        >
          <img src={icon} className="" />
        </div>
      )}

      {/* <label className="absolute top-0 duration-300 origin-0">Username</label> */}
    </div>
  );
}

export default MaterialInput;
