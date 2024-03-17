import React from "react";

export default function LoadingBar({loading}) {
  return (
    <>
      <div className="lodaing">
        <div
          className={`${
            loading ? "w-[384px] duration-[15s]" : "w-[0]"
          } h-[8px] bg-[#06acf9] rounded`}
        ></div>

        <div className={`${loading ? "text-[18px]" : "hidden"}`}>
          Loading...
        </div>
      </div>
    </>
  );
}
