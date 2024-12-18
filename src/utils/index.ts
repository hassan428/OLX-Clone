import {
  CategoryLink,
  LocationDataProps,
  Option,
  PasswordRules,
  PasswordStrength,
  RenderProductCardProps,
  RouteData,
  SubCategoryType,
} from "@/interfaces";
import {
  IoCameraOutline,
  IoCardOutline,
  IoChatbubbleOutline,
  IoEyeOutline,
  IoHeartOutline,
  IoHelpCircleOutline,
  IoLogOutOutline,
  IoNewspaperOutline,
  IoNotificationsOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { Moon } from "lucide-react";
import zxcvbn from "zxcvbn";

export const minYear: number = 1950;

export const validateYear = (year: string): boolean =>
  +year >= minYear && +year <= new Date().getFullYear();

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phoneNum: string): boolean => {
  const phoneRegex = /^3\d{9}$/;
  console.log("phoneNum", phoneNum);
  console.log("phoneRegex", phoneRegex);
  console.log("phoneRegex.test(phoneNum)", phoneRegex.test(phoneNum));
  return phoneRegex.test(phoneNum);
};

export const isNumber = (value: string): boolean => {
  const numRegix = /^[0-9]*$/;
  return numRegix.test(value);
};

export const validatePassword = (password: string): PasswordRules => {
  return {
    hasMinLength: /.{8,}/.test(password),
    hasNumber: /\d/.test(password),
    hasSpecialChar: /[\W_]/.test(password),
    hasLetter: /[a-zA-Z]/.test(password),
  };
};

export const checkPasswordStrength = (
  password: string
): PasswordStrength | null => {
  const { score } = zxcvbn(password);
  switch (score) {
    case 0:
      return null;
    case 1:
      return { text: "Weak", value: 25 };
    case 2:
      return { text: "Medium", value: 50 };
    case 3:
      return { text: "Strong", value: 75 };
    case 4:
      return { text: "Very Strong", value: 100 };
  }
};

export const formatPrice = (num: number): string => {
  if (num >= 10000000) {
    // Convert to Crores
    return `${(num / 10000000).toFixed(1)} Crore`;
  } else if (num >= 100000) {
    // Convert to Lakhs
    return `${(num / 100000).toFixed(1)} Lac`;
  } else if (num >= 1000) {
    // Convert to Thousands
    return `${(num / 1000).toFixed(1)} Thousand`;
  } else {
    return num.toString(); // Keep as is for smaller numbers
  }
};

export const isError = (obj: any, errorObj: boolean = false): boolean => {
  return Object.values(obj).some((val) => {
    if (errorObj) {
      return val !== undefined && val !== "" && val !== null;
    } else {
      return val === undefined || val === "" || val === null;
    }
  });
};

export const minPriceHandle = (subCategory?: SubCategoryType): number => {
  const minPriceConfig: Record<SubCategoryType, number> = {
    Tablets: 3000,
    Mobiles: 1500,
    Makeup: 100,
    Footwear: 300,
    "Other Fashion": 200,
    Bikes: 8000,
    Cars: 40000,
    "Rickshaw & Chingchi": 25000,
    "Living Room Furniture": 1500,
    "Bedroom Furniture": 3000,
    "Office Furniture": 2000,
    "Home Decor": 50,
    "Other Furniture": 500,
    "Computers & Accessories": 1000,
    Games: 200,
    "Televisions & Accessories": 4000,
    Audio: 800,
    "Home Appliances": 1000,
    "Other Electronics": 800,
    Cats: 500,
    Hens: 150,
    Dogs: 2000,
    Parrots: 400,
    Pigeons: 150,
    "Other Birds & Animals": 200,
    Rabbits: 300,
    "Buses and Vans": 15000,
    "Other Vehicles": 8000,
    "Kid's Fashion": 150,
    "Women's Fashion": 300,
    Accessories: 50,
    Jewellery: 200,
    Clothes: 150,
    "Smart Watches": 1000,
    "Tables & Dining": 1500,
    "Garden & Outdoor": 300,
    "Bathroom Accessories": 50,
    "Men's Fashion": 300,
    "Beds & Wardrobes": 2500,
    "Sofa & Chairs": 3000,
  };

  return (subCategory && minPriceConfig[subCategory]) || 0;
};

export const genderData: Option[] = ["Male", "Female", "Others"].map((label) =>
  createOption(label)
);

export const location_of_pakistan: LocationDataProps[] = [
  {
    province: createOption("Over All, Pakistan", "all"),
  },
  {
    province: createOption("Sindh"),
    cities: ["Karachi", "Hyderabad", "Sukkur"].map((label) =>
      createOption(label)
    ),
  },
  {
    province: createOption("Punjab"),
    cities: ["Lahore", "Rawalpindi", "Faisalabad"].map((label) =>
      createOption(label)
    ),
  },
  {
    province: createOption("Balochistan"),
    cities: ["Quetta", "Gwadar"].map((label) => createOption(label)),
  },
  {
    province: createOption("Khyber Pakhtunkhwa", "kpk"),
    cities: ["Peshawar", "Abbottabad"].map((label) => createOption(label)),
  },
];

