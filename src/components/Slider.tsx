"use client";
import React, { useRef, useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { CustomImageProps } from "@/interfaces";
import axios from "axios";
import Link from "next/link";

export function Slider() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const [slider, set_slider] = useState<CustomImageProps[]>([]);

  const getDataHandle = async () => {
    const res = await axios.get(`/api/sliderImage`);
    // console.log("res", res.data.data);

    set_slider([...slider, ...res.data.data]);
  };
  useEffect(() => {
    getDataHandle();
  }, []);

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {slider.map(({ src, href }, i) => (
          <CarouselItem key={i}>
            <Link href={href} className="p-1">
              <Image
                src={src}
                width={1000}
                height={1000}
                alt="sliderImage"
                priority={true}
                className="w-full h-32 sm:h-52 xl:h-56 object-fill"
              />
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* <CarouselPrevious /> */}
      {/* <CarouselNext /> */}
    </Carousel>
  );
}
