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
  // const { categoryName } = params;
  // const find_title = category_link.find(({ href }) => categoryName == href);

  // const categoryUI = () => (
  //   <>
  //     <Link
  //       href={"/category/allcategories"}
  //       className={`ml-4 hover:font-bold ${
  //         categoryName == "allcategories" && "font-bold"
  //       }`}
  //     >
  //       All Categories
  //     </Link>
  //     {find_title
  //       ? find_title.subCategories?.map(({ href, title }, i) => (
  //           <Link
  //             key={i}
  //             href={`/category/${href}`}
  //             className={`ml-8 hover:font-bold ${
  //               find_title?.title == title && "font-bold"
  //             }`}
  //           >
  //             {title}
  //           </Link>
  //         ))
  //       : category_link.map(({ href, title }, i) => (
  //           <Link
  //             key={i}
  //             href={`/category/${href}`}
  //             className={`ml-8 hover:font-bold ${
  //               find_title?.title == title && "font-bold"
  //             }`}
  //           >
  //             {title}
  //           </Link>
  //         ))}
  //   </>
  // );

  const { categoryName } = params;
  const find_title = category_link.find(({ href }) => categoryName == href);

  const categoryUI = () => (
    <>
      {/* Link for All Categories */}
      <Link
        href={"/category/allcategories"}
        className={`ml-4 hover:font-bold ${
          categoryName == "allcategories" && "font-bold"
        }`}
      >
        All Categories
      </Link>

      {/* If All Categories is selected, show all main categories */}
      {categoryName === "allcategories" &&
        category_link.map(({ href, title }, i) => (
          <Link
            key={i}
            href={`/category/${href}`}
            className={`ml-8 hover:font-bold`}
          >
            {title}
          </Link>
        ))}

      {/* If a specific category is selected, show the category and its subcategories (if any) */}
      {find_title && (
        <>
          {/* Main Category Link */}
          <Link
            href={`/category/${find_title.href}`}
            className={`ml-8 hover:font-bold font-bold`} // Highlight the selected category
          >
            {find_title.title}
          </Link>

          {/* Subcategories of the selected category */}
          {find_title.subCategories?.map(({ href, title }, i) => (
            <Link
              key={i}
              href={`/category/${href}`}
              className="ml-12 hover:font-bold"
            >
              {title}
            </Link>
          ))}
        </>
      )}
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
  );

  return (
    <div className="p-2 w-full">
      <div className="flex text-xs sm:text-sm text-muted-foreground items-center gap-2">
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
        {find_title?.title ||
          (categoryName == "allcategories" && "All Categories")}
      </h1>

      <div className="flex flex-col sm:flex-row items-start sm:bg-border bg-background">
        <div className="w-1/3 max-sm:hidden sticky top-32 ">{sidebarUi()}</div>
        <div className="sm:hidden">{sidebarSheetUi()}</div>

        <div className="sm:w-2/3 w-full bg-background">{children}</div>
      </div>
    </div>
  );
};

export default layout;
