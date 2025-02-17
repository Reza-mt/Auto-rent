import React from "react";
import Link from "next/link";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const RentTabs = () => {
  return (
    <div className="flex flex-row justify-between">
      <Tabs defaultValue="driver" className="mb-4">
        <TabsList className="bg-gray-100 p-1 rounded-lg">
          <TabsTrigger
            value="wedding"
            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
          >
            اجاره ماشین عروس
          </TabsTrigger>
          <TabsTrigger
            value="no-driver"
            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
          >
            اجاره خودرو بی راننده
          </TabsTrigger>
          <TabsTrigger
            value="driver"
            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
          >
            اجاره خودرو با راننده
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <Link className="text-blue-600" href='/'  >اطلاعات بیشتر در باره رزرو خودرو</Link>
    </div>
  );
};
