import { LayoutProps } from "@/interfaces";
import React from "react";
import { category_link } from "@/utils";
import Link from "next/link";
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
import { Logo } from "@/components/Logo";
import { PriceRange } from "@/components/PriceRange";

const layout = ({ children, params }: LayoutProps) => {
  const { name } = params;
  const find_title = category_link.find(({ href }) => name == href);

  const categoryUI = () => (
    <>
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
    </>
  );

  const sidebarUi = () => (
    <div className="text-sm flex flex-col gap-2 max-h-screen font-light p-2">
      <h1 className="font-bold text-base">Categories</h1>
      {categoryUI()}
      <div className="text-base font-bold flex flex-col gap-2">
        <PriceRange />
      </div>
    </div>
  );

  const sidebarSheetUi = () => (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="default" size={"icon"}>
            Filter
          </Button>
        </SheetTrigger>
        <SheetContent
          side={"left"}
          className="text-sm flex flex-col gap-2 max-h-screen overflow-auto font-light p-2"
        >
          <SheetHeader className="m-3">
            <Logo />
          </SheetHeader>
          <SheetTitle className="font-bold text-base">Categories</SheetTitle>
          <SheetDescription className="flex flex-col gap-2">
            {categoryUI()}
          </SheetDescription>
          <SheetFooter className="text-base font-bold flex flex-col gap-2">
            <PriceRange />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );

  return (
    <div className="p-2 w-full">
      <div className="flex text-sm text-muted-foreground items-center gap-2">
        <h1>
          <Link href={"/"}>Home</Link>
        </h1>
        <h1>/</h1>
        {find_title?.title && (
          <h1>
            <Link href={find_title.href}>{find_title.title}</Link>
          </h1>
        )}
      </div>

      <h1 className="sm:text-xl font-bold my-3">
        {find_title?.title || (name == "allcategories" && "All Categories")}
      </h1>

      <div className="flex flex-col sm:flex-row items-start sm:bg-input bg-background">
        <div className="w-1/3 bg-input max-sm:hidden sticky top-32 ">
          {sidebarUi()}
        </div>
        <div className="sm:hidden">{sidebarSheetUi()}</div>

        <div className="sm:w-2/3 w-full bg-background">{children}</div>
      </div>
    </div>
  );
};

export default layout;
