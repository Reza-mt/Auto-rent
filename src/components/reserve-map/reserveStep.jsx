import Image from "next/image";
import React from "react";

export const ReserveStep = () => {
  return (
    <div className="relative z-10 -mt-[60rem] grid grid-cols-2 gap-x-[40rem] gap-y-96 ">
      <div className="flex ">
        <div className="ml-5">
          <Image
            src="/svg/reservedCar/reservemap/1.svg"
            alt="number"
            width={20}
            height={35}
          />
          <Image
            src="/svg/reservedCar/reservemap/carlogo.svg"
            alt="number"
            width={30}
            height={30}
          />
        </div>
        <div className="flex flex-col w-8/12 justify-center">
          <h2 className="font-bold text-2xl">
            {" "}
            <span className="text-yellow-500">خودروی </span>خود را انتخاب کنید.
          </h2>
          <h4 className="font-medium text-lg text-gray-400">
            خودروی مورد نظر خود را، متناسب با درخواست خود انتخاب کنید.
          </h4>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col w-9/12 justify-center">
          <h2 className="font-bold text-2xl">
            {" "}
            <span className="text-yellow-500">تاریخ </span>تحویل را تعیین کنید
          </h2>
          <h4 className="font-medium text-lg text-gray-400">
            تاریخ موردنظر خود را از تقویم، انتخاب و رزرو کنید{" "}
          </h4>
        </div>
        <div className="-mt-5 mr-5">
          <Image
            src="/svg/reservedCar/reservemap/2.svg"
            alt="number"
            width={35}
            height={35}
          />
          <Image
            src="/svg/reservedCar/reservemap/callogo.svg"
            alt="number"
            width={30}
            height={30}
          />
        </div>
      </div>
      <div className="flex">
        <div className="ml-5">
          <Image
            src="/svg/reservedCar/reservemap/3.svg"
            alt="number"
            width={35}
            height={35}
          />
          <Image
            src="/svg/reservedCar/reservemap/cartlogo.svg"
            alt="number"
            width={30}
            height={30}
          />
        </div>
        <div className="flex flex-col w-8/12 justify-center">
          <h2 className="font-bold text-2xl">
            {" "}
            <span className="text-yellow-500">هزینه </span>اجاره را تعیین کنید
          </h2>
          <h4 className="font-medium text-lg text-gray-400">
            می توانید از طریق کیف پول آنلاین یا کارت های عضو شبکه شتاب هزینه
            اجاره را پرداخت کنید.{" "}
          </h4>
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col w-10/12 justify-center">
          <h2 className="font-bold text-2xl">
            {" "}
            <span className="text-yellow-500">خودرو </span>خود را تحویل بگیرید
          </h2>
          <h4 className="font-medium text-lg text-gray-400">
            در زمان و مکان تعیین شده، خودروی خود را دریافت کنید.{" "}
          </h4>
        </div>
        <div className="-mt-5 mr-5">
          <Image
            src="/svg/reservedCar/reservemap/4.svg"
            alt="number"
            width={35}
            height={35}
          />
          <Image
            src="/svg/reservedCar/reservemap/keylogo.svg"
            alt="number"
            width={30}
            height={30}
          />
        </div>
      </div>
    </div>
  );
};
