"use client";
import { motion } from "framer-motion";

const logos = [
  "/image/logos/BMW.png",
  "/image/logos/lexus.png",
  "/image/logos/Mercedes.png",
  "/image/logos/Honda.png",
  "/image/logos/Hyundai.png",
  "/image/logos/Nissan.png",
  "/image/logos/Toyota.png",
  "/image/logos/Kia.png",
  "/image/logos/Jeep.png",
  "/image/logos/Land.png",
];

export const LogoSlider = () => {
  return (
    <div className="w-full flex justify-evenly bg-gray-100 py-4 mt-5 ">
      {logos.map((logo, index) => (
        <img
          key={index}
          src={logo}
          alt="logo"
          className="w-20 gap-4  opacity-50 hover:opacity-100 transition-opacity"
        />
      ))}
    </div>
  );
};
