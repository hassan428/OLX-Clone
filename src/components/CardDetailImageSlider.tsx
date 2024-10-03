"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { CardDetailsImage } from "@/interfaces";
import { Camera } from "lucide-react";

export function CardDetailImageSlider({ src }: CardDetailsImage) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      setApi={setApi}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="items-center text-center">
        {src.map((imageSrc, i) => (
          <CarouselItem
            key={i}
            className="flex justify-center items-center h-full w-full"
          >
            <div className="flex justify-center items-center h-56 sm:h-64">
              <Image
                src={imageSrc}
                width={1000}
                height={1000}
                alt="sliderImage"
                priority={true}
                className="object-contain w-full h-full"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="bg-background text-sm border border-foreground p-1 rounded-full flex items-center gap-1 absolute bottom-2 right-2">
        <Camera />
        <h1>{`${current} / ${count}`}</h1>
      </div>
    </Carousel>
  );
}
