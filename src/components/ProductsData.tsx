import React from "react";
import {
  RenderMoreProductCard,
  RenderProductCard,
} from "@/components/RenderProductCard";
import { ProductCardProps, RenderProductCardProps } from "@/interfaces";

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
          id: "1",
        },
        {
          location: "Bahria Town Karachi",
          price: "Rs. 1,900",
          src: "/assets/images/category/led.webp",
          time: "4 weeks ago",
          title: "LED Alto Model For Sale",
          id: "2",
        },
        {
          location: "Gulshan Karachi",
          price: "Rs. 2,500",
          src: "/assets/images/products/mobile.jfif",
          time: "4 months ago",
          title: "iPhone Max Pro Model For Sale",
          id: "1",
        },
        {
          location: "Karimabad Karachi",
          price: "Rs. 1,500",
          src: "/assets/images/category/led.webp",
          time: "4 days ago",
          title: "Suzuki Alto 1993 Model For Sale",
          id: "1",
        },
        {
          location: "Karimabad Karachi",
          price: "Rs. 1,500",
          src: "/assets/images/logo/Loxlight.png",
          time: "4 days ago",
          title: "Suzuki Alto 1993 Model For Sale",
          id: "1",
        },
        {
          location: "Karimabad Karachi",
          price: "Rs. 1,500",
          src: "/assets/images/products/mobile.jfif",
          time: "4 days ago",
          title:
            "Suzuki Alto 1993 Model For SaleSuzuki Alto 1993 Model For Sale",
          id: "1",
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
          id: "2",
        },
        {
          location: "Gulshan Karachi",
          price: "Rs. 2,500",
          src: "/assets/images/products/mobile.jfif",
          time: "4 months ago",
          title: "iPhone Max Pro Model For Sale",
          id: "1",
        },
        {
          location: "Karimabad Karachi",
          price: "Rs. 1,500",
          src: "/assets/images/category/led.webp",
          time: "4 days ago",
          title: "Suzuki Alto 1993 Model For Sale",
          id: "1",
        },
        {
          location: "Karimabad Karachi",
          price: "Rs. 1,500",
          src: "/assets/images/logo/Loxlight.png",
          time: "4 days ago",
          title: "Suzuki Alto 1993 Model For Sale",
          id: "1",
        },
        {
          location: "Karimabad Karachi",
          price: "Rs. 1,500",
          src: "/assets/images/logo/Loxlight.png",
          time: "4 days ago",
          title: "Suzuki Alto 1993 Model For Sale",
          id: "1",
        },
        {
          location: "Karimabad Karachi",
          price: "Rs. 1,500",
          src: "/assets/images/products/mobile.jfif",
          time: "4 days ago",
          title:
            "Suzuki Alto 1993 Model For SaleSuzuki Alto 1993 Model For Sale",
          id: "1",
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
          id: "1",
        },
        {
          location: "Gulshan Karachi",
          price: "Rs. 2,500",
          src: "/assets/images/products/mobile.jfif",
          time: "4 months ago",
          title: "iPhone Max Pro Model For Sale",
          id: "1",
        },
        {
          location: "Karimabad Karachi",
          price: "Rs. 1,500",
          src: "/assets/images/category/led.webp",
          time: "4 days ago",
          title: "Suzuki Alto 1993 Model For Sale",
          id: "1",
        },
        {
          location: "Bahria Town Karachi",
          price: "Rs. 1,900",
          src: "/assets/images/category/led.webp",
          time: "4 weeks ago",
          title: "LED Alto Model For Sale",
          id: "2",
        },
        {
          location: "Karimabad Karachi",
          price: "Rs. 1,500",
          src: "/assets/images/logo/Loxlight.png",
          time: "4 days ago",
          title: "Suzuki Alto 1993 Model For Sale",
          id: "1",
        },
        {
          location: "Karimabad Karachi",
          price: "Rs. 1,500",
          src: "/assets/images/products/mobile.jfif",
          time: "4 days ago",
          title:
            "Suzuki Alto 1993 Model For SaleSuzuki Alto 1993 Model For Sale",
          id: "1",
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
      id: "1",
    },
    {
      location: "Gulshan Karachi",
      price: "Rs. 2,500",
      src: "/assets/images/products/mobile.jfif",
      time: "4 months ago",
      title: "iPhone Max Pro Model For Sale",
      id: "1",
    },
    {
      location: "Karimabad Karachi",
      price: "Rs. 1,500",
      src: "/assets/images/category/led.webp",
      time: "4 days ago",
      title: "Suzuki Alto 1993 Model For Sale",
      id: "1",
    },
    {
      location: "Bahria Town Karachi",
      price: "Rs. 1,900",
      src: "/assets/images/category/led.webp",
      time: "4 weeks ago",
      title: "LED Alto Model For Sale",
      id: "2",
    },
    {
      location: "Karimabad Karachi",
      price: "Rs. 1,500",
      src: "/assets/images/logo/Loxlight.png",
      time: "4 days ago",
      title: "Suzuki Alto 1993 Model For Sale",
      id: "1",
    },
    {
      location: "Karimabad Karachi",
      price: "Rs. 1,500",
      src: "/assets/images/products/mobile.jfif",
      time: "4 days ago",
      title: "Suzuki Alto 1993 Model For SaleSuzuki Alto 1993 Model For Sale",
      id: "1",
    },
  ];

  return <RenderMoreProductCard {...data} />;
};
