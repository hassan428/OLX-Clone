"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RiArrowLeftWideLine, RiArrowRightWideLine } from "react-icons/ri";

import Image from "next/image";
import { category_link } from "@/utils";
import { useState } from "react";

export const CategoryDialog = () => {
  const [clickTitle, setClickTitle] = useState<string>("");

  const find_select_category = category_link.find(
    ({ title }) => title == clickTitle
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <h1 className="text-blue-600 cursor-pointer">Change</h1>
      </DialogTrigger>
      <DialogContent className="text-sm max-sm:min-h-screen max-sm:px-2 max-sm:py-4">
        <DialogHeader>
          <DialogTitle>Choose a category</DialogTitle>

          <div className="flex flex-col sm:flex-row w-full">
            <div
              className={`flex flex-col w-full sm:w-1/2 my-2 sm:border-2 border-border border-t-0 border-r-0  ${
                clickTitle && "hidden sm:flex"
              }`}
            >
              {category_link.map(({ title, src }, i) => (
                <div
                  onClick={() => setClickTitle(title)}
                  key={i}
                  className={`flex h-14 items-center justify-between cursor-pointer hover:bg-green-200 sm:border-t-2 border-border p-2 ${
                    title == clickTitle && "bg-green-200"
                  }  `}
                >
                  <div className="flex gap-2 items-center">
                    <Image
                      src={`/assets/images/category/${src}`}
                      alt={"mobiles"}
                      width={80}
                      height={80}
                      className="rounded-full w-10 h-10"
                      priority={true}
                    />
                    <h1 className="font-bold text-left">{title}</h1>
                  </div>
                  <RiArrowRightWideLine size={20} />
                </div>
              ))}
            </div>

            {clickTitle && (
              <div
                onClick={() => setClickTitle("")}
                className="flex items-center justify-start mt-3 cursor-pointer sm:hidden"
              >
                <RiArrowLeftWideLine size={20} />
                <h1 className="font-bold text-base ">{clickTitle}</h1>
              </div>
            )}

            <div
              className={`flex flex-col w-full sm:w-1/2 my-2 sm:border-2 border-border   ${
                !clickTitle && "hidden sm:flex"
              }`}
            >
              {find_select_category?.subCategories?.map(({ title }, i) => (
                <div
                  key={i}
                  className="flex h-14 items-center justify-between cursor-pointer hover:bg-green-200 border-border p-2 sm:border-b-2"
                >
                  <h1 className="font-bold">{title}</h1>
                  <RiArrowRightWideLine size={20} />
                </div>
              ))}
            </div>
          </div>
        </DialogHeader>

        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
