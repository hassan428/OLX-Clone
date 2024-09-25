import { LayoutProps } from "@/interfaces";
import React from "react";
import { category_link } from "@/utils";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const layout = ({ children, params }: LayoutProps) => {
  const { name } = params;
  const find_title = category_link.find(({ href }) => name == href);

  const sidebarUi = () => (
    <div className="sticky top-32 text-sm flex flex-col gap-2 max-h-screen font-light p-2">
      <h1 className="font-bold text-base">Categories</h1>
      <Link
        href={"allcategories"}
        className={`ml-4 ${name == "allcategories" && "font-bold"}`}
      >
        All Categories
      </Link>
      {category_link.map(({ href, title }, i) => (
        <Link
          key={i}
          href={href}
          className={`ml-8 ${find_title?.title == title && "font-bold"}`}
        >
          {title}
        </Link>
      ))}

      <div className="text-base font-bold">
        <h1 className="my-2">Price</h1>
        <div className="flex justify-around items-center gap-2">
          <Input
            type="number"
            placeholder="Lowest"
            className="focus:border-2 border-foreground focus-visible:ring-0"
            // value={search_value}
            // onChange={onChangeHandle}
          />
          <Input
            type="number"
            placeholder="Highest"
            className="focus:border-2 border-foreground focus-visible:ring-0"
            // value={search_value}
            // onChange={onChangeHandle}
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-2 w-full">
      <h1 className="text-xl font-bold mb-3">
        {find_title?.title || (name == "allcategories" && "All Categories")}
      </h1>

      <div className="flex flex-col sm:flex-row items- sm:items-baseline sm:bg-input bg-background">
        <div className="w-1/3 bg-input max-sm:hidden">{sidebarUi()}</div>
        <div className="sm:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="default" size={"icon"}>
                Filter
              </Button>
            </SheetTrigger>
            <SheetContent side={"left"}>{sidebarUi()}</SheetContent>
          </Sheet>
        </div>

        <div className="sm:w-2/3 w-full bg-background">{children}</div>
      </div>
    </div>
  );
};

export default layout;
