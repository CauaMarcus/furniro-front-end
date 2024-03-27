import HomeBackground from "../images/background.png";
import { StaticImageData } from "next/image";

interface imageProps {
  src: string | StaticImageData;
  alt: string;
}

export const backgroundData = () => {
  {
    src: HomeBackground;
    alt: "Background";
  }
};
