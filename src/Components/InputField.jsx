import React from "react";
import { useEffect } from "react";

export default function InputField({ inputRef }) {
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  return (
    <>
      <input
        type="text"
        ref={inputRef}
        className="search-input sm:w-[645px] w-[284px] h-[50px] bg-transparent border-none outline-none text-[18px] text-white sm:pl-[35px] pl-6 sm:pr-[20px] pr-1 placeholder:text-[#999] sm:placeholder:text-xl placeholder:text-lg"
        placeholder="Describe what you want to see..."
      />
    </>
  );
}
