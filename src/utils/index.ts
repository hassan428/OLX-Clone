import { CategoryLink, RenderProductCardProps } from "@/interfaces";

export const category_link: CategoryLink[] = [
  {
    src: "mobiles.png",
    href: "mobiles",
    title: "Mobiles",
  },
  {
    src: "fashion.png",
    href: "fashion",
    title: "Fashion & Beauty",
  },
  {
    src: "vehicles.png",
    href: "vehicles",
    title: "Vehicles",
  },
  {
    src: "furniture.png",
    href: "furniture",
    title: "Furniture & Home Decorator",
  },
  {
    src: "led.webp",
    href: "electronics",
    title: "Electronics & Home Appliances",
  },
  {
    src: "kids.png",
    href: "kids",
    title: "Kids",
  },
  {
    src: "birds.png",
    href: "birds",
    title: "Birds",
  },
];

let id = 1;

export const data: RenderProductCardProps[] = [
  {
    heading: "Vehicles",
    href: "vehicles",
    cardData: [
      {
        location: "Karimabad Karachi",
        price: "Rs. 1,800,000",
        src: [
          "/assets/images/logo/Loxlight.png",
          "/assets/images/products/mobile.jfif",
          "/assets/images/products/mobileportrait.jfif",
          "/assets/images/sliderImage.jfif",
        ],
        description:
          "Toyota Corolla 2018 Model For Sale consectetur adipisicing elit. Ut itaqueaccusamus cupiditate vel. Voluptates qui aliquam fugit possimuToyota Corolla 2018 Model For Sale dolores sunt dolorem, exercitationem nemo placeat ut.Delectus quia officia pariatur labore ipsa at, porro et laudantiumab cupiditate explicabo, magnam provident numquam voluptates!",
        time: "2 days ago",
        productOtherDetails: { condition: "Used" },

        title: "Toyota Corolla 2018 Model For Sale",
        id: (id++).toString(),
      },
      {
        location: "Bahria Town Karachi",
        price: "Rs. 900,000",
        src: [
          "/assets/images/products/mobileportrait.jfif",
          "/assets/images/sliderImage.jfif",
        ],
        description:
          "Honda Civic 2016 For Sale sit amet, consectetur adipisicing elit. Ut itaqueaccusamus cupiditate vel. Voluptates qui aliquam fugit possimus minima, cumque placeat. Honda Civic 2016 For Saleexercitationem nemo placeat ut.Delectus quia officia pariatur labore ipsa at, porro et laudantiumab cupiditate explicabo, magnam provident numquam voluptates!",

        time: "1 week ago",
        productOtherDetails: { condition: "New", type: "other" },
        title: "Honda Civic 2016 For Sale",
        id: (id++).toString(),
      },
      {
        location: "Bahria Town Karachi",
        price: "Rs. 900,000",
        src: [
          "/assets/images/products/mobile.jfif",
          "/assets/images/products/mobileportrait.jfif",
        ],
        description:
          "title Lorem ipsum dolor sit amet consectetr Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut itaqueaccusamus cupiditate vel. Voluptates qui aliquam fugit possimus minima, cumque placeat. Accusantium dolorum reprehenderitodit dolores sunt dolorem, exercitationem nemo placeat ut.Delectus quia officia pariatur labore ipsa at, porro et laudantiumab cupiditate explicabo, magnam provident numquam voluptates!",

        time: "1 week ago",
        productOtherDetails: { condition: "low", type: "best" },
        title: "Honda Civic 2016 For Sale",
        id: (id++).toString(),
      },
      {
        location: "Gulshan Karachi",
        price: "Rs. 600,000",
        src: ["/assets/images/sliderImage.jfif"],
        description:
          "title Lorem ipsum dolor sit amet consectetr Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut itaqueaccusamus cupiditate vel. Voluptates qui aliquam fugit possimus minima, cumque placeat. Accusantium dolorum reprehenderitodit dolores sunt dolorem, exercitationem nemo placeat ut.Delectus quia officia pariatur labore ipsa at, porro et laudantiumab cupiditate explicabo, magnam provident numquam voluptates!",

        time: "2 months ago",
        productOtherDetails: { condition: "Used" },
        title: "Suzuki Mehran 2008 For Sale",
        id: (id++).toString(),
      },
      {
        location: "North Nazimabad Karachi",
        price: "Rs. 2,000,000",
        src: ["/assets/images/logo/Loxlight.png"],
        description:
          "title Lorem ipsum dolor sit amet consectetr Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut itaqueaccusamus cupiditate vel. Voluptates qui aliquam fugit possimus minima, cumque placeat. Accusantium dolorum reprehenderitodit dolores sunt dolorem, exercitationem nemo placeat ut.Delectus quia officia pariatur labore ipsa at, porro et laudantiumab cupiditate explicabo, magnam provident numquam voluptates!",

        time: "3 weeks ago",
        productOtherDetails: { condition: "Used" },
        title: "Toyota Fortuner 2021 Model For Sale",
        id: (id++).toString(),
      },
    ],
  },
  {
    heading: "Furniture",
    href: "furniture",
    cardData: [
      {
        location: "Gulshan Karachi",
        price: "Rs. 25,000",
        src: [
          "/assets/images/logo/Loxlight.png",
          "/assets/images/products/mobile.jfif",
        ],
        description:
          "title Lorem ipsum dolor sit amet consectetr Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut itaqueaccusamus cupiditate vel. Voluptates qui aliquam fugit possimus minima, cumque placeat. Accusantium dolorum reprehenderitodit dolores sunt dolorem, exercitationem nemo placeat ut.Delectus quia officia pariatur labore ipsa at, porro et laudantiumab cupiditate explicabo, magnam provident numquam voluptates!",

        time: "3 weeks ago",
        productOtherDetails: { condition: "Used" },
        title: "Wooden King Size Bed For Sale",
        id: (id++).toString(),
      },
      {
        location: "Clifton Karachi",
        price: "Rs. 15,000",
        src: [
          "/assets/images/logo/Loxlight.png",
          "/assets/images/products/mobile.jfif",
        ],
        description:
          "title Lorem ipsum dolor sit amet consectetr Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut itaqueaccusamus cupiditate vel. Voluptates qui aliquam fugit possimus minima, cumque placeat. Accusantium dolorum reprehenderitodit dolores sunt dolorem, exercitationem nemo placeat ut.Delectus quia officia pariatur labore ipsa at, porro et laudantiumab cupiditate explicabo, magnam provident numquam voluptates!",

        time: "5 days ago",
        productOtherDetails: { condition: "Used" },
        title: "Dining Table Set (6 Chairs)",
        id: (id++).toString(),
      },
      {
        location: "DHA Karachi",
        price: "Rs. 8,000",
        src: ["/assets/images/products/mobile.jfif"],
        description:
          "title Lorem ipsum dolor sit amet consectetr Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut itaqueaccusamus cupiditate vel. Voluptates qui aliquam fugit possimus minima, cumque placeat. Accusantium dolorum reprehenderitodit dolores sunt dolorem, exercitationem nemo placeat ut.Delectus quia officia pariatur labore ipsa at, porro et laudantiumab cupiditate explicabo, magnam provident numquam voluptates!",

        time: "2 weeks ago",
        productOtherDetails: { condition: "Used" },
        title: "Office Chair for Sale",
        id: (id++).toString(),
      },
      {
        location: "DHA Karachi",
        price: "Rs. 8,000",
        src: ["/assets/images/products/mobileportrait.jfif"],
        description:
          "title Lorem ipsum dolor sit amet consectetr Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut itaqueaccusamus cupiditate vel. Voluptates qui aliquam fugit possimus minima, cumque placeat. Accusantium dolorum reprehenderitodit dolores sunt dolorem, exercitationem nemo placeat ut.Delectus quia officia pariatur labore ipsa at, porro et laudantiumab cupiditate explicabo, magnam provident numquam voluptates!",

        time: "2 weeks ago",
        productOtherDetails: { condition: "Used" },
        title: "Office Chair for Sale",
        id: (id++).toString(),
      },
      {
        location: "North Karachi",
        price: "Rs. 10,000",
        src: [
          "/assets/images/logo/Loxlight.png",
          "/assets/images/products/mobile.jfif",
          "/assets/images/products/mobileportrait.jfif",
        ],
        description:
          "title Lorem ipsum dolor sit amet consectetr Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut itaqueaccusamus cupiditate vel. Voluptates qui aliquam fugit possimus minima, cumque placeat. Accusantium dolorum reprehenderitodit dolores sunt dolorem, exercitationem nemo placeat ut.Delectus quia officia pariatur labore ipsa at, porro et laudantiumab cupiditate explicabo, magnam provident numquam voluptates!",

        time: "1 week ago",
        productOtherDetails: { condition: "Used" },
        title: "Sofa Set (3+1+1)",
        id: (id++).toString(),
      },
    ],
  },
  {
    heading: "Electronics",
    href: "electronics",
    cardData: [
      {
        location: "Bahria Town Karachi",
        price: "Rs. 55,000",
        src: ["/assets/images/products/mobile.jfif"],
        description:
          "title Lorem ipsum dolor sit amet consectetr Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut itaqueaccusamus cupiditate vel. Voluptates qui aliquam fugit possimus minima, cumque placeat. Accusantium dolorum reprehenderitodit dolores sunt dolorem, exercitationem nemo placeat ut.Delectus quia officia pariatur labore ipsa at, porro et laudantiumab cupiditate explicabo, magnam provident numquam voluptates!",

        time: "1 week ago",
        productOtherDetails: { condition: "Used" },
        title: "Samsung LED 55 inches",
        id: (id++).toString(),
      },
      {
        location: "Gulshan Karachi",
        price: "Rs. 35,000",
        src: [
          "/assets/images/logo/Loxlight.png",
          "/assets/images/products/mobile.jfif",
        ],
        description:
          "title Lorem ipsum dolor sit amet consectetr Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut itaqueaccusamus cupiditate vel. Voluptates qui aliquam fugit possimus minima, cumque placeat. Accusantium dolorum reprehenderitodit dolores sunt dolorem, exercitationem nemo placeat ut.Delectus quia officia pariatur labore ipsa at, porro et laudantiumab cupiditate explicabo, magnam provident numquam voluptates!",

        time: "1 month ago",
        productOtherDetails: { condition: "Used" },
        title: "LG Washing Machine 8kg",
        id: (id++).toString(),
      },
      {
        location: "Nazimabad Karachi",
        price: "Rs. 12,000",
        src: ["/assets/images/products/mobile.jfif"],
        description:
          "title Lorem ipsum dolor sit amet consectetr Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut itaqueaccusamus cupiditate vel. Voluptates qui aliquam fugit possimus minima, cumque placeat. Accusantium dolorum reprehenderitodit dolores sunt dolorem, exercitationem nemo placeat ut.Delectus quia officia pariatur labore ipsa at, porro et laudantiumab cupiditate explicabo, magnam provident numquam voluptates!",

        time: "2 weeks ago",
        productOtherDetails: { condition: "Used" },
        title: "HP Laptop 15.6 inch",
        id: (id++).toString(),
      },
      {
        location: "Clifton Karachi",
        price: "Rs. 40,000",
        src: [
          "/assets/images/logo/Loxlight.png",
          "/assets/images/products/mobile.jfif",
        ],
        description:
          "title Lorem ipsum dolor sit amet consectetr Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut itaqueaccusamus cupiditate vel. Voluptates qui aliquam fugit possimus minima, cumque placeat. Accusantium dolorum reprehenderitodit dolores sunt dolorem, exercitationem nemo placeat ut.Delectus quia officia pariatur labore ipsa at, porro et laudantiumab cupiditate explicabo, magnam provident numquam voluptates!",

        time: "3 days ago",
        productOtherDetails: { condition: "Used" },
        title: "Sony Home Theater System",
        id: (id++).toString(),
      },
    ],
  },
  {
    href: "mobiles",
    heading: "Mobiles",
    cardData: [
      {
        location: "Clifton Karachi",
        price: "Rs. 3,500",
        src: [
          "/assets/images/logo/Loxlight.png",
          "/assets/images/products/mobile.jfif",
        ],
        description:
          "title Lorem ipsum dolor sit amet consectetr Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut itaqueaccusamus cupiditate vel. Voluptates qui aliquam fugit possimus minima, cumque placeat. Accusantium dolorum reprehenderitodit dolores sunt dolorem, exercitationem nemo placeat ut.Delectus quia officia pariatur labore ipsa at, porro et laudantiumab cupiditate explicabo, magnam provident numquam voluptates!",

        time: "3 days ago",
        productOtherDetails: { condition: "Used" },
        title: "Vivo Y30",
        id: (id++).toString(),
      },
      {
        location: "DHA Karachi",
        price: "Rs. 1,500",
        src: [
          "/assets/images/logo/Loxlight.png",
          "/assets/images/products/mobile.jfif",
        ],
        description:
          "title Lorem ipsum dolor sit amet consectetr Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut itaqueaccusamus cupiditate vel. Voluptates qui aliquam fugit possimus minima, cumque placeat. Accusantium dolorum reprehenderitodit dolores sunt dolorem, exercitationem nemo placeat ut.Delectus quia officia pariatur labore ipsa at, porro et laudantiumab cupiditate explicabo, magnam provident numquam voluptates!",

        time: "1 week ago",
        productOtherDetails: { condition: "Used" },
        title: "Samsung Galaxy j7",
        id: (id++).toString(),
      },
      {
        location: "Saddar Karachi",
        price: "Rs. 800",
        src: [
          "/assets/images/logo/Loxlight.png",
          "/assets/images/products/mobile.jfif",
        ],
        description:
          "title Lorem ipsum dolor sit amet consectetr Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut itaqueaccusamus cupiditate vel. Voluptates qui aliquam fugit possimus minima, cumque placeat. Accusantium dolorum reprehenderitodit dolores sunt dolorem, exercitationem nemo placeat ut.Delectus quia officia pariatur labore ipsa at, porro et laudantiumab cupiditate explicabo, magnam provident numquam voluptates!",

        time: "2 weeks ago",
        productOtherDetails: { condition: "Used" },
        title: "IPhone 12 pro ",
        id: (id++).toString(),
      },
      {
        location: "Gulshan Karachi",
        price: "Rs. 1,000",
        src: [
          "/assets/images/logo/Loxlight.png",
          "/assets/images/products/mobile.jfif",
        ],
        description:
          "title Lorem ipsum dolor sit amet consectetr Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut itaqueaccusamus cupiditate vel. Voluptates qui aliquam fugit possimus minima, cumque placeat. Accusantium dolorum reprehenderitodit dolores sunt dolorem, exercitationem nemo placeat ut.Delectus quia officia pariatur labore ipsa at, porro et laudantiumab cupiditate explicabo, magnam provident numquam voluptates!",

        time: "3 weeks ago",
        productOtherDetails: { condition: "Used" },
        title: "Vivo y100 5G",
        id: (id++).toString(),
      },
    ],
  },
  {
    href: "fashion",
    heading: "Fashion & Beauty",
    cardData: [
      {
        location: "Clifton Karachi",
        price: "Rs. 3,500",
        src: ["/assets/images/products/mobile.jfif"],
        description:
          "title Lorem ipsum dolor sit amet consectetr Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut itaqueaccusamus cupiditate vel. Voluptates qui aliquam fugit possimus minima, cumque placeat. Accusantium dolorum reprehenderitodit dolores sunt dolorem, exercitationem nemo placeat ut.Delectus quia officia pariatur labore ipsa at, porro et laudantiumab cupiditate explicabo, magnam provident numquam voluptates!",

        time: "3 days ago",
        productOtherDetails: { condition: "Used" },
        title: "Men's Leather Jacket",
        id: (id++).toString(),
      },
      {
        location: "DHA Karachi",
        price: "Rs. 1,500",
        src: ["/assets/images/products/mobile.jfif"],
        description:
          "title Lorem ipsum dolor sit amet consectetr Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut itaqueaccusamus cupiditate vel. Voluptates qui aliquam fugit possimus minima, cumque placeat. Accusantium dolorum reprehenderitodit dolores sunt dolorem, exercitationem nemo placeat ut.Delectus quia officia pariatur labore ipsa at, porro et laudantiumab cupiditate explicabo, magnam provident numquam voluptates!",

        time: "1 week ago",
        productOtherDetails: { condition: "Used" },
        title: "Women's Casual Dress",
        id: (id++).toString(),
      },
      {
        location: "Saddar Karachi",
        price: "Rs. 800",
        src: [
          "/assets/images/logo/Loxlight.png",
          "/assets/images/products/mobile.jfif",
        ],
        description:
          "title Lorem ipsum dolor sit amet consectetr Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut itaqueaccusamus cupiditate vel. Voluptates qui aliquam fugit possimus minima, cumque placeat. Accusantium dolorum reprehenderitodit dolores sunt dolorem, exercitationem nemo placeat ut.Delectus quia officia pariatur labore ipsa at, porro et laudantiumab cupiditate explicabo, magnam provident numquam voluptates!",

        time: "2 weeks ago",
        productOtherDetails: { condition: "Used" },
        title: "Kids Winter Sweater",
        id: (id++).toString(),
      },
      {
        location: "Gulshan Karachi",
        price: "Rs. 1,000",
        src: [
          "/assets/images/logo/Loxlight.png",
          "/assets/images/products/mobile.jfif",
        ],
        description:
          "title Lorem ipsum dolor sit amet consectetr Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut itaqueaccusamus cupiditate vel. Voluptates qui aliquam fugit possimus minima, cumque placeat. Accusantium dolorum reprehenderitodit dolores sunt dolorem, exercitationem nemo placeat ut.Delectus quia officia pariatur labore ipsa at, porro et laudantiumab cupiditate explicabo, magnam provident numquam voluptates!",

        time: "3 weeks ago",
        productOtherDetails: { condition: "Used" },
        title: "Ladies Shawl Collection",
        id: (id++).toString(),
      },
    ],
  },
];
