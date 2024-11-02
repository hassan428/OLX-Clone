"use client";
import React, { ChangeEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaSearch } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

export const Search_input = () => {
  const [search_value, set_search_value] = useState<string>("");

  const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    set_search_value(e.target.value);
  };

  const searchHandle = () => {
    console.log("search_value", search_value);
  };

  return (
    <div
      className={`w-full gap-2 border border-foreground p-1 rounded-md flex items-center justify-between shadow-sm focus:outline-none transition-all`}
    >
      <div className="flex items-center justify-center w-full">
        <Input
          id="search"
          placeholder="Search"
          className="focus-visible:ring-0 outline-0 border-0 rounded-none text-base"
          value={search_value}
          onChange={onChangeHandle}
        />
        {search_value.length !== 0 && (
          <IoCloseSharp
            className="cursor-pointer"
            onClick={() => set_search_value("")}
          />
        )}
      </div>
      <Button size={"icon"} onClick={searchHandle}>
        <FaSearch />
      </Button>
    </div>
  );
};
