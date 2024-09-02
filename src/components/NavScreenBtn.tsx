import { NavScreenBtnProps } from "@/interfaces";
import Link from "next/link";
import React from "react";

export const NavScreenBtn = ({
  text,
  icon,
  className,
  href,
}: NavScreenBtnProps) => {
  return (
    <Link
      href={href}
      className="flex gap-2 items-center justify-center hover:text-blue-400 cursor-pointer"
    >
      {icon}
      <p className={`font-bold text-sm ${className}`}>{text}</p>
    </Link>
  );
};
