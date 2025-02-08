import React from "react";

import { BiSearch } from "react-icons/bi";

export const SearchBox = ({ isSearchOpen, setIsSearchOpen }) => {
  return (
    <div className="flex  gap-5">
      <button
        variant="outline"
        className="flex items-center "
        onClick={() => setIsSearchOpen(!isSearchOpen)}
      >
        <BiSearch className="text-xl" />
      </button>

      {isSearchOpen && (
        <input
          type="text"
          placeholder="جستجو کنید..."
          className="rounded-md focus:outline-none focus:ring-0 border-none"
        />
      )}
    </div>
  );
};
