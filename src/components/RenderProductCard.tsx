"use client";
import * as React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ProductCard } from "@/components/ProductCard";
import { RenderProductCardProps } from "@/interfaces";
import Link from "next/link";

export function RenderProductCard({
  cardData,
  heading,
  href,
}: RenderProductCardProps) {
  return (
    <div className="m-2 my-3">
      <div className="flex justify-between items-center my-2">
        <h1 className="text-2xl font-bold">{heading}</h1>
        <Link href={href}>View more</Link>
      </div>
      <div className="hidden xmd:flex space-x-3">
        {cardData.map((data, i) => i < 4 && ProductCard(data))}
      </div>
      <ScrollArea className="xmd:hidden">
        <div className="flex w-max space-x-3">
          {cardData.map((data) => (
            <figure key={data.id}>{ProductCard(data)}</figure>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
