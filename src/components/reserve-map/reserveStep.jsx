import Image from "next/image";
import React from "react";

export const ReserveStep = () => {
  return (
    <div className="grid grid-cols-2 gap-x-96 ">
      <div className="flex">
        <div>
          <Image
            src="/svg/reservedCar/reservemap/1.svg"
            alt="number"
            width={35}
            height={35}
          />
          <Image
            src="/svg/reservedCar/reservemap/carlogo.svg"
            alt="number"
            width={30}
            height={30}
          />
        </div>
        <div>
          <h2>
            {" "}
            <span>خودروی </span>خود را انتخاب کنید.
          </h2>
          <h4>خودروی مورد نظر خود را، متناسب با درخواست خود انتخاب کنید.</h4>
        </div>
      </div>
      <div className="flex">
        <div>
          <h2>
            {" "}
            <span>خودروی </span>خود را انتخاب کنید.
          </h2>
          <h4>خودروی مورد نظر خود را، متناسب با درخواست خود انتخاب کنید.</h4>
        </div>
        <div>
          <Image
            src="/svg/reservedCar/reservemap/1.svg"
            alt="number"
            width={35}
            height={35}
          />
          <Image
            src="/svg/reservedCar/reservemap/carlogo.svg"
            alt="number"
            width={30}
            height={30}
          />
        </div>
      </div>
      <div className="flex">
        <div>
          <Image
            src="/svg/reservedCar/reservemap/1.svg"
            alt="number"
            width={35}
            height={35}
          />
          <Image
            src="/svg/reservedCar/reservemap/carlogo.svg"
            alt="number"
            width={30}
            height={30}
          />
        </div>
        <div>
          <h2>
            {" "}
            <span>خودروی </span>خود را انتخاب کنید.
          </h2>
          <h4>خودروی مورد نظر خود را، متناسب با درخواست خود انتخاب کنید.</h4>
        </div>
      </div>
      <div className="flex">
        <div>
          <h2>
            {" "}
            <span>خودروی </span>خود را انتخاب کنید.
          </h2>
          <h4>خودروی مورد نظر خود را، متناسب با درخواست خود انتخاب کنید.</h4>
        </div>
        <div>
          <Image
            src="/svg/reservedCar/reservemap/1.svg"
            alt="number"
            width={35}
            height={35}
          />
          <Image
            src="/svg/reservedCar/reservemap/carlogo.svg"
            alt="number"
            width={30}
            height={30}
          />
        </div>
      </div>
    </div>
  );
};
