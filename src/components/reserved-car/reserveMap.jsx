import React from "react";
import { ReserveTabs } from "./reserveTabs";

export const ReserveMap = () => {
  return (
    <div className="flex flex-col gap-10 -mt-32 p-4">
      <div className="flex flex-col items-center space-y-4">
        <h6 className="font-light text-xl text-gray-400">
          مشاهده موجودی خودروها
        </h6>
        <h2 className="font-extrabold text-4xl ">
          رزرو خودرو در <span className="text-yellow-500">اُتـــورِنت</span>{" "}
        </h2>
      </div>
      <ReserveTabs />
    </div>
  );
};
