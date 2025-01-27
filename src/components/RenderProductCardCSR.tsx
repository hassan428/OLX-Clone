"use client";
import { useEffect, useState } from "react";
import { MoreProductCardUI, ProductCardUI } from "@/components/ProductCardsUI";
import { ProductCardProps, ViewStyle } from "@/interfaces";
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
import { GRID_VIEW_KEY, SORTED_KEY } from "@/utils/constant";

export function RenderMoreProductCard(cardData: ProductCardProps[]) {
  const [gridView, setGridView] = useState<Boolean>(false);
  const [sortedValue, setsortedValue] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const sortStorageValue = localStorage.getItem(SORTED_KEY);
      const gridStorageValue = localStorage.getItem(GRID_VIEW_KEY);
      const parseValue = gridStorageValue
        ? JSON.parse(gridStorageValue)
        : false;

      setGridView(parseValue);
      setsortedValue(sortStorageValue);
    }
  }, []);

  const viewStyle: ViewStyle[] = [
    {
      Tag: MdOutlineViewHeadline,
      onClick: () => {
        setGridView(false);
        localStorage.setItem(GRID_VIEW_KEY, "false");
      },
      size: 30,
      tooltipText: "List",
      className: `${
        !gridView && "bg-success text-black rounded-full"
      } p-1 cursor-pointer`,
    },
    {
      Tag: FiGrid,
      onClick: () => {
        setGridView(true);
        localStorage.setItem(GRID_VIEW_KEY, "true");
      },
      size: 30,
      tooltipText: "Grid",
      className: `${
        gridView && "bg-success text-black rounded-full"
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
    <div className="pl-2 w-full ">
      <div className="flex justify-between items-end mb-2">
        <h1 className="text-muted-foreground text-xs sm:text-sm">
          Showing {Object.values(cardData).length} ads
        </h1>

        <div className="flex sm:flex-row flex-col justify-end items-end sm:items-center gap-1 sm:gap-3 text-sm font-bold">
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
                <h1 className="cursor-pointer">SORT BY :</h1>
                <h1 className="cursor-pointer font-normal">{sortedValue}</h1>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {sortingValues.map((val, i) => (
                <DropdownMenuItem
                  key={i}
                  onClick={() => {
                    localStorage.setItem(SORTED_KEY, val);
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
      </div>

      <div
        className={`${
          gridView &&
          "grid grid-flow-dense grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2"
        }`}
      >
        {Object.values(cardData).map((data, i) =>
          gridView ? (
            <ProductCardUI
              key={data?.id || i}
              {...data}
              className={"w-full xmd:w-full"}
            />
          ) : (
            <MoreProductCardUI key={data?.id || i} {...data} />
          )
        )}
      </div>
    </div>
  );
}
