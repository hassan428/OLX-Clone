import { CategoryLink } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { category_link } from "@/utils";

export const CategoryText = () => {
  return (
    <div className="hidden md:flex justify-start items-center gap-5 p-2 text-sm">
      <Link href={"/allcategories"}>
        <strong className="hover:font-extrabold">All Categories</strong>
      </Link>
      {category_link.map(({ href, title }, i) => {
        return (
          <Link href={`/category/${href}`} key={i}>
            <h1 className="hover:font-bold">{title.split(" ")[0]}</h1>
          </Link>
        );
      })}
    </div>
  );
};

export const CategoryTextWithImage = () => {
  const renderData = ({ href, src, title }: CategoryLink, i: number) => (
    <Link
      href={`/category/${href}`}
      key={i}
      className="flex flex-col hover:bg-green-500 rounded-full items-center text-center gap-2 text-xs md:text-sm py-3"
    >
      <Image
        src={`/assets/images/category/${src}`}
        alt={title}
        width={80}
        height={80}
        className="rounded-full"
      />
      <strong>{title}</strong>
    </Link>
  );
  return (
    <div className="p-2 text-xl border-b border-border">
      <Link href={"/allcategories"}>
        <strong className="hover:font-extrabold">All Categories</strong>
      </Link>
      <div className="hidden sm:grid grid-cols-6 xl:grid-cols-8">
        {category_link.map((data, i) => renderData(data, i))}
      </div>
      <Carousel className="w-full sm:hidden">
        <CarouselContent>
          {category_link.map((data, i) => (
            <CarouselItem key={i} className="basis-1/3">
              {renderData(data, i)}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
