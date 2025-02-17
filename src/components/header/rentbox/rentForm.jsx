import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Search, MapPin } from "lucide-react";

export const RentForm = () => {
  return (
    <div className="flex flex-row justify-between " >
      <div className="flex items-center gap-2 border p-3 rounded-md mt-4">
        <MapPin className="w-5 h-5 text-gray-500" />
        <span className="text-gray-700">تهران، فرودگاه امام خمینی</span>
      </div>
      <div className="grid grid-cols-5 gap-4 items-center">
        <div className="flex flex-col">
          <span className="text-sm text-gray-500">تاریخ تحویل</span>
          <div className="flex items-center gap-2 border p-2 rounded-md">
            <Calendar className="w-4 h-4 text-gray-500" />
            <span>۱۴۰۳/۰۲/۱۰</span>
          </div>
        </div>

        <div className="flex flex-col">
          <span className="text-sm text-gray-500">ساعت تحویل</span>
          <div className="flex items-center gap-2 border p-2 rounded-md">
            <Clock className="w-4 h-4 text-gray-500" />
            <span>۰۷:۰۰</span>
          </div>
        </div>

        <div className="flex flex-col">
          <span className="text-sm text-gray-500">تاریخ بازگشت</span>
          <div className="flex items-center gap-2 border p-2 rounded-md">
            <Calendar className="w-4 h-4 text-gray-500" />
            <span>۱۴۰۳/۰۲/۱۰</span>
          </div>
        </div>

        <div className="flex flex-col">
          <span className="text-sm text-gray-500">ساعت بازگشت</span>
          <div className="flex items-center gap-2 border p-2 rounded-md">
            <Clock className="w-4 h-4 text-gray-500" />
            <span>۰۷:۰۰</span>
          </div>
        </div>

        <Button className="bg-yellow-400 hover:bg-yellow-500 text-black rounded-full w-14 h-14 flex items-center justify-center">
          <Search className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};
