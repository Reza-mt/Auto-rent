"use client";

import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import Logo from "../../../../public/image/Logo.png";
import { SearchBox } from "./searchBox";

const navbarData = [
  { id: 1, text: "رزرو خودرو", link: "/equipment-rental" },
  { id: 2, text: "خدمات", link: "/Product" },
  { id: 3, text: "بلاگ", link: "/blog" },
  { id: 4, text: "درباره ما", link: "/about-us" },
  { id: 5, text: "تماس باما", link: "/contact-us " },
];

export const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="flex justify-around items-center bg-white p-4  mx-40 rounded-b-xl ">
      <Link href="/">
        <Image src={Logo} alt="لوگو" width={100} height={50} priority />
      </Link>
      {!isSearchOpen && (
        <ul className="flex gap-16 ">
          {navbarData.map((item) => (
            <li key={item.id}>
              <Link href={item.link} className="text-black hover:text-blue-500">
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      )}

      <SearchBox
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
      />

      <Button asChild className="bg-blue-600">
        <Link href="/login"> ورود/ثبت نام </Link>
      </Button>
    </nav>
  );
};
