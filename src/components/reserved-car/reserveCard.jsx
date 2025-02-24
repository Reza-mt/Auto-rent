import React from "react";

const Data = [
  {
    src: "/svg/reservedCar/benz.svg",
    name: "بنز e350",
    model: "مدل:2016",
    date: "از  ۱ تا 30 روز:8,500,000",
    dayli: "روزانه",
    monthly: "ماهانه",
    priceTitle: "مبلغ ضمانت",
    price: "80 میلیون تومان",
  },
  {
    src: "/svg/reservedCar/land.svg",
    name: "لندکروز",
    model: "مدل:2016",
    date: "از  ۱ تا 30 روز:8,500,000",
    dayli: "روزانه",
    monthly: "ماهانه",
    priceTitle: "مبلغ ضمانت",
    price: "80 میلیون تومان",
  },
  {
    src: "/svg/reservedCar/jenesis.svg",
    name: "جنسیس کوپه",
    model: "مدل:2016",
    date: "از  ۱ تا 30 روز:8,500,000",
    dayli: "روزانه",
    monthly: "ماهانه",
    priceTitle: "مبلغ ضمانت",
    price: "80 میلیون تومان",
  },
  {
    src: "/svg/reservedCar/bmw.svg",
    name: "بی ام او",
    model: "مدل:2016",
    date: "از  ۱ تا 30 روز:8,500,000",
    dayli: "روزانه",
    monthly: "ماهانه",
    priceTitle: "مبلغ ضمانت",
    price: "80 میلیون تومان",
  },
  {
    src: "/svg/reservedCar/tucsan.svg",
    name: "هیوندای توسان",
    model: "مدل:2016",
    date: "از  ۱ تا 30 روز:8,500,000",
    dayli: "روزانه",
    monthly: "ماهانه",
    priceTitle: "مبلغ ضمانت",
    price: "80 میلیون تومان",
  },
  {
    src: "/svg/reservedCar/maserati.svg",
    name: "مازراتی گرندکوپه",
    model: "مدل:2016",
    date: "از  ۱ تا 30 روز:8,500,000",
    dayli: "روزانه",
    monthly: "ماهانه",
    priceTitle: "مبلغ ضمانت",
    price: "80 میلیون تومان",
  },
];

export const ReserveCard = () => {
  return (
    <div className="grid grid-cols-3 gap-6 place-items-center">
      {Data.map((item, index) => (
        <div key={index}>
          <div>
            <img src={item.src} alt={item.name} />
          </div>
          <div>
            {item.name}
            <span>{item.model}</span>
          </div>
          <div>
            {item.date}
            <span>{item.dayli}</span>
          </div>
          <div>
            {item.date}
            <span>{item.monthly}</span>
          </div>
          <div>
            {item.priceTitle}
            <span>{item.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
