import Image from "next/image";
import FurnitureRoom from "../images/background.png";

const HomeBanner = () => {
  return (
    <div>
      <Image className="w-full h-full" src={FurnitureRoom} alt="Background" />
    </div>
  );
};
export default HomeBanner;
