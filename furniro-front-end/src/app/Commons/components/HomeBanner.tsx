import Image from "next/image";
import FurnitureRoom from "../images/background.png";
import Link from "next/link";

const HomeBanner = () => {
  return (
    <div className="relative w-full">
      <Image className="w-full" src={FurnitureRoom} alt="Background" />
      <div
        className="absolute top-[225px] right-[50px]  box-border
       bg-lightOrange border-lightOrange border-4"
      >
        <div className="mx-10 my-8 w-96 flex flex-col gap-4 text-zinc-800">
          <p className="text-xs font-semibold w-96">New Arrival</p>
          <p className="w-1/3 font-bold text-beige text-4xl">
            Discover Our New Collection
          </p>
          <p className="text-xs w-96">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit, vitae
            deleniti mollitia magni.
          </p>
          <div
            className="mx-8 flex justify-center items-center text-white
          font-bold text-xs box-border bg-beige border-beige border-4 w-36 h-10"
          >
            <Link href={"*"}>BUY NOW</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeBanner;
