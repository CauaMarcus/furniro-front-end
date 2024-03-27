import React from "react";
import { buttons, images } from "../data/HeaderData";
import Image from "next/image";

const HeaderButtons = () => {
  return (
    <div className="mx-6 w-full flex text-black justify-between items-center">
      <div className="text-black font-bold text-2xl">
        <h1>Furniro</h1>
      </div>
      <div className="flex gap-4">
        {buttons.map((button, index) => (
          <button key={index}>{button.name}</button>
        ))}
      </div>
      <div className=" flex gap-4">
        {images.map((image, index) => (
          <button key={index}>
            <Image className="size-6" src={image.src} alt={image.alt} />
          </button>
        ))}
      </div>
    </div>
  );
};
export default HeaderButtons;
