import Header from "../Assets/Header";
import Images from "../Assets/Images";
import InputBar from "../Assets/InputBar";
import LoadingBar from "../Assets/LoadingBar";
import ai from "./ai.avif";
import { useState, useRef } from "react";
require("dotenv").config();

export default function ImageGenetor() {
  const [image_url, setImage_url] = useState("/");
  // const [image_url2, setImage_url2] = useState("/");
  let inputRef = useRef(null);
  let [loading, setLoading] = useState(false);

  document.onkeydown = function (e) {
    if (e.keyCode == 13) {
      imageGenerator();
    }
  };

  const imageGenerator = async () => {
    if (inputRef.current.value === "") {
      return;
    }
    setLoading(true);
    // console.log(inputRef.current.value);
    const response = await fetch(
      "https://api.openai.com/v1/images/generations",

      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.secret}`,
          "User-Agent": "Chrome",
        },
        body: JSON.stringify({
          prompt: `${inputRef.current.value}`,
          n: 1,
          size: "512x512",
        }),
      }
    );

    let data = await response.json();
    let data_array = data.data;
    // console.log(data);
    setImage_url(data_array[0].url);
    console.log(data_array[0].url);
    // setImage_url2(data_array[1].url);
    setLoading(false);
  };

  return (
    <>
      <div className="flex flex-col mt-[40px] mx-auto items-center gap-[30px] font-serif text-white">
        <Header />

        <div className="image-loading flex flex-col">
          <Images image_url={image_url} ai={ai} />
          <LoadingBar loading={loading} />
        </div>

        <InputBar inputRef={inputRef} />
      </div>
    </>
  );
}
