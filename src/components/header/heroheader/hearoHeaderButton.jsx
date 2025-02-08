import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export const HearoHeaderButton = () => {
  return (
    <div className="flex gap-5 mt-10 ">
      <Button asChild className="bg-yellow-500 text-black px-6 py-5  hover:bg-yellow-500 ">
        <Link href="/"> رزرو آسان خودرو </Link>
      </Button>
      <Button asChild className="bg-opacity-100 px-6 py-5 border border-white hover:bg-transparent ">
        <Link href="/"> تماس باما</Link>
      </Button>
    </div>
  );
};
