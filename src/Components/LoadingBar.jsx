import React from "react";

export default function LoadingBar({ loading }) {
  return (
    <>
      <div className="lodaing mt-[6px]">
        <div
          className={`${
            loading ? "sm:w-[384px] w-[300px] duration-[15s]" : "w-[0]"
          } h-[8px] bg-[#06acf9] rounded`}
        ></div>

        <div className={`${loading ? "text-[18px]" : "hidden"}`}>
          Loading...
        </div>
      </div>
    </>
  );
}
