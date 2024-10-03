"use client";
import { FooterLinkSection } from "@/interfaces";
import Link from "next/link";

import React, { useState } from "react";
import { RiArrowDownWideLine, RiArrowRightWideLine } from "react-icons/ri";

export const FooterDropDown = ({ data, title }: FooterLinkSection) => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center border-y border-border p-3 cursor-pointer"
      >
        <h1>{title}</h1>
        {isOpen ? (
          <RiArrowDownWideLine size={25} />
        ) : (
          <RiArrowRightWideLine size={25} />
        )}
      </div>
      {isOpen && (
        <div className="bg-input flex flex-col gap-3 text-sm px-5 py-2">
          {data.map(({ href, text }, i) => (
            <Link key={i} href={href}>
              <h1 className="hover:underline">{text}</h1>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};
