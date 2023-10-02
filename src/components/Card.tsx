import { title } from "process";
import React from "react";
interface CardProps {
  title: string;
  desc: string;
  src: string;
}
const Card: React.FC<CardProps> = ({ src, desc, title }) => {
  return (
    <div className=" w-full relative  max-h-[400px] h-[250px] md:h-[400px] bg-[hsl(280deg,40%,calc(100%_-_var(--abs-offset)_*_50%))] text-gray-400  transition-all duration-[0.3s] ease-[ease-out]  rounded-2xl">
      <img src={src} className="w-full h-full object-fill  rounded-2xl" />
      <div className="absolute p-4 bg-gradient-to-t from-black/70 from-30% via-black/60  bottom-0 z-10">
        <p className="text-white text-lg font-bold">{title}</p>
        <p className="text-white text-sm opacity-75 hidden md:block">{desc}</p>
        <p className="text-white text-sm opacity-75 md:hidden">{desc.substring(0,100)}...</p>
      </div>
    </div>
  );
};

export default Card;
