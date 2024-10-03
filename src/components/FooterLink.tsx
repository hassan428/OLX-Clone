import { FooterLinkSection } from "@/interfaces";
import Link from "next/link";
import React from "react";

export const FooterLink = ({ data, title }: FooterLinkSection) => {
  return (
    <div className="flex flex-col gap-3 h-36 w-max">
      <h1 className="text-base font-bold uppercase">{title}</h1>
      <div>
        {data.map(({ href, text }, i) => (
          <Link key={i} href={href}>
            <h1 className="text-sm hover:underline line-clamp-1">{text}</h1>
          </Link>
        ))}
      </div>
    </div>
  );
};
