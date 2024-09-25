"use client";
import * as React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { MoreProductCardUI, ProductCardUI } from "@/components/ProductCard";
import { ProductCardProps, RenderProductCardProps } from "@/interfaces";
import Link from "next/link";
import { FiGrid } from "react-icons/fi";
import { MdOutlineViewHeadline } from "react-icons/md";

export function RenderProductCard({
  cardData,
  heading,
  href,
}: RenderProductCardProps) {
  return (
    <div className="m-2 my-3">
      <div className="flex justify-between items-center my-2">
        <h1 className="text-2xl font-bold">{heading}</h1>
        <Link href={`category/${href}`}>View more</Link>
      </div>
      <div className="hidden xmd:flex space-x-3">
        {cardData.map((data, i) => i < 4 && ProductCardUI(data))}
      </div>
      <ScrollArea className="xmd:hidden">
        <div className="flex w-max space-x-3">
          {cardData.map((data) => (
            <figure key={data.id}>{ProductCardUI(data)}</figure>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}

export function RenderMoreProductCard(cardData: ProductCardProps[]) {
  const [viewMode, setViewMode] = React.useState<Boolean>(true);
  return (
    <div className="pl-2 w-full">
      <div className="flex justify-end items-center gap-3 p- text-sm font-bold">
        <h1>VIEW</h1>
        <MdOutlineViewHeadline
          className={`${
            !viewMode && "bg-green-500 text-black rounded-full"
          } p-1 cursor-pointer`}
          size={30}
          onClick={() => setViewMode(false)}
        />
        <FiGrid
          className={`${
            viewMode && "bg-green-500 text-black rounded-full"
          } p-1 cursor-pointer`}
          size={30}
          onClick={() => setViewMode(true)}
        />
        <h1>SORT BY</h1>
      </div>

      <div
        className={`${
          viewMode &&
          "grid grid-flow-dense grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
        }`}
      >
        {Object.values(cardData).map((data) =>
          viewMode ? (
            <ProductCardUI {...data} className={"w-40 sm:w-44 xmd:w-52 p-3"} />
          ) : (
            <MoreProductCardUI {...data} />
          )
        )}
      </div>
    </div>
  );
}
