import {
  CategoryLink,
  LocationDataProps,
  Option,
  CategoryOptions,
  RenderProductCardProps,
  RouteData,
  OptionGroup,
  NestedOptionGroup,
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

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const location_of_pakistan: LocationDataProps[] = [
  {
    province: { value: "all", label: "Over All, Pakistan" },
  },
  {
    province: { value: "sindh", label: "Sindh" },
    cities: [
      { value: "karachi", label: "Karachi" },
      { value: "hyderabad", label: "Hyderabad" },
      { value: "sukkur", label: "Sukkur" },
    ],
  },
  {
    province: { value: "punjab", label: "Punjab" },
    cities: [
      { value: "lahore", label: "Lahore" },
      { value: "rawalpindi", label: "Rawalpindi" },
      { value: "faisalabad", label: "Faisalabad" },
    ],
  },
  {
    province: { value: "balochistan", label: "Balochistan" },
    cities: [
      { value: "quetta", label: "Quetta" },
      { value: "gwadar", label: "Gwadar" },
    ],
  },
  {
    province: { value: "kpk", label: "Khyber Pakhtunkhwa" },
    cities: [
      { value: "peshawar", label: "Peshawar" },
      { value: "abbottabad", label: "Abbottabad" },
    ],
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
        href: "bedroom",
        title: "Bedroom Furniture",
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
        href: "televisions",
        title: "Televisions",
      },
      {
        href: "home-audio",
        title: "Home Audio",
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
    href: "birds",
    title: "Birds",
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
        href: "parrot",
        title: "Parrot",
      },
      {
        href: "pigeons",
        title: "Pigeons",
      },
      {
        href: "other-birds",
        title: "Other Birds",
      },
    ],
  },
];

function condition(
  subCategory?: string,
  nestedGroup?: NestedOptionGroup
): OptionGroup {
  const commonn = [createOption("New"), createOption("Used")];
  return {
    label: "Condition",
    values: subCategory
      ? [
          ...commonn,
          createOption("Open Box"),
          createOption("Refurbished"),
          createOption("For Parts"),
        ]
      : commonn,
    nestedGroup,
  };
}

function createOption(label: string, value?: string): Option {
  return { label, value: value || label.split(" ").join("_").toLowerCase() };
}