export const category_link: CategoryLink[] = [
  {
    src: "mobiles.png",
    href: "mobiles-tablets",
    title: "Mobiles & Tablets",
    subCategories: [
      {
        href: "tablets",
        title: "Tablets",
      },
      {
        href: "mobiles",
        title: "Mobiles",
      },
      {
        href: "accessories",
        title: "Accessories",
      },
      {
        href: "smart-watches",
        title: "Smart Watches",
      },
    ],
  },
  {
    src: "fashion.png",
    href: "fashion",
    title: "Fashion & Beauty",
    subCategories: [
      {
        href: "men",
        title: "Men's Fashion",
      },
      {
        href: "women",
        title: "Women's Fashion",
      },
      {
        href: "kids",
        title: "Kid's Fashion",
      },
      {
        href: "clothes",
        title: "Clothes",
      },
      {
        href: "jewellery",
        title: "Jewellery",
      },
      {
        href: "makeup",
        title: "Makeup",
      },
      {
        href: "footwear",
        title: "Footwear",
      },
      {
        href: "other-fashion",
        title: "Other Fashion",
      },
    ],
  },
  {
    src: "vehicles.png",
    href: "vehicles",
    title: "Vehicles",
    subCategories: [
      {
        href: "bikes",
        title: "Bikes",
      },
      {
        href: "cars",
        title: "Cars",
      },
      {
        href: "rickshaw-&-chingchi",
        title: "Rickshaw & Chingchi",
      },
      {
        href: "buses-vans",
        title: "Buses and Vans",
      },
      {
        href: "other-vehicles",
        title: "Other Vehicles",
      },
    ],
  },
  {
    src: "furniture.png",
    href: "furniture",
    title: "Furniture & Home Decorator",
    subCategories: [
      {
        href: "living-room",
        title: "Living Room Furniture",
      },
      {
        href: "sofa-&-chairs",
        title: "Sofa & Chairs",
      },
      {
        href: "beds-&-wardrobes",
        title: "Beds & Wardrobes",
      },
      {
        href: "garden-&-outdoor",
        title: "Garden & Outdoor",
      },
      {
        href: "bathroom-accessories",
        title: "Bathroom Accessories",
      },
      {
        href: "tables-&-dining",
        title: "Tables & Dining",
      },
      {
        href: "office",
        title: "Office Furniture",
      },
      {
        href: "home-decor",
        title: "Home Decor",
      },
      {
        href: "other-furniture",
        title: "Other Furniture",
      },
    ],
  },
  {
    src: "led.webp",
    href: "electronics",
    title: "Electronics & Home Appliances",
    subCategories: [
      {
        href: "computers-&-accessories",
        title: "Computers & Accessories",
      },
      {
        href: "games",
        title: "Games",
      },
      {
        href: "televisions-&-accessories",
        title: "Televisions & Accessories",
      },
      {
        href: "audio",
        title: "Audio",
      },
      {
        href: "home-appliances",
        title: "Home Appliances",
      },
      {
        href: "other-electronics",
        title: "Other Electronics",
      },
    ],
  },
  {
    src: "birds.png",
    href: "birds-&-animals",
    title: "Birds & Animals",
    subCategories: [
      {
        href: "cats",
        title: "Cats",
      },
      {
        href: "dogs",
        title: "Dogs",
      },
      {
        href: "rabbits",
        title: "Rabbits",
      },
      {
        href: "parrots",
        title: "Parrots",
      },
      {
        href: "hens",
        title: "Hens",
      },
      {
        href: "pigeons",
        title: "Pigeons",
      },
      {
        href: "other-birds-&-animals",
        title: "Other Birds & Animals",
      },
    ],
  },
];

export function createOption(label: string, value?: string): Option {
  return { label, value: value || label.split(" ").join("_").toLowerCase() };
}

export const isLogged: boolean = false;

export const common_route_data: RouteData[] = [
  {
    title: "Start selling",
    Icon: IoCameraOutline,
    href: "/post",
  },
  {
    title: "My ads",
    Icon: IoNewspaperOutline,
    href: "/myads",
  },
  {
    title: "Chat",
    Icon: IoChatbubbleOutline,
    href: "/chat",
  },
];

export const route_data: RouteData[] = isLogged
  ? [
      ...common_route_data,
      {
        href: "/myfavourites",
        title: "Favourites & Saved searches",
        Icon: IoHeartOutline,
      },
      {
        href: "/profile/id",
        title: "Public Profile",
        Icon: IoEyeOutline,
      },
      {
        href: "/payments",
        title: "Buy Discounted Packages",
        Icon: IoNewspaperOutline,
      },
      {
        href: "/myorders",
        title: "Bought Packages & Billing",
        Icon: IoCardOutline,
      },
      {
        title: "Notifications",
        Icon: IoNotificationsOutline,
        href: "/notifications",
      },
      {
        title: "Help",
        Icon: IoHelpCircleOutline,
        href: "/help",
        className: "border-t",
      },
      {
        href: "/setting",
        title: "Setting",
        Icon: IoSettingsOutline,
        className: "border-b",
      },
      { href: "/logout", title: "Logout", Icon: IoLogOutOutline },
    ]
  : [
      ...common_route_data,
      {
        title: "Help",
        Icon: IoHelpCircleOutline,
        href: "/help",
        className: "border-y",
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
    href: "mobiles-tablets",
    heading: "Mobiles & Tablets",
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
