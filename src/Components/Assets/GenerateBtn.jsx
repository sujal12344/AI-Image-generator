import React from 'react';
import imageGenerator from '../ImageGenerator/imageGenerator';

export default function GenerateBtn() {
  return (
    <>
    <div
            className="generatre-btn flex justify-center items-center w-[148px] h-[58px] text-[20px] rounded-[50px] bg-[#06acf9] cursor-pointer"
            onClick={() => {
              imageGenerator();
            }}
          >
            Generate
          </div>
    </>
  );
}