export const categoryOptionsData: CategoryOptions[] = [
  {
    subCategory: "Cars",
    groups: [
      {
        label: "Make",
        values: [
          createOption("Suzuki"),
          createOption("Toyota"),
          createOption("Honda"),
          createOption("Hyundai"),
          createOption("Nissan"),
          createOption("Other Make"),
        ],

        nestedGroup: {
          title: "Model",

          conditionalOptions: [
            {
              condition: ["suzuki"],

              values: [
                createOption("Alto"),
                createOption("WagonR"),
                createOption("Swift"),
                createOption("Mehran VXR"),
                createOption("Mehran VX"),
                createOption("Cultus VXR"),
                createOption("Cultus VXL"),
                createOption("Bolan"),
                createOption("Ravi"),
                createOption("Jimny"),
                createOption("Other"),
              ],
            },
            {
              condition: ["toyota"],

              values: [
                createOption("Corolla"),
                createOption("Yaris"),
                createOption("Camry"),
                createOption("Land Cruiser"),
                createOption("Hilux"),
                createOption("Fortuner"),
                createOption("Prado"),
                createOption("Avalon"),
                createOption("C-HR", "chr"),
                createOption("RAV4"),
                createOption("Other"),
              ],
            },
            {
              condition: ["honda"],

              values: [
                createOption("Civic"),
                createOption("Accord"),
                createOption("City"),
                createOption("CR-V"),
                createOption("HR-V"),
                createOption("Jazz"),
                createOption("Brio"),
                createOption("Pilot"),
                createOption("Odyssey"),
                createOption("Fit"),
                createOption("Other"),
              ],
            },
            {
              condition: ["nissan"],

              values: [
                createOption("Altima"),
                createOption("Sentra"),
                createOption("Maxima"),
                createOption("Rogue"),
                createOption("Murano"),
                createOption("Pathfinder"),
                createOption("Versa"),
                createOption("Armada"),
                createOption("370Z"),
                createOption("GT-R"),
                createOption("Other"),
              ],
            },
            {
              condition: ["hyundai"],

              values: [
                createOption("Elantra"),
                createOption("Sonata"),
                createOption("Tucson"),
                createOption("Santa Fe"),
                createOption("Accent"),
                createOption("Kona"),
                createOption("Creta"),
                createOption("Venue"),
                createOption("Palisade"),
                createOption("Ioniq"),
                createOption("Other"),
              ],
            },
            {
              condition: ["others_make"],
              inputType: "Text",
              maxLength: 15,
              helpingText:
                "Please enter the model of the car (e.g., specific models like 'Model S' or 'Civic').",
            },
          ],
        },
      },
      {
        label: "Year",
        inputType: "number",
        maxLength: 4,
      },
      condition("", {
        title: "KMs Driven",
        conditionalOptions: [
          {
            condition: ["used"],
            inputType: "number",
            maxLength: 6,
            helpingText:
              "Please provide the distance traveled in kilometers (e.g., 45000).",
          },
        ],
      }),

      {
        label: "Fuel",
        values: [
          createOption("Petrol"),
          createOption("Diesel"),
          createOption("CNG"),
          createOption("LPG"),
          createOption("Other Fuel"),
        ],
      },
      {
        label: "Transmission",
        values: [createOption("Automatic"), createOption("Manual")],
      },
      {
        label: "Color",
        values: [
          createOption("White"),
          createOption("Black"),
          createOption("Silver"),
          createOption("Gray"),
          createOption("Blue"),
          createOption("Red"),
        ],
      },
      {
        label: "Documents",
        values: [createOption("Original"), createOption("Duplicate")],
      },
    ],
  },
  {
    subCategory: "Bikes",
    groups: [
      {
        label: "Make",
        values: [
          createOption("Honda"),
          createOption("Yamaha"),
          createOption("Suzuki"),
          createOption("Kawasaki"),
          createOption("Hi Speed"),
          createOption("Super Power"),
          createOption("Super Star"),
          createOption("Unique"),
          createOption("Other Make"),
        ],

        nestedGroup: {
          title: "Model",
          conditionalOptions: [
            {
              condition: ["honda"],
              values: [
                createOption("CBR 500R"),
                createOption("CBR 1000RR"),
                createOption("CRF 250L"),
                createOption("CB500F"),
                createOption("CBR 250R"),
                createOption("SH150i"),
                createOption("Other"),
              ],
            },
            {
              condition: ["yamaha"],
              values: [
                createOption("YZF-R3"),
                createOption("MT-07"),
                createOption("FZ25"),
                createOption("YZF-R1"),
                createOption("FZS 250"),
                createOption("XTZ 250"),
                createOption("Other"),
              ],
            },
            {
              condition: ["suzuki"],
              values: [
                createOption("GSX-R1000"),
                createOption("Hayabusa"),
                createOption("V-Strom 650"),
                createOption("GSX-S750"),
                createOption("SV650"),
                createOption("GZ150"),
                createOption("Other"),
              ],
            },
            {
              condition: ["kawasaki"],
              values: [
                createOption("Ninja 250"),
                createOption("Z900"),
                createOption("Versys 650"),
                createOption("Ninja H2"),
                createOption("KLR650"),
                createOption("Z400"),
                createOption("Other"),
              ],
            },
            {
              condition: ["hi_speed"],
              values: [createOption("Other")],
            },
            {
              condition: ["super_power"],
              values: [createOption("Other")],
            },
            {
              condition: ["super_star"],
              values: [createOption("Other")],
            },
            {
              condition: ["unique"],
              values: [createOption("Other")],
            },
            {
              condition: ["others_make"],
              inputType: "number",
              maxLength: 15,
              helpingText:
                "Please enter the model of the bike (e.g., specific models like CBR 500R).",
            },
          ],
        },
      },
      {
        label: "Year",
        inputType: "number",
        maxLength: 4,
      },
      {
        label: "Engine Type",
        values: [createOption("2 Stroke"), createOption("4 Stroke")],
      },
      {
        label: "Engine Capacity",

        values: [
          createOption("< 50cc"),
          createOption("70cc"),
          createOption("100cc - 149cc"),
          createOption("150cc - 199cc"),
          createOption("200cc - 249cc"),
          createOption("250cc - 299cc"),
          createOption("300cc - 499cc"),
          createOption("500cc - 699cc"),
          createOption("700cc - 999cc"),
          createOption("1000cc"),
          createOption("Above 1000cc"),
          createOption("Other Capacities"),
        ],
      },
      {
        label: "KMs Driven",
        inputType: "number",
        maxLength: 6,
        helpingText:
          "Please provide the distance traveled in kilometers (e.g., 45000).",
      },

      {
        label: "Ignition type",
        values: [createOption("Self Start"), createOption("Kickstarter")],
      },
      {
        label: "Origin",
        values: [
          createOption("Local"),
          createOption("Chinese"),
          createOption("Imported"),
        ],
      },
      condition(),
    ],
  },
  {
    subCategory: "Rickshaw & Chingchi",
    groups: [
      {
        label: "Make",
        values: [
          createOption("Bajaj"),
          createOption("Qingqi"),
          createOption("Adam"),
          createOption("Suzuki"),
          createOption("Hi-Speed"),
          createOption("Chingchi"),
          createOption("Other Make"),
        ],
      },
      {
        label: "Year",
        inputType: "number",
        maxLength: 4,
      },
      condition(),
    ],
  },
  {
    subCategory: "Buses and Vans",
    groups: [
      {
        label: "Make",
        values: [
          createOption("Suzuki"),
          createOption("Toyota"),
          createOption("Hino"),
          createOption("Isuzu"),
          createOption("Daihatsu"),
          createOption("Yutong"),
          createOption("Other Make"),
        ],
      },
      {
        label: "Year",
        inputType: "number",
        maxLength: 4,
      },
      condition(),
    ],
  },
  {
    subCategory: "Other Vehicles",
    groups: [condition()],
  },
  {
    subCategory: "Mobiles",
    groups: [
      {
        label: "Brand",
        values: [
          createOption("Samsung"),
          createOption("Apple"),
          createOption("Xiaomi"),
          createOption("Oppo"),
          createOption("Vivo"),
          createOption("Huawei"),
          createOption("OnePlus"),
          createOption("Google"),
          createOption("Realme"),
          createOption("Motorola"),
          createOption("Other Brand"),
        ],
        nestedGroup: {
          title: "Model",
          conditionalOptions: [
            {
              condition: ["samsung"],
              values: [
                createOption("Galaxy S23"),
                createOption("Galaxy S23 Ultra"),
                createOption("Galaxy A54"),
                createOption("Galaxy Z Flip 5"),
                createOption("Galaxy Z Fold 4"),
                createOption("Galaxy A34"),
              ],
            },
            {
              condition: ["apple"],
              values: [
                createOption("iPhone 14"),
                createOption("iPhone 14 Pro"),
                createOption("iPhone 14 Pro Max"),
                createOption("iPhone 13"),
                createOption("iPhone 13 Mini"),
                createOption("iPhone SE (3rd Gen)"),
                createOption("iPhone 12"),
                createOption("iPhone 12 Mini"),
                createOption("iPhone 12 Pro"),
                createOption("iPhone 12 Pro Max"),
                createOption("iPhone 11"),
                createOption("iPhone 11 Pro"),
                createOption("iPhone 11 Pro Max"),
                createOption("iPhone XS"),
                createOption("iPhone XS Max"),
                createOption("iPhone XR"),
                createOption("iPhone X"),
              ],
            },
            {
              condition: ["xiaomi"],
              values: [
                createOption("Redmi Note 12"),
                createOption("Xiaomi 13"),
                createOption("Poco F5"),
                createOption("Redmi K50"),
                createOption("Xiaomi 12T"),
                createOption("Redmi Note 11 Pro"),
              ],
            },
            {
              condition: ["oppo"],
              values: [
                createOption("Oppo Reno 8"),
                createOption("Oppo Find X5"),
                createOption("Oppo A78"),
                createOption("Oppo F21 Pro"),
                createOption("Oppo Reno 8 Pro"),
              ],
            },
            {
              condition: ["vivo"],
              values: [
                createOption("Vivo V25"),
                createOption("Vivo X80"),
                createOption("Vivo Y100"),
                createOption("Vivo V23"),
                createOption("Vivo X90 Pro"),
              ],
            },
            {
              condition: ["huawei"],
              values: [
                createOption("Huawei P50"),
                createOption("Huawei Mate 40"),
                createOption("Huawei P50 Pro"),
                createOption("Huawei Nova 10"),
                createOption("Huawei Mate 50"),
              ],
            },
            {
              condition: ["oneplus"],
              values: [
                createOption("OnePlus 11"),
                createOption("OnePlus Nord 2"),
                createOption("OnePlus 10 Pro"),
                createOption("OnePlus 9"),
                createOption("OnePlus Nord CE 2"),
              ],
            },
            {
              condition: ["google"],
              values: [
                createOption("Pixel 7"),
                createOption("Pixel 7a"),
                createOption("Pixel 6"),
                createOption("Pixel 6a"),
                createOption("Pixel 5"),
              ],
            },
            {
              condition: ["realme"],
              values: [
                createOption("Realme 11"),
                createOption("Realme GT 2 Pro"),
                createOption("Realme 10"),
                createOption("Realme C35"),
                createOption("Realme Narzo 50"),
              ],
            },
            {
              condition: ["motorola"],
              values: [
                createOption("Motorola Edge 30"),
                createOption("Motorola G Stylus 5G"),
                createOption("Motorola Edge 20"),
                createOption("Motorola Moto G Power"),
                createOption("Motorola Razr 5G"),
              ],
            },
            {
              condition: ["other_brand"],
              inputType: "Text",
              maxLength: 15,
              helpingText:
                "Please enter the model of the mobile (e.g., specific models like 'Galaxy S23' or 'iPhone 15').",
            },
          ],
        },
      },
      condition("Mobiles"),
    ],
  },
  {
    subCategory: "Tablets",
    groups: [
      {
        label: "Brand",
        values: [
          createOption("Apple"),
          createOption("Samsung"),
          createOption("Microsoft"),
          createOption("Lenovo"),
          createOption("Amazon"),
          createOption("Huawei"),
          createOption("Other Brand"),
        ],

        nestedGroup: {
          title: "Model",
          conditionalOptions: [
            {
              condition: ["apple"],
              values: [
                createOption("iPad Pro 12.9-inch"),
                createOption("iPad Pro 11-inch"),
                createOption("iPad Air (5th Gen)"),
                createOption("iPad (10th Gen)"),
                createOption("iPad Mini (6th Gen)"),
              ],
            },
            {
              condition: ["samsung"],
              values: [
                createOption("Galaxy Tab S9"),
                createOption("Galaxy Tab S9 Ultra"),
                createOption("Galaxy Tab A8"),
                createOption("Galaxy Tab S7 FE"),
              ],
            },
            {
              condition: ["microsoft"],
              values: [
                createOption("Surface Pro 9"),
                createOption("Surface Go 3"),
                createOption("Surface Laptop Studio"),
                createOption("Surface Duo 2"),
              ],
            },
            {
              condition: ["lenovo"],
              values: [
                createOption("Tab P12 Pro"),
                createOption("Tab M10 Plus"),
                createOption("Tab P11"),
                createOption("Tab M8"),
              ],
            },
            {
              condition: ["amazon"],
              values: [
                createOption("Fire HD 10"),
                createOption("Fire HD 10 Plus"),
                createOption("Fire 7"),
                createOption("Fire HD 8"),
              ],
            },
            {
              condition: ["huawei"],
              values: [
                createOption("MatePad Pro"),
                createOption("MatePad 11"),
                createOption("MediaPad M5"),
                createOption("MediaPad T5"),
              ],
            },
            {
              condition: ["other_brand"],
              inputType: "Text",
              maxLength: 15,
              helpingText:
                "Please enter the model of the tablet (e.g., specific models like 'iPad Pro' or 'Galaxy Tab S9').",
            },
          ],
        },
      },
      condition("Tablets"),
    ],
  },
  {
    subCategory: "Smart Watches",
    groups: [
      {
        label: "Brand",
        values: [
          createOption("Apple"),
          createOption("Samsung"),
          createOption("Garmin"),
          createOption("Fitbit"),
          createOption("Fossil"),
          createOption("Amazfit"),
          createOption("Other Brand"),
        ],
        nestedGroup: {
          title: "Model",
          conditionalOptions: [
            {
              condition: ["apple"],
              values: [
                createOption("Apple Watch Series 9"),
                createOption("Apple Watch Ultra 2"),
                createOption("Apple Watch SE (2nd Gen)"),
                createOption("Apple Watch Series 8"),
              ],
            },
            {
              condition: ["samsung"],
              values: [
                createOption("Galaxy Watch 6"),
                createOption("Galaxy Watch 6 Classic"),
                createOption("Galaxy Watch Active 2"),
                createOption("Galaxy Watch 5"),
              ],
            },
            {
              condition: ["garmin"],
              values: [
                createOption("Garmin Fenix 7"),
                createOption("Garmin Venu 2"),
                createOption("Garmin Forerunner 255"),
                createOption("Garmin Instinct 2"),
              ],
            },
            {
              condition: ["fitbit"],
              values: [
                createOption("Fitbit Sense 2"),
                createOption("Fitbit Versa 4"),
                createOption("Fitbit Inspire 3"),
                createOption("Fitbit Luxe"),
              ],
            },
            {
              condition: ["fossil"],
              values: [
                createOption("Fossil Gen 6"),
                createOption("Fossil Hybrid HR"),
                createOption("Fossil Gen 5"),
                createOption("Fossil Gen 6 Wellness Edition"),
              ],
            },
            {
              condition: ["amazfit"],
              values: [
                createOption("Amazfit GTR 4"),
                createOption("Amazfit Bip U Pro"),
                createOption("Amazfit T-Rex Pro"),
                createOption("Amazfit GTS 2"),
              ],
            },
            {
              condition: ["other_brand"],
              inputType: "Text",
              maxLength: 15,
              helpingText:
                "Please enter the model of the smartwatch (e.g., specific models like 'Fossil Gen 6' or 'Fitbit Sense 2').",
            },
          ],
        },
      },
      condition(),
    ],
  },
  {
    subCategory: "Accessories",
    groups: [
      {
        label: "Accessory",
        values: [
          createOption("Charging Cables"),
          createOption("Converters"),
          createOption("Chargers"),
          createOption("Screens"),
          createOption("Screens Protectors"),
          createOption("Mobile Stands"),
          createOption("Ring Lights"),
          createOption("Selfie Sticks"),
          createOption("Power Banks"),
          createOption("Headphones"),
          createOption("Earphones"),
          createOption("Cover & Cases"),
          createOption("External Memory"),
          createOption("Other Accessories"),
        ],

        nestedGroup: {
          title: "type",
          conditionalOptions: [
            {
              condition: [
                "screens_protectors",
                "screens",
                "chargers",
                "cover_&_cases",
              ],
              values: [
                createOption("Tablet"),
                createOption("Mobile"),
                createOption("Smart Watches"),
              ],
            },
            {
              label: "cable type",
              condition: ["charging_cables", "chargers"],
              values: [
                createOption("IOS"),
                createOption("Micro-USB/Android"),
                createOption("USB Type-C"),
                createOption("Others"),
              ],
            },

            {
              condition: ["headphones", "earphones"],
              values: [createOption("Wired"), createOption("Wireless")],
            },
          ],
        },
      },

      condition(),
    ],
  },
  {
    subCategory: "Footwear",
    groups: [
      {
        label: "Type",
        values: [
          createOption("Joggers"),
          createOption("Heels"),
          createOption("Sandals"),
          createOption("Boots"),
          createOption("Sneakers"),
          createOption("Loafers"),
          createOption("Flats"),
          createOption("Slip-ons"),
          createOption("Slippers"),
          createOption("Chelsea Boots"),
          createOption("High-Top Sneakers"),
          createOption("Moccasins"),
          createOption("Combat Boots"),
          createOption("Wedges"),
          createOption("Platform Shoes"),
          createOption("Other Type"),
        ],
      },
      {
        label: "Size",
        inputType: "number",
        maxLength: 2, // Assuming size is a two-digit number
      },
      {
        label: "Gender",
        values: [
          createOption("Men"),
          createOption("Women"),
          createOption("All"),
          createOption("Boys"),
          createOption("Girls"),
        ],
      },
      {
        label: "Brand",
        values: [
          createOption("Nike"),
          createOption("Adidas"),
          createOption("Puma"),
          createOption("Reebok"),
          createOption("New Balance"),
          createOption("Under Armour"),
          createOption("ASICS"),
          createOption("Skechers"),
          createOption("Vans"),
          createOption("Converse"),
          createOption("Hush Puppies"),
          createOption("Fila"),
          createOption("Crocs"),
          createOption("Timberland"),
          createOption("Dr. Martens"),
          createOption("Other Brand"),
        ],
      },
      condition(),
    ],
  },
];

export const isLogged: boolean = true;

export const route_data: RouteData[] = isLogged
  ? [
      {
        title: "Dark Mode",
        Icon: Moon,
        href: "/",
      },

      {
        title: "My ads",
        Icon: IoNewspaperOutline,
        href: "/myads",
      },
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
        title: "Chat",
        Icon: IoChatbubbleOutline,
        href: "/chat",
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
      {
        title: "Dark Mode",
        Icon: Moon,
        href: "/",
      },
      {
        title: "Start selling",
        Icon: IoCameraOutline,
        href: "/startselling",
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
