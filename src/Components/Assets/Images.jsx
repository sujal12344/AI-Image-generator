import React from "react";

export default function Images({image_url, ai}) {
  return (
    <>
      <div
        className={`image w-[384px] ${
          image_url === "/" ? "h-[392px]" : "h-[392px]"
        } max-h-fit flex justify-between items-center flex-row rounded-[10px] bg-[#0c173e] border-[2px] border-[#181647] relative overflow-hidden`}
      >
        <img
          src={image_url === "/" ? ai : image_url}
          alt="picture"
          className="h-full w-full object-cover"
        />
        {/* <img
          src={image_url2 === "/" ? ai : image_url2}
          alt="picture"
          // className="hidden"
        /> */}
      </div>
    </>
  );
}
