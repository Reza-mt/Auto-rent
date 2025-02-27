import React from "react";
import { HearoHeaderButton } from "./hearoHeaderButton";

export const HearoHeaderText = () => {
  return (
    <div className="flex flex-col mx-44 my-52  ">
      <h2 className="flex flex-col font-bold text-4xl  text-yellow-400 ">
        اُتـــو رِنت؛ سریع،
        <span>آسان و به صرفه</span>
      </h2>
      <h4 className="font-bold text-lg mt-5 text-white ">سرویس دهنده رزرو خودرو در ایران در کمترین زمان ممکن! </h4>

      <HearoHeaderButton/>
    </div>
  );
};
