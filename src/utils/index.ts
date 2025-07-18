import {
  CategoryLink,
  LocationDataProps,
  PasswordRules,
  PasswordStrength,
  MainCtgProductCardProps,
  RouteDataProps,
  SubCtgType,
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
  IoCarSportOutline,
} from "react-icons/io5";
import { FaMobileScreen } from "react-icons/fa6";
import zxcvbn from "zxcvbn";
export const minYear: number = 1950;

export const scrollToTop = () => {
  document.getElementById("top")?.scrollIntoView({
    behavior: "smooth",
  });
};

export const generateOtp = (): number =>
  Math.floor(100000 + Math.random() * 900000);

export const validateYear = (year: string): boolean =>
  +year >= minYear && +year <= new Date().getFullYear();

export const validateEmail = (email?: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return !!email && emailRegex.test(email);
};

export const validatePhone = (phoneNum?: string): boolean => {
  const phoneRegex = /^3\d{9}$/;
  return !!phoneNum && phoneRegex.test(phoneNum);
};

export const isNumber = (value: string): boolean => {
  const numRegix = /^[0-9]*$/;
  return numRegix.test(value);
};

export const validatePassword = (password?: string): PasswordRules => {
  return {
    hasMinLength: !!password && /.{8,}/.test(password),
    hasNumber: !!password && /\d/.test(password),
    hasSpecialChar: !!password && /[\W_]/.test(password),
    hasLetter: !!password && /[a-zA-Z]/.test(password),
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

export const minPriceHandle = (subCtg?: SubCtgType): number => {
  const minPriceConfig: Record<SubCtgType, number> = {
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

  return (subCtg && minPriceConfig[subCtg]) || 0;
};

export const genderData: string[] = ["Male", "Female", "Others"];

export const location_of_pakistan: LocationDataProps[] = [
  {
    province: "Over All, Pakistan",
  },
  {
    province: "Sindh",
    cities: ["Karachi", "Hyderabad", "Sukkur"],
  },
  {
    province: "Punjab",
    cities: ["Lahore", "Rawalpindi", "Faisalabad"],
  },
  {
    province: "Balochistan",
    cities: ["Quetta", "Gwadar"],
  },
  {
    province: "Khyber Pakhtunkhwa",
    cities: ["Peshawar", "Abbottabad"],
  },
];

export const ctg_link: CategoryLink[] = [
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
        href: "rickshaw-chingchi",
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
        href: "sofa-chairs",
        title: "Sofa & Chairs",
      },
      {
        href: "beds-wardrobes",
        title: "Beds & Wardrobes",
      },
      {
        href: "garden-outdoor",
        title: "Garden & Outdoor",
      },
      {
        href: "bathroom-accessories",
        title: "Bathroom Accessories",
      },
      {
        href: "tables-dining",
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
        href: "computers-accessories",
        title: "Computers & Accessories",
      },
      {
        href: "games",
        title: "Games",
      },
      {
        href: "televisions-accessories",
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
    href: "birds-animals",
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
        href: "other-birds-animals",
        title: "Other Birds & Animals",
      },
    ],
  },
];

