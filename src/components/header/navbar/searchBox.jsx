import React from "react";

import { BiSearch } from "react-icons/bi";

export const SearchBox = ({ isSearchOpen, setIsSearchOpen }) => {
  return (
    <div className="flex mx-40 gap-5">
      <button
        variant="outline"
        className="flex items-center gap-2"
        onClick={() => setIsSearchOpen(!isSearchOpen)}
      >
        <BiSearch className="text-xl" />
      </button>

      {isSearchOpen && (
        <input
          type="text"
          placeholder="جستجو کنید..."
          className="border border-gray-300 rounded-lg px-3 py-2 outline-none w-60"
        />
      )}
    </div>
  );
};
