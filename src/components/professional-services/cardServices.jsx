import React from "react";

const card = [
  { src: "/svg/professional/professional1.svg", title: "قیمت مناسب", dis: "هدف ما، ارائه بهترین خدمات با مناسب ترین قیمت ممکن است." },
  { src: "/svg/professional/professional2.svg", title: "پشتیبانی 24 ساعته", dis: "کارشناسان ما در هر زمان و مکان، پاسخگوی سوالات شما خواهند بود." },
  { src: "/svg/professional/professional3.svg", title: "تحویل در محل", dis: "تحویل خودرو در زمان و مکان تعیین شده توسط شما خواهد بود." },
];

export const CardServices = () => {
  return (
    <div className="relative z-10 -mt-28 flex justify-center gap-14  ">
      {card.map((item, index) => (
        <div key={index} className="w-1/5 bg-white py-8 border rounded-3xl shadow-md flex flex-col items-center">
          <div className="w-16 h-16" >
            <img src={item.src} alt={item.title} className="w-full h-full" />
          </div>
          <div className="w-9/12 text-center mt-4" >
            <h2 className="font-bold text-xl ">{item.title}</h2>
            <p className="font-semibold text-lg ">{item.dis}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
