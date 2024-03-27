// Images
import Account from "../images/account.png";
import Search from "../images/search.png";
import Favorites from "../images/favorites.png";
import Cart from "../images/cart.png";
// Types
import { StaticImageData } from "next/image";

interface imageProps {
  src: string | StaticImageData;
  alt: string;
}

export const buttons = [
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

export const images: imageProps[] = [
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
