import Header from "./Header";
import Images from "./Images";
import InputBar from "./InputBar";
import LoadingBar from "./LoadingBar";
import ai from "../Images/ai.avif";
import { useState, useRef } from "react";

export default function ImageGenerator() {
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

    const response = await fetch(
      "https://api.openai.com/v1/images/generations",

      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SECRET_KEY}`,
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
      <div className="flex flex-col mt-[40px] mx-auto items-center gap-[30px] font-serif text-white text-center h-screen max-h-screen">
        <Header />

        <div className="image-loading flex flex-col mt-5 mb-12 sm:mb-0">
          <Images image_url={image_url} ai={ai} />
          <LoadingBar loading={loading} />
        </div>

        <InputBar inputRef={inputRef} onGenerate={imageGenerator} />
      </div>
    </>
  );
}
