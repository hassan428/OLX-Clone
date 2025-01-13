import { LayoutProps } from "@/interfaces";
import React from "react";
import { ctg_link } from "@/utils";
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { PriceRange } from "@/components/PriceRange";

const layout = async ({ children, params }: LayoutProps) => {
  const { categoryName } = await params;

  const find_main_ctg = ctg_link.find(({ href }) => categoryName?.[0] == href);

  const find_sub_ctg = find_main_ctg?.subCategories?.find(
    ({ href }) => categoryName?.[1] == href
  );

  const commonRoute: string = "/category/";

  const categoryUI = () => (
    <div className="h-full border-r border-background overflow-y-auto text-sm ">
      {/* Link for All Categories */}
      <div
        className={`border-b-2 border-background p-3 px-4 ${
          categoryName?.[0] == "allcategories"
            ? "font-bold text-green-900 bg-green-300"
            : "hover:font-bold hover:bg-input "
        } `}
      >
        <Link href={`${commonRoute}allcategories`}>All Categories</Link>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {ctg_link.map(({ href, title, subCategories }, i) => (
          <AccordionItem key={i} value={`items-${i}`} className="border-b">
            <AccordionTrigger
              className={`text-left border-b-2 border-background p-3 px-4 rounded-md ${
                categoryName?.[0] == href
                  ? "font-bold text-green-900 bg-green-300"
                  : "hover:font-bold hover:bg-input"
              }`}
            >
              <Link href={`${commonRoute}${href}`}>{title}</Link>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col rounded-md bg-background">
              {subCategories?.map(({ href: subCatehref, title }, i) => (
                <Link
                  key={i}
                  href={`${commonRoute}${href}/${subCatehref}`}
                  className={`ml-5 p-2 mr-2 my-1 rounded-md text-sm border-b border-background transition-all  ${
                    categoryName?.[1] == subCatehref
                      ? "font-bold text-green-900 bg-green-300"
                      : "hover:font-bold hover:text-foreground hover:bg-border"
                  }`}
                >
                  {title}
                </Link>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );

  const sidebarUi = () => (
    <div className="text-sm flex flex-col gap-2 max-h-screen font-light p-2">
      <h1 className="font-bold text-base">Categories</h1>
      {categoryUI()}
      <div className="text-base font-bold flex flex-col gap-2 border-t border-foreground pt-2">
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
        <SheetDescription></SheetDescription>
        {categoryUI()}
        <SheetFooter className="text-base font-bold flex flex-col gap-2 border-t border-foreground pt-2">
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
        {find_main_ctg?.title && (
          <h1>
            <Link href={`${commonRoute}${find_main_ctg.href}`}>
              {find_main_ctg.title}
            </Link>
          </h1>
        )}
        {find_sub_ctg?.title && (
          <>
            <h1>/</h1>
            <h1>
              <Link
                href={`${commonRoute}${find_main_ctg?.href}/${find_sub_ctg.href}`}
              >
                {find_sub_ctg.title}
              </Link>
            </h1>
          </>
        )}
      </div>

      <h1 className="sm:text-xl font-bold my-3">
        {find_sub_ctg?.title || find_main_ctg?.title}
        {categoryName == "allcategories" && "All Categories"}
      </h1>

      <div className="flex flex-col sm:flex-row items-start sm:bg-border bg-background">
        <div className="w-1/3 max-sm:hidden sticky top-2 overflow-auto">
          {sidebarUi()}
        </div>
        <div className="sm:hidden">{sidebarSheetUi()}</div>

        <div className="sm:w-2/3 w-full bg-background">{children}</div>
      </div>
    </div>
  );
};

export default layout;
