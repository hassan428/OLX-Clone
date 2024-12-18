"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { RiArrowRightWideLine } from "react-icons/ri";

import Image from "next/image";
import { category_link } from "@/utils";
import { useEffect, useState } from "react";
import { CategoryDialogProps, SentCategory } from "@/interfaces";
import { ArrowLeft } from "lucide-react";

export const CategoryDialog = ({ sentCategoryData }: CategoryDialogProps) => {
  const [category, setCategory] = useState<SentCategory | null>(null);

  const find_select_category = category_link.find(
    ({ title }) => title == category?.main
  );

  useEffect(() => {
    category?.sub && sentCategoryData(category);
  }, [category, sentCategoryData]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <h1 className="text-blue-600 cursor-pointer">Select</h1>
      </DialogTrigger>
      <DialogContent className="text-sm max-sm:min-h-screen max-h-[27rem] overflow-auto max-sm:px-1 max-sm:py-4 gap-0">
        <DialogHeader>
          <div>
            <DialogTitle className={`${category?.main && "max-sm:hidden"}`}>
              Choose a category
            </DialogTitle>
            {category?.main && (
              <div
                onClick={() => setCategory(null)}
                className="w-max flex items-center gap-3 justify-between cursor-pointer sm:hidden"
              >
                <ArrowLeft size={20} />
                <DialogTitle className="font-bold text-sm">
                  {category?.main}
                </DialogTitle>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row w-full">
            <div
              className={`flex flex-col w-full sm:w-1/2 my-2 sm:border-2 border-border border-t-0 border-r-0  ${
                category?.main && "hidden sm:flex"
              }`}
            >
              {category_link.map(({ title, src }, i) => (
                <div
                  onClick={() =>
                    setCategory({
                      ...category,
                      main: title,
                      src,
                      sub: undefined,
                    })
                  }
                  key={i}
                  className={`flex h-14 items-center justify-between cursor-pointer hover:bg-success sm:border-y-2 border-border p-2 ${
                    title == category?.main && "bg-success"
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
                    <DialogDescription className="font-bold text-left text-foreground">
                      {title}
                    </DialogDescription>
                  </div>
                  <RiArrowRightWideLine size={20} />
                </div>
              ))}
            </div>

            <div
              className={`flex flex-col w-full sm:w-1/2 my-2 sm:border-2 border-border   ${
                !category?.main && "hidden sm:flex"
              }`}
            >
              {find_select_category?.subCategories?.map(({ title }, i) => (
                <DialogClose
                  key={i}
                  onClick={() => setCategory({ ...category, sub: title })}
                  className={`flex h-14 items-center justify-between cursor-pointer hover:bg-success border-border p-2 sm:border-y-2 ${
                    title == category?.sub && "bg-success"
                  }`}
                >
                  <DialogDescription className="font-bold text-foreground">
                    {title}
                  </DialogDescription>
                </DialogClose>
              ))}
            </div>
          </div>
        </DialogHeader>

        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
