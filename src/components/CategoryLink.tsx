import { categoryLink } from "@/interfaces";
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

const category_link: categoryLink[] = [
  {
    src: "mobiles.png",
    href: "/mobiles",
    title: "Mobiles",
  },
  {
    src: "fashion.png",
    href: "/fashion",
    title: "Fashion & Beauty",
  },
  {
    src: "vehicles.png",
    href: "/vehicles",
    title: "Vehicles",
  },
  {
    src: "furniture.png",
    href: "/furniture",
    title: "Furniture & Home Decorator",
  },
  {
    src: "led.webp",
    href: "/electronics",
    title: "Electronics & Home Appliances",
  },
  {
    src: "kids.png",
    href: "/kids",
    title: "Kids",
  },
  {
    src: "birds.png",
    href: "/birds",
    title: "Birds",
  },
];

export const CategoryText = () => {
  return (
    <div className="hidden md:flex justify-start items-center gap-5 p-2 text-sm">
      <Link href={"allcategories"}>
        <strong>All Categories</strong>
      </Link>
      {category_link.map(({ href, title }, i) => {
        return (
          <Link href={href} key={i}>
            <h1>{title.split(" ")[0]}</h1>
          </Link>
        );
      })}
    </div>
  );
};

export const CategoryTextWithImage = () => {
  const renderData = ({ href, src, title }: categoryLink, i: number) => (
    <Link
      href={href}
      key={i}
      className="flex flex-col items-center text-center gap-2 text-xs md:text-sm py-3"
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
    <div className="p-2 text-xl">
      <Link href={"allcategories"}>
        <strong>All Categories</strong>
      </Link>
      <div className="hidden sm:grid grid-cols-6 xl:grid-cols-8">
        {category_link.map((data, i) => renderData(data, i))}
      </div>
      <Carousel className="w-full sm:hidden ">
        <CarouselContent>
          {category_link.map((data, i) => (
            <CarouselItem key={i} className="basis-1/3">
              {renderData(data, i)}
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
      <CarouselNext /> */}
      </Carousel>
    </div>
  );
};
