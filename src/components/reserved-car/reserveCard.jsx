import React from "react";
import { Button } from "@/components/ui/button";

const Data = [
  {
    src: "/svg/reservedCar/benz.svg",
    name: "بنز e350 اجاره",
    model: "مدل:2016",
    date: "از  ۱ تا ۳۰ روز:",
    datePrice: "۸,۵۰۰,۰۰۰",
    dayli: "روزانه",
    monthly: "ماهانه",
    priceTitle: "مبلغ ضمانت:",
    price: "۸۰ میلیون تومان",
  },
  {
    src: "/svg/reservedCar/land.svg",
    name: "اجاره لندکروز",
    model: "مدل:2016",
    date: "از  ۱ تا ۳۰ روز:",
    datePrice: "۸,۵۰۰,۰۰۰",
    dayli: "روزانه",
    monthly: "ماهانه",
    priceTitle: "مبلغ ضمانت:",
    price: "۸۰ میلیون تومان",
  },
  {
    src: "/svg/reservedCar/jenesis.svg",
    name: "اجاره جنسیس کوپه",
    model: "مدل:2016",
    date: "از  ۱ تا ۳۰ روز:",
    datePrice: "۸,۵۰۰,۰۰۰",
    dayli: "روزانه",
    monthly: "ماهانه",
    priceTitle: "مبلغ ضمانت:",
    price: "۸۰ میلیون تومان",
  },
  {
    src: "/svg/reservedCar/bmw.svg",
    name: "اجاره بی ام او",
    model: "مدل:2016",
    date: "از  ۱ تا ۳۰ روز:",
    datePrice: "۸,۵۰۰,۰۰۰",
    dayli: "روزانه",
    monthly: "ماهانه",
    priceTitle: "مبلغ ضمانت:",
    price: "۸۰ میلیون تومان",
  },
  {
    src: "/svg/reservedCar/tucsan.svg",
    name: "اجاره هیوندای توسان",
    model: "مدل:2016",
    date: "از  ۱ تا ۳۰ روز:",
    datePrice: "۸,۵۰۰,۰۰۰",
    dayli: "روزانه",
    monthly: "ماهانه",
    priceTitle: "مبلغ ضمانت:",
    price: "۸۰ میلیون تومان",
  },
  {
    src: "/svg/reservedCar/maserati.svg",
    name: "اجاره مازراتی گرندکوپه",
    model: "مدل:2016",
    date: "از  ۱ تا ۳۰ روز:",
    datePrice: "۸,۵۰۰,۰۰۰",
    dayli: "روزانه",
    monthly: "ماهانه",
    priceTitle: "مبلغ ضمانت:",
    price: "۸۰ میلیون تومان",
  },
];

export const ReserveCard = () => {
  return (
    <div className="grid grid-cols-3 gap-5 place-items-center">
      {Data.map((item, index) => (
        <div key={index} className="rounded-xl border-2 border-gray-200 p-6">
          <div>
            <img src={item.src} alt={item.name} />
          </div>
          <div className="flex flex-col text-xl font-bold">
            {item.name}
            <span className="text-base font-normal text-gray-400">
              {item.model}
            </span>
          </div>
          <div className="flex justify-between text-lg font-normal text-gray-400 gap-1">
            {item.date}
            <span className="text-lg font-bold ml-[8rem] text-blue-600">
              {item.datePrice}
            </span>
            <span>{item.dayli}</span>
          </div>
          <div className="flex justify-between mt-5 mb-14 text-lg font-normal text-gray-400 gap-1">
            {item.date}
            <span className="text-lg font-bold ml-[7.5rem] text-blue-600">
              {item.datePrice}
            </span>
            <span>{item.monthly}</span>
          </div>
          <div className="flex justify-between border-t-2 border-gray-300 py-4 text-lg ">
            {item.priceTitle}
            <span className="font-bold">{item.price}</span>
          </div>
          <Button className="w-full mt-1 bg-blue-600">درخواست رزرو</Button>
        </div>
      ))}
    </div>
  );
};
