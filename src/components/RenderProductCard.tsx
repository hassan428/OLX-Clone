"use client";
import * as React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { MoreProductCardUI, ProductCardUI } from "@/components/ProductCard";
import {
  ProductCardProps,
  RenderProductCardProps,
  ViewStyle,
} from "@/interfaces";
import Link from "next/link";
import { FiGrid } from "react-icons/fi";
import { MdOutlineViewHeadline } from "react-icons/md";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CheckCircle } from "lucide-react";
import { sortedStrogeName } from "@/utils/constant";

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
        {cardData.map(
          (data, i) => i < 4 && <ProductCardUI key={data.id} {...data} />
        )}
      </div>
      <ScrollArea className="xmd:hidden">
        <div className="flex w-max space-x-3">
          {cardData.map((data) => (
            <figure key={data.id}>
              <ProductCardUI {...data} />
            </figure>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}

export function RenderMoreProductCard(cardData: ProductCardProps[]) {
  const [viewMode, setViewMode] = React.useState<Boolean>(true);
  const [sortedValue, setsortedValue] = React.useState<string | null>(
    localStorage.getItem(sortedStrogeName)
  );

  const viewStyle: ViewStyle[] = [
    {
      Tag: MdOutlineViewHeadline,
      onClick: () => setViewMode(false),
      size: 30,
      tooltipText: "List",
      className: `${
        !viewMode && "bg-green-500 text-black rounded-full"
      } p-1 cursor-pointer`,
    },
    {
      Tag: FiGrid,
      onClick: () => setViewMode(true),
      size: 30,
      tooltipText: "Grid",
      className: `${
        viewMode && "bg-green-500 text-black rounded-full"
      } p-1 cursor-pointer`,
    },
  ];

  const sortingValues: string[] = [
    "Newly listed",
    "Most relevant",
    "Lowest price",
    "Highest price",
  ];

  return (
    <div className="pl-2 w-full">
      <div className="mb-2 flex sm:flex-row flex-col justify-end items-end gap-3 text-sm font-bold">
        <div className="flex justify-end items-center gap-1">
          <h1>VIEW</h1>
          {viewStyle.map(
            ({ Tag, onClick, size, tooltipText, className }, i) => (
              <TooltipProvider key={i}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div>
                      <Tag
                        className={className}
                        size={size}
                        onClick={onClick}
                      />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{tooltipText}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )
          )}
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center gap-2">
              <h1 className="cursor-pointer">SORT BY:</h1>
              <h1 className="cursor-pointer font-normal">{sortedValue}</h1>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {sortingValues.map((val, i) => (
              <DropdownMenuItem
                key={i}
                onClick={() => {
                  localStorage.setItem(sortedStrogeName, val);
                  setsortedValue(val);
                }}
                className="justify-between gap-2"
              >
                <h1>{val}</h1>
                {val == sortedValue && (
                  <CheckCircle className="mr-2 text-green-500" />
                )}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div
        className={`${
          viewMode &&
          "grid grid-flow-dense grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2"
        }`}
      >
        {Object.values(cardData).map((data) =>
          viewMode ? (
            <ProductCardUI
              key={data.id}
              {...data}
              className={"w-full xmd:w-full"}
            />
          ) : (
            <MoreProductCardUI key={data.id} {...data} />
          )
        )}
      </div>
    </div>
  );
}
