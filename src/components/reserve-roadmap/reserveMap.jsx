import React from "react";
import { ReserveStep } from "./reserveStep";

export const ReserveMap = () => {
  return (
    <div className="flex flex-col items-center p-20 justify-center">
      <h6 className="font-semibold text-xl text-gray-400">چگونه در وب سایت</h6>
      <h2 className="font-bold text-4xl text-gray-600 ">
        {" "}
        <span className="text-yellow-500">اُتـــورِنت ، </span>خودرو رزرو کنیم؟
      </h2>
      <div className="p-20 mt-10">
        <img src="/svg/reservedCar/reservemap/reservemap.svg" alt="reserver" />
      </div>
      <ReserveStep/>
    </div>
  );
};
