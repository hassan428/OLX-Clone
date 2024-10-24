import Link from "next/link";
import React from "react";

export const Sell_btn = () => {
  return (
    <Link
      href={"/post"}
      className="
      border-4
    border-t-purple-800 
    border-b-blue-800 
    border-l-yellow-200 
    border-r-green-800
    px-2 py-1 rounded-full text-center font-extrabold min-w-20 max-xmd:fixed bottom-5 left-1/2 transform  max-xmd:-translate-x-1/2"
    >
      <h1>SELL</h1>
    </Link>
  );
};
