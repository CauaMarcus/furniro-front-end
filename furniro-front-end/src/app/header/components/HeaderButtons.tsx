import React from "react";
import Account from "../images/account.png";
import Search from "../images/search.png";
import Favorites from "../images/favorites.png";
import Cart from "../images/cart.png";
import Image, { StaticImageData } from "next/image";

interface imageProps {
  src: string | StaticImageData;
  alt: string;
}

const HeaderButtons = () => {
  const buttons = [
    {
      name: "Home",
      alt: "Home",
    },
    {
      name: "Shop",
      alt: "Shop",
    },
    {
      name: "About",
      alt: "About",
    },
    {
      name: "Contact",
      alt: "Contact",
    },
  ];
  const images: imageProps[] = [
    {
      src: Account,
      alt: "Account",
    },
    {
      src: Search,
      alt: "Search",
    },
    {
      src: Favorites,
      alt: "Favorites",
    },
    {
      src: Cart,
      alt: "Cart",
    },
  ];
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
      <div className="flex gap-4">
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
