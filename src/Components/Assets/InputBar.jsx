import React from "react";
import InputField from "./InputField";
import GenerateBtn from "./GenerateBtn";

export default function InputBar({ inputRef, onGenerate }) {
  return (
    <>
      <div className="search-box flex h-[70px] sm:w-[800px] w-[400px] content-around items-center rounded-[50px] bg-[#0c1846] border-[2px] border-[#181647] ">
        <InputField inputRef={inputRef} />
        <GenerateBtn onGenerate={onGenerate} />
      </div>
    </>
  );
}
