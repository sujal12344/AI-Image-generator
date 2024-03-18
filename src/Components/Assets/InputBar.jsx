import React from "react";
import InputField from "./InputField";
import GenerateBtn from "./GenerateBtn";

export default function InputBar({ inputRef }) {
  return (
    <>
      <div className="search-box flex h-[70px] sm:w-[800px] w-[400px] content-around items-center rounded-[50px] bg-[#0c173e] border-[2px] border-[#181647] ">
        <InputField inputRef={inputRef} />
        <GenerateBtn />
      </div>
    </>
  );
}