export const navbarRoute: RouteDataProps[] = [
  {
    Icon: IoCarSportOutline,
    title: "Vehicles",
    href: "vehicles",
  },
  {
    Icon: FaMobileScreen,
    title: "Mobiles",
    href: "mobiles-tablets",
  },
];
export const common_route_data: RouteDataProps[] = [
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

export const profileRouteData: RouteDataProps[] = [
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
];

export const publicRouteData: RouteDataProps[] = [
  ...common_route_data,
  {
    title: "Help",
    Icon: IoHelpCircleOutline,
    href: "/help",
    className: "border-y",
  },
];

let id = 1;

export const data: MainCtgProductCardProps[] = [
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

        title: "Toyota Corolla 2018 Model For Sale vehicles ",
        id: (id++).toString(),
      },
      {
        location: "Hyderabad",
        price: "Rs. 900,000",
        src: [
          "/assets/images/products/mobileportrait.jfif",
          "/assets/images/sliderImage.jfif",
        ],
        description:
          "Honda Civic 2016 For Sale sit amet, consectetur adipisicing elit. Ut itaqueaccusamus cupiditate vel. Voluptates qui aliquam fugit possimus minima, cumque placeat. Honda Civic 2016 For Saleexercitationem nemo placeat ut.Delectus quia officia pariatur labore ipsa at, porro et laudantiumab cupiditate explicabo, magnam provident numquam voluptates!",

        time: "1 week ago",
        productOtherDetails: { condition: "New", type: "other" },
        title: "Honda Civic 2016 For Sale vehicles",
        id: (id++).toString(),
      },
      {
        location: "Hyderabad",
        price: "Rs. 900,000",
        src: [
          "/assets/images/products/mobile.jfif",
          "/assets/images/products/mobileportrait.jfif",
        ],
        description:
          "title Lorem ipsum dolor sit amet consectetr Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut itaqueaccusamus cupiditate vel. Voluptates qui aliquam fugit possimus minima, cumque placeat. Accusantium dolorum reprehenderitodit dolores sunt dolorem, exercitationem nemo placeat ut.Delectus quia officia pariatur labore ipsa at, porro et laudantiumab cupiditate explicabo, magnam provident numquam voluptates!",

        time: "1 week ago",
        productOtherDetails: { condition: "low", type: "best" },
        title: "Honda Civic 2016 For Sale vehicles",
        id: (id++).toString(),
      },
      {
        location: "Sukkur",
        price: "Rs. 600,000",
        src: ["/assets/images/sliderImage.jfif"],
        description:
          "title Lorem ipsum dolor sit amet consectetr Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut itaqueaccusamus cupiditate vel. Voluptates qui aliquam fugit possimus minima, cumque placeat. Accusantium dolorum reprehenderitodit dolores sunt dolorem, exercitationem nemo placeat ut.Delectus quia officia pariatur labore ipsa at, porro et laudantiumab cupiditate explicabo, magnam provident numquam voluptates!",

        time: "2 months ago",
        productOtherDetails: { condition: "Used" },
        title: "Suzuki Mehran 2008 For Sale vehicles",
        id: (id++).toString(),
      },
      {
        location: "Rawalpindi",
        price: "Rs. 2,000,000",
        src: ["/assets/images/logo/Loxlight.png"],
        description:
          "title Lorem ipsum dolor sit amet consectetr Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut itaqueaccusamus cupiditate vel. Voluptates qui aliquam fugit possimus minima, cumque placeat. Accusantium dolorum reprehenderitodit dolores sunt dolorem, exercitationem nemo placeat ut.Delectus quia officia pariatur labore ipsa at, porro et laudantiumab cupiditate explicabo, magnam provident numquam voluptates!",

        time: "3 weeks ago",
        productOtherDetails: { condition: "Used" },
        title: "Toyota Fortuner 2021 Model For Sale  vehicles",
        id: (id++).toString(),
      },
    ],
  },
  {
    heading: "Furniture & Home Decorator",
    href: "furniture",
    cardData: [
      {
        location: "Sukkur",
        price: "Rs. 25,000",
        src: [
          "/assets/images/logo/Loxlight.png",
          "/assets/images/products/mobile.jfif",
        ],
        description:
          "title Lorem ipsum dolor sit amet consectetr Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut itaqueaccusamus cupiditate vel. Voluptates qui aliquam fugit possimus minima, cumque placeat. Accusantium dolorum reprehenderitodit dolores sunt dolorem, exercitationem nemo placeat ut.Delectus quia officia pariatur labore ipsa at, porro et laudantiumab cupiditate explicabo, magnam provident numquam voluptates!",

        time: "3 weeks ago",
        productOtherDetails: { condition: "Used" },
        title: "Wooden King Size Furniture & Home Decorator",
        id: (id++).toString(),
      },
      {
        location: "Quetta",
        price: "Rs. 15,000",
        src: [
          "/assets/images/logo/Loxlight.png",
          "/assets/images/products/mobile.jfif",
        ],
        description:
          "title Lorem ipsum dolor sit amet consectetr Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut itaqueaccusamus cupiditate vel. Voluptates qui aliquam fugit possimus minima, cumque placeat. Accusantium dolorum reprehenderitodit dolores sunt dolorem, exercitationem nemo placeat ut.Delectus quia officia pariatur labore ipsa at, porro et laudantiumab cupiditate explicabo, magnam provident numquam voluptates!",

        time: "5 days ago",
        productOtherDetails: { condition: "Used" },
        title: "Dining Table Set (6 Chairs) Furniture & Home Decorator",
        id: (id++).toString(),
      },
      {
        location: "Lahore",
        price: "Rs. 8,000",
        src: ["/assets/images/products/mobile.jfif"],
        description:
          "title Lorem ipsum dolor sit amet consectetr Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut itaqueaccusamus cupiditate vel. Voluptates qui aliquam fugit possimus minima, cumque placeat. Accusantium dolorum reprehenderitodit dolores sunt dolorem, exercitationem nemo placeat ut.Delectus quia officia pariatur labore ipsa at, porro et laudantiumab cupiditate explicabo, magnam provident numquam voluptates!",

        time: "2 weeks ago",
        productOtherDetails: { condition: "Used" },
        title: "Office Chair for Sale Furniture & Home Decorator",
        id: (id++).toString(),
      },
      {
        location: "Lahore",
        price: "Rs. 8,000",
        src: ["/assets/images/products/mobileportrait.jfif"],
        description:
          "title Lorem ipsum dolor sit amet consectetr Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut itaqueaccusamus cupiditate vel. Voluptates qui aliquam fugit possimus minima, cumque placeat. Accusantium dolorum reprehenderitodit dolores sunt dolorem, exercitationem nemo placeat ut.Delectus quia officia pariatur labore ipsa at, porro et laudantiumab cupiditate explicabo, magnam provident numquam voluptates!",

        time: "2 weeks ago",
        productOtherDetails: { condition: "Used" },
        title: "Office Chair for Sale Furniture & Home Decorator",
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
        title: "Sofa Set (3+1+1) Furniture & Home Decorator",
        id: (id++).toString(),
      },
    ],
  },
  {
    heading: "Electronics & Home Appliances",
    href: "electronics",
    cardData: [
      {
        location: "Hyderabad",
        price: "Rs. 55,000",
        src: ["/assets/images/products/mobile.jfif"],
        description:
          "title Lorem ipsum dolor sit amet consectetr Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut itaqueaccusamus cupiditate vel. Voluptates qui aliquam fugit possimus minima, cumque placeat. Accusantium dolorum reprehenderitodit dolores sunt dolorem, exercitationem nemo placeat ut.Delectus quia officia pariatur labore ipsa at, porro et laudantiumab cupiditate explicabo, magnam provident numquam voluptates!",

        time: "1 week ago",
        productOtherDetails: { condition: "Used" },
        title: "Samsung LED 55 inches Electronics & Home Appliances",
        id: (id++).toString(),
      },
      {
        location: "Sukkur",
        price: "Rs. 35,000",
        src: [
          "/assets/images/logo/Loxlight.png",
          "/assets/images/products/mobile.jfif",
        ],
        description:
          "title Lorem ipsum dolor sit amet consectetr Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut itaqueaccusamus cupiditate vel. Voluptates qui aliquam fugit possimus minima, cumque placeat. Accusantium dolorum reprehenderitodit dolores sunt dolorem, exercitationem nemo placeat ut.Delectus quia officia pariatur labore ipsa at, porro et laudantiumab cupiditate explicabo, magnam provident numquam voluptates!",

        time: "1 month ago",
        productOtherDetails: { condition: "Used" },
        title: "LG Washing Machine 8kg Electronics & Home Appliances",
        id: (id++).toString(),
      },
      {
        location: "Gwadar",
        price: "Rs. 12,000",
        src: ["/assets/images/products/mobile.jfif"],
        description:
          "title Lorem ipsum dolor sit amet consectetr Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut itaqueaccusamus cupiditate vel. Voluptates qui aliquam fugit possimus minima, cumque placeat. Accusantium dolorum reprehenderitodit dolores sunt dolorem, exercitationem nemo placeat ut.Delectus quia officia pariatur labore ipsa at, porro et laudantiumab cupiditate explicabo, magnam provident numquam voluptates!",

        time: "2 weeks ago",
        productOtherDetails: { condition: "Used" },
        title: "HP Laptop 15.6 inch Electronics & Home Appliances",
        id: (id++).toString(),
      },
      {
        location: "Quetta",
        price: "Rs. 40,000",
        src: [
          "/assets/images/logo/Loxlight.png",
          "/assets/images/products/mobile.jfif",
        ],
        description:
          "title Lorem ipsum dolor sit amet consectetr Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut itaqueaccusamus cupiditate vel. Voluptates qui aliquam fugit possimus minima, cumque placeat. Accusantium dolorum reprehenderitodit dolores sunt dolorem, exercitationem nemo placeat ut.Delectus quia officia pariatur labore ipsa at, porro et laudantiumab cupiditate explicabo, magnam provident numquam voluptates!",

        time: "3 days ago",
        productOtherDetails: { condition: "Used" },
        title: "Sony Home Theater System Electronics & Home Appliances",
        id: (id++).toString(),
      },
    ],
  },
  {
    href: "mobiles-tablets",
    heading: "Mobiles & Tablets",
    cardData: [
      {
        location: "Faisalabad",
        price: "Rs. 3,500",
        src: [
          "/assets/images/logo/Loxlight.png",
          "/assets/images/products/mobile.jfif",
        ],
        description:
          "title Lorem ipsum dolor sit amet consectetr Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut itaqueaccusamus cupiditate vel. Voluptates qui aliquam fugit possimus minima, cumque placeat. Accusantium dolorum reprehenderitodit dolores sunt dolorem, exercitationem nemo placeat ut.Delectus quia officia pariatur labore ipsa at, porro et laudantiumab cupiditate explicabo, magnam provident numquam voluptates!",

        time: "3 days ago",
        productOtherDetails: { condition: "Used" },
        title: "Vivo Y30 Mobiles & Tablets",
        id: (id++).toString(),
      },
      {
        location: "Lahore",
        price: "Rs. 1,500",
        src: [
          "/assets/images/logo/Loxlight.png",
          "/assets/images/products/mobile.jfif",
        ],
        description:
          "title Lorem ipsum dolor sit amet consectetr Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut itaqueaccusamus cupiditate vel. Voluptates qui aliquam fugit possimus minima, cumque placeat. Accusantium dolorum reprehenderitodit dolores sunt dolorem, exercitationem nemo placeat ut.Delectus quia officia pariatur labore ipsa at, porro et laudantiumab cupiditate explicabo, magnam provident numquam voluptates!",

        time: "1 week ago",
        productOtherDetails: { condition: "Used" },
        title: "Samsung Galaxy j7 Mobiles & Tablets",
        id: (id++).toString(),
      },
      {
        location: "Peshawar",
        price: "Rs. 800",
        src: [
          "/assets/images/logo/Loxlight.png",
          "/assets/images/products/mobile.jfif",
        ],
        description:
          "title Lorem ipsum dolor sit amet consectetr Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut itaqueaccusamus cupiditate vel. Voluptates qui aliquam fugit possimus minima, cumque placeat. Accusantium dolorum reprehenderitodit dolores sunt dolorem, exercitationem nemo placeat ut.Delectus quia officia pariatur labore ipsa at, porro et laudantiumab cupiditate explicabo, magnam provident numquam voluptates!",

        time: "2 weeks ago",
        productOtherDetails: { condition: "Used" },
        title: "IPhone 12 pro  Mobiles & Tablets",
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
        title: "Vivo y100 5G  Mobiles & Tablets",
        id: (id++).toString(),
      },
    ],
  },
  {
    href: "birds-animals",
    heading: "Birds & Animals",
    cardData: [
      {
        location: "Faisalabad",
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
        location: "Abbottabad",
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
        location: "Peshawar",
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
  {
    href: "fashion",
    heading: "Fashion & Beauty",
    cardData: [
      {
        location: "Faisalabad",
        price: "Rs. 3,500",
        src: ["/assets/images/products/mobile.jfif"],
        description:
          "title Lorem ipsum dolor sit amet consectetr Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut itaqueaccusamus cupiditate vel. Voluptates qui aliquam fugit possimus minima, cumque placeat. Accusantium dolorum reprehenderitodit dolores sunt dolorem, exercitationem nemo placeat ut.Delectus quia officia pariatur labore ipsa at, porro et laudantiumab cupiditate explicabo, magnam provident numquam voluptates!",

        time: "3 days ago",
        productOtherDetails: { condition: "Used" },
        title: "Men's Leather Jacket Fashion & Beauty",
        id: (id++).toString(),
      },
      {
        location: "Abbottabad",
        price: "Rs. 1,500",
        src: ["/assets/images/products/mobile.jfif"],
        description:
          "title Lorem ipsum dolor sit amet consectetr Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut itaqueaccusamus cupiditate vel. Voluptates qui aliquam fugit possimus minima, cumque placeat. Accusantium dolorum reprehenderitodit dolores sunt dolorem, exercitationem nemo placeat ut.Delectus quia officia pariatur labore ipsa at, porro et laudantiumab cupiditate explicabo, magnam provident numquam voluptates!",

        time: "1 week ago",
        productOtherDetails: { condition: "Used" },
        title: "Women's Casual Dress Fashion & Beauty",
        id: (id++).toString(),
      },
      {
        location: "Peshawar",
        price: "Rs. 800",
        src: [
          "/assets/images/logo/Loxlight.png",
          "/assets/images/products/mobile.jfif",
        ],
        description:
          "title Lorem ipsum dolor sit amet consectetr Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut itaqueaccusamus cupiditate vel. Voluptates qui aliquam fugit possimus minima, cumque placeat. Accusantium dolorum reprehenderitodit dolores sunt dolorem, exercitationem nemo placeat ut.Delectus quia officia pariatur labore ipsa at, porro et laudantiumab cupiditate explicabo, magnam provident numquam voluptates!",

        time: "2 weeks ago",
        productOtherDetails: { condition: "Used" },
        title: "Kids Winter Sweater Fashion & Beauty",
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
        title: "Ladies Shawl Collection Fashion & Beauty",
        id: (id++).toString(),
      },
    ],
    subCtgCard: [
      {
        heading: "Men's Fashion",
        href: "men",
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

            title: "Men's Fashion",
            id: (id++).toString(),
          },
          {
            location: "Hyderabad",
            price: "Rs. 900,000",
            src: [
              "/assets/images/products/mobileportrait.jfif",
              "/assets/images/sliderImage.jfif",
            ],
            description:
              "Honda Civic 2016 For Sale sit amet, consectetur adipisicing elit. Ut itaqueaccusamus cupiditate vel. Voluptates qui aliquam fugit possimus minima, cumque placeat. Honda Civic 2016 For Saleexercitationem nemo placeat ut.Delectus quia officia pariatur labore ipsa at, porro et laudantiumab cupiditate explicabo, magnam provident numquam voluptates!",

            time: "1 week ago",
            productOtherDetails: { condition: "New", type: "other" },
            title: "Men's Fashion",
            id: (id++).toString(),
          },
          {
            location: "Hyderabad",
            price: "Rs. 900,000",
            src: [
              "/assets/images/products/mobile.jfif",
              "/assets/images/products/mobileportrait.jfif",
            ],
            description:
              "title Lorem ipsum dolor sit amet consectetr Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut itaqueaccusamus cupiditate vel. Voluptates qui aliquam fugit possimus minima, cumque placeat. Accusantium dolorum reprehenderitodit dolores sunt dolorem, exercitationem nemo placeat ut.Delectus quia officia pariatur labore ipsa at, porro et laudantiumab cupiditate explicabo, magnam provident numquam voluptates!",

            time: "1 week ago",
            productOtherDetails: { condition: "low", type: "best" },
            title: "Honda Civic 2016 For Sale Men's Fashion",
            id: (id++).toString(),
          },
          {
            location: "Sukkur",
            price: "Rs. 600,000",
            src: ["/assets/images/sliderImage.jfif"],
            description:
              "title Lorem ipsum dolor sit amet consectetr Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut itaqueaccusamus cupiditate vel. Voluptates qui aliquam fugit possimus minima, cumque placeat. Accusantium dolorum reprehenderitodit dolores sunt dolorem, exercitationem nemo placeat ut.Delectus quia officia pariatur labore ipsa at, porro et laudantiumab cupiditate explicabo, magnam provident numquam voluptates!",

            time: "2 months ago",
            productOtherDetails: { condition: "Used" },
            title: "Suzuki Mehran 2008 For Sale ",
            id: (id++).toString(),
          },
          {
            location: "Rawalpindi",
            price: "Rs. 2,000,000",
            src: ["/assets/images/logo/Loxlight.png"],
            description:
              "title Lorem ipsum dolor sit amet consectetr Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut itaqueaccusamus cupiditate vel. Voluptates qui aliquam fugit possimus minima, cumque placeat. Accusantium dolorum reprehenderitodit dolores sunt dolorem, exercitationem nemo placeat ut.Delectus quia officia pariatur labore ipsa at, porro et laudantiumab cupiditate explicabo, magnam provident numquam voluptates!",

            time: "3 weeks ago",
            productOtherDetails: { condition: "Used" },
            title: "Toyota Fortuner 2021 Model For Sale ",
            id: (id++).toString(),
          },
        ],
      },
    ],
  },
];
