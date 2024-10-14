"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { SliderSrc } from "@/interfaces";

export function Slider() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const [slider_src, set_slider_src] = React.useState<SliderSrc[]>([]);

  React.useEffect(() => {
    set_slider_src([
      ...slider_src,
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuHCbHGd7D623E5XBmXkDJSQb0iTK5l3GtSQ&s",
      },
    ]);
  }, []);

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {slider_src.map((src, i) => (
          <CarouselItem key={i}>
            <div className="p-1">
              <Image
                {...src}
                width={1000}
                height={1000}
                alt="sliderImage"
                priority={true}
                className="w-full h-32 sm:h-48 xl:h-56 object-fill"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* <CarouselPrevious /> */}
      {/* <CarouselNext /> */}
    </Carousel>
  );
}
