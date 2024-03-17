import React from "react";

export default function InputField({ inputRef }) {
  return (
    <>
      <input
        type="text"
        ref={inputRef}
        className="search-input w-[645px] h-[50px] bg-transparent border-none outline-none text-[18px] text-white pl-[35px] pr-[20px] placeholder:text-[#999]"
        placeholder="Describe what you want to see..."
      />
    </>
  );
}
