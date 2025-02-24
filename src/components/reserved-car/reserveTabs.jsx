import React from "react";
import Link from "next/link";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const ReserveTabs = () => {
  return (
    <div className="flex flex-row w-9/12 mx-32 justify-between ">
      <Tabs defaultValue="driver" className="mb-4">
        <TabsList className="bg-gray-100 p-1 rounded-lg gap-4 text-blue-600">
          <TabsTrigger
            value="wedding"
            className="data-[state=active]:bg-blue-600 border-blue-600 border-2 h-12 w-32 data-[state=active]:text-white"
          >
           پرطرفدار
          </TabsTrigger>
          <TabsTrigger
            value="no-driver"
            className="data-[state=active]:bg-blue-600 border-blue-600 border-2 h-12 w-32 data-[state=active]:text-white"
          >
            لوکس
          </TabsTrigger>
          <TabsTrigger
            value="driver"
            className="data-[state=active]:bg-blue-600 border-blue-600 border-2 h-12 w-32 data-[state=active]:text-white"
          >
            اقتصادی
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <Link className="text-blue-600 " href='/'  >مشاهده همه </Link>
    </div>
  );
};
