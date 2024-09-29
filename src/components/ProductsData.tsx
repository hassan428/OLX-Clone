import React from "react";
import {
  RenderMoreProductCard,
  RenderProductCard,
} from "@/components/RenderProductCard";
import { ProductCardProps, RenderProductCardProps } from "@/interfaces";

let id = 1;
export const ProductCardData = () => {
  const data: RenderProductCardProps[] = [
    {
      heading: "Mobiles",
      href: "mobiles",
      cardData: [
        {
          location: "Karimabad Karachi",
          price: "Rs. 1,500",
          src: "/assets/images/logo/Loxlight.png",
          time: "4 days ago",
          title: "Suzuki Alto 1993 Model For Sale",
          id: (id++).toString(),
        },
        {
          location: "Bahria Town Karachi",
          price: "Rs. 1,900",
          src: "/assets/images/category/led.webp",
          time: "4 weeks ago",
          title: "LED Alto Model For Sale",
          id: (id++).toString(),
        },
        {
          location: "Gulshan Karachi",
          price: "Rs. 2,500",
          src: "/assets/images/products/mobile.jfif",
          time: "4 months ago",
          title: "iPhone Max Pro Model For Sale",
          id: (id++).toString(),
        },
        {
          location: "Karimabad Karachi",
          price: "Rs. 1,500",
          src: "/assets/images/category/led.webp",
          time: "4 days ago",
          title: "Suzuki Alto 1993 Model For Sale",
          id: (id++).toString(),
        },
        {
          location: "Karimabad Karachi",
          price: "Rs. 1,500",
          src: "/assets/images/logo/Loxlight.png",
          time: "4 days ago",
          title: "Suzuki Alto 1993 Model For Sale",
          id: (id++).toString(),
        },
        {
          location: "Karimabad Karachi",
          price: "Rs. 1,500",
          src: "/assets/images/products/mobile.jfif",
          time: "4 days ago",
          title:
            "Suzuki Alto 1993 Model For SaleSuzuki Alto 1993 Model For Sale",
          id: (id++).toString(),
        },
      ],
    },
    {
      heading: "Furniture",
      href: "furniture",
      cardData: [
        {
          location: "Bahria Town Karachi",
          price: "Rs. 1,900",
          src: "/assets/images/category/led.webp",
          time: "4 weeks ago",
          title: "LED Alto Model For Sale",
          id: (id++).toString(),
        },
        {
          location: "Gulshan Karachi",
          price: "Rs. 2,500",
          src: "/assets/images/products/mobile.jfif",
          time: "4 months ago",
          title: "iPhone Max Pro Model For Sale",
          id: (id++).toString(),
        },
        {
          location: "Karimabad Karachi",
          price: "Rs. 1,500",
          src: "/assets/images/category/led.webp",
          time: "4 days ago",
          title: "Suzuki Alto 1993 Model For Sale",
          id: (id++).toString(),
        },
        {
          location: "Karimabad Karachi",
          price: "Rs. 1,500",
          src: "/assets/images/logo/Loxlight.png",
          time: "4 days ago",
          title: "Suzuki Alto 1993 Model For Sale",
          id: (id++).toString(),
        },
        {
          location: "Karimabad Karachi",
          price: "Rs. 1,500",
          src: "/assets/images/logo/Loxlight.png",
          time: "4 days ago",
          title: "Suzuki Alto 1993 Model For Sale",
          id: (id++).toString(),
        },
        {
          location: "Karimabad Karachi",
          price: "Rs. 1,500",
          src: "/assets/images/products/mobile.jfif",
          time: "4 days ago",
          title:
            "Suzuki Alto 1993 Model For SaleSuzuki Alto 1993 Model For Sale",
          id: (id++).toString(),
        },
      ],
    },
    {
      heading: "Fashion",
      href: "fashion",
      cardData: [
        {
          location: "Karimabad Karachi",
          price: "Rs. 1,500",
          src: "/assets/images/logo/Loxlight.png",
          time: "4 days ago",
          title: "Suzuki Alto 1993 Model For Sale",
          id: (id++).toString(),
        },
        {
          location: "Gulshan Karachi",
          price: "Rs. 2,500",
          src: "/assets/images/products/mobile.jfif",
          time: "4 months ago",
          title: "iPhone Max Pro Model For Sale",
          id: (id++).toString(),
        },
        {
          location: "Karimabad Karachi",
          price: "Rs. 1,500",
          src: "/assets/images/category/led.webp",
          time: "4 days ago",
          title: "Suzuki Alto 1993 Model For Sale",
          id: (id++).toString(),
        },
        {
          location: "Bahria Town Karachi",
          price: "Rs. 1,900",
          src: "/assets/images/category/led.webp",
          time: "4 weeks ago",
          title: "LED Alto Model For Sale",
          id: (id++).toString(),
        },
        {
          location: "Karimabad Karachi",
          price: "Rs. 1,500",
          src: "/assets/images/logo/Loxlight.png",
          time: "4 days ago",
          title: "Suzuki Alto 1993 Model For Sale",
          id: (id++).toString(),
        },
        {
          location: "Karimabad Karachi",
          price: "Rs. 1,500",
          src: "/assets/images/products/mobile.jfif",
          time: "4 days ago",
          title:
            "Suzuki Alto 1993 Model For SaleSuzuki Alto 1993 Model For Sale",
          id: (id++).toString(),
        },
      ],
    },
  ];

  return data.map((data, i) => <RenderProductCard key={i} {...data} />);
};

export const MoreProductCardData = () => {
  const data: ProductCardProps[] = [
    {
      location: "Karimabad Karachi",
      price: "Rs. 1,500",
      src: "/assets/images/logo/Loxlight.png",
      time: "4 days ago",
      title: "Suzuki Alto 1993 Model For Sale",
      id: (id++).toString(),
    },
    {
      location: "Karimabad Karachi",
      price: "Rs. 1,500",
      src: "/assets/images/logo/Loxlight.png",
      time: "4 days ago",
      title: "Suzuki Alto 1993 Model For Sale",
      id: (id++).toString(),
    },
    {
      location: "Gulshan Karachi",
      price: "Rs. 2,500",
      src: "/assets/images/products/mobile.jfif",
      time: "4 months ago",
      title: "iPhone Max Pro Model For Sale",
      id: (id++).toString(),
    },
    {
      location: "Karimabad Karachi",
      price: "Rs. 1,500",
      src: "/assets/images/category/led.webp",
      time: "4 days ago",
      title: "Suzuki Alto 1993 Model For Sale",
      id: (id++).toString(),
    },
    {
      location: "Bahria Town Karachi",
      price: "Rs. 1,900",
      src: "/assets/images/category/led.webp",
      time: "4 weeks ago",
      title: "LED Alto Model For Sale",
      id: (id++).toString(),
    },
    {
      location: "Karimabad Karachi",
      price: "Rs. 1,500",
      src: "/assets/images/logo/Loxlight.png",
      time: "4 days ago",
      title: "Suzuki Alto 1993 Model For Sale",
      id: (id++).toString(),
    },
    {
      location: "Karimabad Karachi",
      price: "Rs. 1,500",
      src: "/assets/images/products/mobile.jfif",
      time: "4 days ago",
      title: "Suzuki Alto 1993 Model For SaleSuzuki Alto 1993 Model For Sale",
      id: (id++).toString(),
    },
  ];

  return <RenderMoreProductCard {...data} />;
};
