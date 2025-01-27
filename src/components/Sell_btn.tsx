import { SellButtonProps } from "@/interfaces";
import Link from "next/link";

export const Sell_btn = ({ className }: SellButtonProps) => {
  return (
    <Link
      href={"/post"}
      className={`bg-background
        border-4
    border-t-purple-800 
    border-b-blue-800 
    border-l-yellow-200 
    border-r-green-800
    px-2 py-1 rounded-full text-center font-extrabold min-w-20 ${className}`}
    >
      <h1>SELL</h1>
    </Link>
  );
};
