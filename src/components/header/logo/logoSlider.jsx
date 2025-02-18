"use client";
import { motion } from "framer-motion";

const logos = [
  "/image/BMW.png",
  "/image/lexus.png",
  "/image/Mercedes.png",
  "/image/Honda.png",
  "/image/Hyundai.png",
  "/image/Nissan.png",
  "/image/Toyota.png",
  "/image/Kia.png",
  "/image/Jeep.png",
  "/image/Land.png",
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
