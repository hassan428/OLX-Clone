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

function condition(
  subCategory?: string,
  nestedGroup?: NestedOptionGroup
): OptionGroup {
  const commonn = ["New", "Used"];
  return {
    label: "Condition",
    values: subCategory
      ? [...commonn, "Open Box", "Refurbished", "For Parts"].map((label) =>
          createOption(label)
        )
      : commonn.map((label) => createOption(label)),
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
          "Suzuki",
          "Toyota",
          "Honda",
          "Hyundai",
          "Nissan",
          "Other Make",
        ].map((label) => createOption(label)),

        nestedGroup: {
          title: "Model",

          conditionalOptions: [
            {
              condition: ["suzuki"],

              values: [
                "Alto",
                "WagonR",
                "Swift",
                "Mehran VXR",
                "Mehran VX",
                "Cultus VXR",
                "Cultus VXL",
                "Bolan",
                "Ravi",
                "Jimny",
                "Other",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["toyota"],

              values: [
                "Corolla",
                "Yaris",
                "Camry",
                "Land Cruiser",
                "Hilux",
                "Fortuner",
                "Prado",
                "Avalon",
                "C-HR",
                "chr",
                "RAV4",
                "Other",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["honda"],

              values: [
                "Civic",
                "Accord",
                "City",
                "CR-V",
                "HR-V",
                "Jazz",
                "Brio",
                "Pilot",
                "Odyssey",
                "Fit",
                "Other",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["nissan"],

              values: [
                "Altima",
                "Sentra",
                "Maxima",
                "Rogue",
                "Murano",
                "Pathfinder",
                "Versa",
                "Armada",
                "370Z",
                "GT-R",
                "Other",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["hyundai"],

              values: [
                "Elantra",
                "Sonata",
                "Tucson",
                "Santa Fe",
                "Accent",
                "Kona",
                "Creta",
                "Venue",
                "Palisade",
                "Ioniq",
                "Other",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["other_make"],
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
        values: ["Petrol", "Diesel", "CNG", "LPG", "Other Fuel"].map((label) =>
          createOption(label)
        ),
      },
      {
        label: "Transmission",
        values: ["Automatic", "Manual"].map((label) => createOption(label)),
      },
      {
        label: "Color",
        values: ["White", "Black", "Silver", "Gray", "Blue", "Red"].map(
          (label) => createOption(label)
        ),
      },
      {
        label: "Documents",
        values: ["Original", "Duplicate"].map((label) => createOption(label)),
      },
    ],
  },
  {
    subCategory: "Bikes",
    groups: [
      {
        label: "Make",
        values: [
          "Honda",
          "Yamaha",
          "Suzuki",
          "Kawasaki",
          "Hi Speed",
          "Super Power",
          "Super Star",
          "Unique",
          "Other Make",
        ].map((label) => createOption(label)),

        nestedGroup: {
          title: "Model",
          conditionalOptions: [
            {
              condition: ["honda"],
              values: [
                "CBR 500R",
                "CBR 1000RR",
                "CRF 250L",
                "CB500F",
                "CBR 250R",
                "SH150i",
                "Other",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["yamaha"],
              values: [
                "YZF-R3",
                "MT-07",
                "FZ25",
                "YZF-R1",
                "FZS 250",
                "XTZ 250",
                "Other",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["suzuki"],
              values: [
                "GSX-R1000",
                "Hayabusa",
                "V-Strom 650",
                "GSX-S750",
                "SV650",
                "GZ150",
                "Other",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["kawasaki"],
              values: [
                "Ninja 250",
                "Z900",
                "Versys 650",
                "Ninja H2",
                "KLR650",
                "Z400",
                "Other",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["hi_speed"],
              values: ["Other"].map((label) => createOption(label)),
            },
            {
              condition: ["super_power"],
              values: ["Other"].map((label) => createOption(label)),
            },
            {
              condition: ["super_star"],
              values: ["Other"].map((label) => createOption(label)),
            },
            {
              condition: ["unique"],
              values: ["Other"].map((label) => createOption(label)),
            },
            {
              condition: ["other_make"],
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
        values: ["2 Stroke", "4 Stroke"].map((label) => createOption(label)),
      },
      {
        label: "Engine Capacity",
        values: [
          "< 50cc",
          "70cc",
          "100cc - 149cc",
          "150cc - 199cc",
          "200cc - 249cc",
          "250cc - 299cc",
          "300cc - 499cc",
          "500cc - 699cc",
          "700cc - 999cc",
          "1000cc",
          "Above 1000cc",
          "Other Capacities",
        ].map((label) => createOption(label)),
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
        values: ["Self Start", "Kickstarter"].map((label) =>
          createOption(label)
        ),
      },
      {
        label: "Origin",
        values: ["Local", "Chinese", "Imported"].map((label) =>
          createOption(label)
        ),
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
          "Bajaj",
          "Qingqi",
          "Adam",
          "Suzuki",
          "Hi-Speed",
          "Chingchi",
          "Other Make",
        ].map((label) => createOption(label)),
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
          "Suzuki",
          "Toyota",
          "Hino",
          "Isuzu",
          "Daihatsu",
          "Yutong",
          "Other Make",
        ].map((label) => createOption(label)),
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
    subCategory: "Other Fashion",
    groups: [
      {
        label: "items",
        inputType: "Text",
        maxLength: 40,
        helpingText: "Specify the fashion item (e.g., 'T-Shirts' or 'Shoes').",
      },
      condition(),
    ],
  },
  {
    subCategory: "Other Vehicles",

    groups: [
      {
        label: "items",
        inputType: "Text",
        maxLength: 40,
        helpingText: "Specify the Vehicle item (e.g., 'Car' or 'Bike').",
      },
      condition(),
    ],
  },
  {
    subCategory: "Mobiles",
    groups: [
      {
        label: "Brand",
        values: [
          "Samsung",
          "Apple",
          "Xiaomi",
          "Oppo",
          "Vivo",
          "Huawei",
          "OnePlus",
          "Google",
          "Realme",
          "Motorola",
          "Other Brand",
        ].map((label) => createOption(label)),
        nestedGroup: {
          title: "Model",
          conditionalOptions: [
            {
              condition: ["samsung"],
              values: [
                "Galaxy S23",
                "Galaxy S23 Ultra",
                "Galaxy A54",
                "Galaxy Z Flip 5",
                "Galaxy Z Fold 4",
                "Galaxy A34",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["apple"],
              values: [
                "iPhone 14",
                "iPhone 14 Pro",
                "iPhone 14 Pro Max",
                "iPhone 13",
                "iPhone 13 Mini",
                "iPhone SE (3rd Gen",
                "iPhone 12",
                "iPhone 12 Mini",
                "iPhone 12 Pro",
                "iPhone 12 Pro Max",
                "iPhone 11",
                "iPhone 11 Pro",
                "iPhone 11 Pro Max",
                "iPhone XS",
                "iPhone XS Max",
                "iPhone XR",
                "iPhone X",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["xiaomi"],
              values: [
                "Redmi Note 12",
                "Xiaomi 13",
                "Poco F5",
                "Redmi K50",
                "Xiaomi 12T",
                "Redmi Note 11 Pro",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["oppo"],
              values: [
                "Oppo Reno 8",
                "Oppo Find X5",
                "Oppo A78",
                "Oppo F21 Pro",
                "Oppo Reno 8 Pro",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["vivo"],
              values: [
                "Vivo V25",
                "Vivo X80",
                "Vivo Y100",
                "Vivo V23",
                "Vivo X90 Pro",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["huawei"],
              values: [
                "Huawei P50",
                "Huawei Mate 40",
                "Huawei P50 Pro",
                "Huawei Nova 10",
                "Huawei Mate 50",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["oneplus"],
              values: [
                "OnePlus 11",
                "OnePlus Nord 2",
                "OnePlus 10 Pro",
                "OnePlus 9",
                "OnePlus Nord CE 2",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["google"],
              values: [
                "Pixel 7",
                "Pixel 7a",
                "Pixel 6",
                "Pixel 6a",
                "Pixel 5",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["realme"],
              values: [
                "Realme 11",
                "Realme GT 2 Pro",
                "Realme 10",
                "Realme C35",
                "Realme Narzo 50",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["motorola"],
              values: [
                "Motorola Edge 30",
                "Motorola G Stylus 5G",
                "Motorola Edge 20",
                "Motorola Moto G Power",
                "Motorola Razr 5G",
              ].map((label) => createOption(label)),
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
          "Apple",
          "Samsung",
          "Microsoft",
          "Lenovo",
          "Amazon",
          "Huawei",
          "Other Brand",
        ].map((label) => createOption(label)),

        nestedGroup: {
          title: "Model",
          conditionalOptions: [
            {
              condition: ["apple"],
              values: [
                "iPad Pro 12.9-inch",
                "iPad Pro 11-inch",
                "iPad Air (5th Gen",
                "iPad (10th Gen",
                "iPad Mini (6th Gen",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["samsung"],
              values: [
                "Galaxy Tab S9",
                "Galaxy Tab S9 Ultra",
                "Galaxy Tab A8",
                "Galaxy Tab S7 FE",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["microsoft"],
              values: [
                "Surface Pro 9",
                "Surface Go 3",
                "Surface Laptop Studio",
                "Surface Duo 2",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["lenovo"],
              values: ["Tab P12 Pro", "Tab M10 Plus", "Tab P11", "Tab M8"].map(
                (label) => createOption(label)
              ),
            },
            {
              condition: ["amazon"],
              values: [
                "Fire HD 10",
                "Fire HD 10 Plus",
                "Fire 7",
                "Fire HD 8",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["huawei"],
              values: [
                "MatePad Pro",
                "MatePad 11",
                "MediaPad M5",
                "MediaPad T5",
              ].map((label) => createOption(label)),
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
          "Apple",
          "Samsung",
          "Garmin",
          "Fitbit",
          "Fossil",
          "Amazfit",
          "Other Brand",
        ].map((label) => createOption(label)),
        nestedGroup: {
          title: "Model",
          conditionalOptions: [
            {
              condition: ["apple"],
              values: [
                "Apple Watch Series 9",
                "Apple Watch Ultra 2",
                "Apple Watch SE (2nd Gen",
                "Apple Watch Series 8",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["samsung"],
              values: [
                "Galaxy Watch 6",
                "Galaxy Watch 6 Classic",
                "Galaxy Watch Active 2",
                "Galaxy Watch 5",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["garmin"],
              values: [
                "Garmin Fenix 7",
                "Garmin Venu 2",
                "Garmin Forerunner 255",
                "Garmin Instinct 2",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["fitbit"],
              values: [
                "Fitbit Sense 2",
                "Fitbit Versa 4",
                "Fitbit Inspire 3",
                "Fitbit Luxe",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["fossil"],
              values: [
                "Fossil Gen 6",
                "Fossil Hybrid HR",
                "Fossil Gen 5",
                "Fossil Gen 6 Wellness Edition",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["amazfit"],
              values: [
                "Amazfit GTR 4",
                "Amazfit Bip U Pro",
                "Amazfit T-Rex Pro",
                "Amazfit GTS 2",
              ].map((label) => createOption(label)),
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
          "Charging Cables",
          "Converters",
          "Chargers",
          "Screens",
          "Screens Protectors",
          "Mobile Stands",
          "Ring Lights",
          "Selfie Sticks",
          "Power Banks",
          "Headphones",
          "Earphones",
          "Cover & Cases",
          "External Memory",
          "Other Accessories",
        ].map((label) => createOption(label)),

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
              values: ["Tablet", "Mobile", "Smart Watches"].map((label) =>
                createOption(label)
              ),
            },
            {
              label: "cable type",
              condition: ["charging_cables", "chargers"],
              values: ["IOS", "Micro-USB/Android", "USB Type-C", "Others"].map(
                (label) => createOption(label)
              ),
            },

            {
              condition: ["headphones", "earphones"],
              values: ["Wired", "Wireless"].map((label) => createOption(label)),
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
          "Joggers",
          "Heels",
          "Sandals",
          "Boots",
          "Sneakers",
          "Loafers",
          "Flats",
          "Slip-ons",
          "Slippers",
          "Chelsea Boots",
          "High-Top Sneakers",
          "Moccasins",
          "Combat Boots",
          "Wedges",
          "Platform Shoes",
          "Other Type",
        ].map((label) => createOption(label)),
      },
      {
        label: "Size",
        inputType: "number",
        maxLength: 2, // Assuming size is a two-digit number
      },
      {
        label: "Gender",
        values: ["Men", "Women", "All", "Boys", "Girls"].map((label) =>
          createOption(label)
        ),
      },
      {
        label: "Brand",
        values: [
          "Nike",
          "Adidas",
          "Puma",
          "Reebok",
          "New Balance",
          "Under Armour",
          "ASICS",
          "Skechers",
          "Vans",
          "Converse",
          "Hush Puppies",
          "Fila",
          "Crocs",
          "Timberland",
          "Dr. Martens",
          "Other Brand",
        ].map((label) => createOption(label)),
      },
      condition(),
    ],
  },
  {
    subCategory: "Makeup",
    groups: [
      {
        label: "Accessory",
        values: [
          "Brushes",
          "Eyes",
          "Face",
          "Lips",
          "Nails",
          "Other Makeup Accessories",
        ].map((label) => createOption(label)),
        nestedGroup: {
          title: "Type",
          conditionalOptions: [
            {
              condition: ["brushes"],
              values: [
                "Foundation Brushes",
                "Blush Brushes",
                "Eye Brushes",
                "Powder Brushes",
                "Blending Brushes",
                "Contour Brushes",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["eyes"],
              values: [
                "Eyeshadow Palettes",
                "Mascaras",
                "Eyeliners",
                "Eyebrow Pencils",
                "Eye Primers",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["face"],
              values: [
                "Foundations",
                "Concealers",
                "Primers",
                "Highlighters",
                "Blushes",
                "Setting Powders",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["lips"],
              values: [
                "Lipsticks",
                "Lip Gloss",
                "Lip Liners",
                "Lip Tints",
                "Lip Balms",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["nails"],
              values: [
                "Nail Polishes",
                "Nail Art Tools",
                "Nail Primers",
                "Nail Extensions",
                "Top Coats",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["other_makeup_accessories"],
              inputType: "Text",
              maxLength: 40,
              helpingText:
                "Specify the makeup accessory (e.g., 'makeup remover' or 'sponges').",
            },
          ],
        },
      },
      condition(),
    ],
  },
  {
    subCategory: "Office Furniture",
    groups: [
      {
        label: "Items",
        values: [
          "Office Chairs",
          "Office Sofas",
          "Office Tables",
          "Shelves & Racks",
          "Office Cabinets",
          "Other Office Furniture",
        ].map((label) => createOption(label)),
        nestedGroup: {
          title: "Type",
          conditionalOptions: [
            {
              condition: ["office_chairs"],
              values: [
                "Computer Chairs",
                "Executive Chairs",
                "Visitor Chairs",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["office_sofas"],
              values: [
                "Reception Sofas",
                "Executive Sofas",
                "Waiting Room Sofas",
                "Lounge Sofas",
                "Modular Sofas",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["office_tables"],
              values: [
                "Conference Tables",
                "Executive Tables",
                "Office Side Tables",
                "Reception Counters",
                "Training Tables",
                "Work Stations",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["shelves_&_racks"],
              values: [
                "Document Shelves",
                "File Racks",
                "Bookshelves",
                "Display Racks",
                "Storage Racks",
                "Wall-Mounted Racks",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["office_cabinets"],
              values: [
                "File Cabinets",
                "Storage Cabinets",
                "Mobile Cabinets",
                "Wooden Cabinets",
                "Metal Cabinets",
                "Wall Cabinets",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["other_office_furniture"],
              inputType: "Text",
              maxLength: 40,
              helpingText:
                "Specify office furniture item (e.g., 'desk lamp' or 'coat rack').",
            },
          ],
        },
      },
      condition(),
    ],
  },
  {
    subCategory: "Home Decor",
    groups: [
      {
        label: "Items",
        values: [
          "Lamps",
          "Candles",
          "Chandeliers",
          "Decorative Trays",
          "Handicrafts",
          "Indoor Fountains",
          "Wall Clocks",
          "Wall Hanging",
          "Showpieces",
          "Artifical Flower & Plants",
          "Other Decor Items",
        ].map((label) => createOption(label)),
        nestedGroup: {
          title: "Type",
          conditionalOptions: [
            {
              condition: ["lamps"],
              values: [
                "Table Lamps",
                "Floor Lamps",
                "Metal Lamps",
                "Hanging Lamps",
                "Wooden Lamps",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["other_decor_items"],
              inputType: "Text",
              maxLength: 40,
              helpingText:
                "Specify Home Decor item (e.g., 'desk lamp' or 'coat rack').",
            },
          ],
        },
      },
      condition(),
    ],
  },
  {
    subCategory: "Sofa & Chairs",
    groups: [
      {
        label: "Items",
        values: [
          "Sofas",
          "Sofa Beds",
          "Sofa Covers",
          "Cushions",
          "Chairs",
          "Recliners",
          "Bean Bags",
          "Others",
        ].map((label) => createOption(label)),
        nestedGroup: {
          title: "type",
          conditionalOptions: [
            {
              condition: ["chairs"],
              values: [
                "Dining Chairs",
                "Ottoman",
                "Rocking Chairs",
                "Stools",
                "Swing Chairs",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["sofas"],
              values: [
                "1 Seater",
                "2 Seater",
                "3 Seater",
                "Dewan",
                "L Shaped",
                "Sofa Set",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["others"],
              inputType: "Text",
              maxLength: 40,
              helpingText:
                "Specify Sofa & Chairs item (e.g., 'Sofa Set' or 'Dining Chairs').",
            },
          ],
        },
      },
      condition(),
    ],
  },
  {
    subCategory: "Beds & Wardrobes",
    groups: [
      {
        label: "items",
        values: [
          "Beds",
          "Mattresses",
          "Mattress Covers",
          "Pillows & Cases",
          "Bed Sheets",
          "Blankets & Comforters",
          "Wardrobes",
          "Other Bedding Accessories",
        ].map((label) => createOption(label)),

        nestedGroup: {
          title: "type",
          conditionalOptions: [
            {
              condition: ["beds"],
              values: ["Bed Set", "King Bed", "Queen Bed", "Single Bed"].map(
                (label) => createOption(label)
              ),
            },
            {
              label: "Material type",
              condition: ["beds"],
              values: ["Wooden", "Iron", "Others"].map((label) =>
                createOption(label)
              ),
            },
            {
              condition: ["mattresses"],
              values: ["Single Bed", "King Bed", "Queen Bed"].map((label) =>
                createOption(label)
              ),
            },
            {
              label: "Material type",
              condition: ["mattresses"],
              values: ["Air", "Foam", "Medicated", "Spring", "Others"].map(
                (label) => createOption(label)
              ),
            },
            {
              label: "Folding type",
              condition: ["mattresses"],
              values: ["Yes", "No"].map((label) => createOption(label)),
            },
            {
              condition: ["other_bedding_accessories"],
              inputType: "Text",
              maxLength: 40,
              helpingText:
                "Specify any additional bedding accessories, e.g., pillow covers, bed skirts, or other items.",
            },
          ],
        },
      },
      condition(),
    ],
  },
  {
    subCategory: "Tables & Dining",
    groups: [
      {
        label: "items",
        values: [
          "Dining Tables",
          "Center Tables",
          "Dressing Tables",
          "Computer Tables",
          "Consoles",
          "Folding Tables",
          "Laptop Tables",
          "Nesting Tables",
          "Side Tables",
          "Study Tables",
          "Trolleys",
          "Others",
        ].map((label) => createOption(label)),
        nestedGroup: {
          title: "type",
          conditionalOptions: [
            {
              condition: ["others"],
              inputType: "Text",
              maxLength: 40,
              helpingText:
                "Specify any additional Tables & Dining, e.g., Dining Tables, Folding Tables.",
            },
          ],
        },
      },
      condition(),
    ],
  },
  {
    subCategory: "Bathroom Accessories",
    groups: [
      {
        label: "items",
        values: [
          "Basins",
          "Bath Cabinets",
          "Bath Towels",
          "Bath Tubs",
          "Shower Cabins",
          "Soap Dispensers",
          "Taps",
          "Toilets",
          "Vanity Units",
          "Other Bathroom Accessories",
        ].map((label) => createOption(label)),
        nestedGroup: {
          title: "type",
          conditionalOptions: [
            {
              condition: ["other_bathroom_accessories"],
              inputType: "Text",
              maxLength: 40,
              helpingText: "Specify any additional Bathroom Accessories.",
            },
          ],
        },
      },
      condition(),
    ],
  },
  {
    subCategory: "Garden & Outdoor",
    groups: [
      {
        label: "items",
        values: [
          "Artificial Grass",
          "Benches",
          "Outdoor Chairs",
          "Outdoor Tables",
          "Outdoor Fountains",
          "Outdoor Lights",
          "Outdoor Umbrellas",
          "Outdoor Swings",
          "Plants & Pots",
          "Tents & Shades",
          "Other Outdoor Items",
        ].map((label) => createOption(label)),
        nestedGroup: {
          title: "type",
          conditionalOptions: [
            {
              condition: ["other_outdoor_items"],
              inputType: "Text",
              maxLength: 40,
              helpingText: "Specify any additional Garden & Outdoor.",
            },
          ],
        },
      },
      condition(),
    ],
  },
  {
    subCategory: "Living Room Furniture",
    groups: [
      {
        label: "Items",
        values: [
          "Sofas",
          "Coffee Tables",
          "TV Units",
          "Shelves",
          "Cabinets",
          "Chairs",
          "Other Living Room Furniture",
        ].map((label) => createOption(label)),
        nestedGroup: {
          title: "Type",
          conditionalOptions: [
            {
              condition: ["sofas"],
              values: [
                "Sectional Sofas",
                "Loveseats",
                "Recliners",
                "Sofa Beds",
                "Armchairs",
                "Chaise Lounges",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["coffee_tables"],
              values: [
                "Round Coffee Tables",
                "Square Coffee Tables",
                "Lift-Top Coffee Tables",
                "Nest Coffee Tables",
                "Glass Coffee Tables",
                "Wooden Coffee Tables",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["tv_units"],
              values: [
                "Wall-Mounted Units",
                "Entertainment Centers",
                "Media Consoles",
                "Corner TV Stands",
                "Floating Shelves",
                "Cabinet TV Units",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["shelves"],
              values: [
                "Wall Shelves",
                "Corner Shelves",
                "Floating Shelves",
                "Ladder Shelves",
                "Bookcases",
                "Display Shelves",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["cabinets"],
              values: [
                "Display Cabinets",
                "Storage Cabinets",
                "Console Cabinets",
                "Curio Cabinets",
                "TV Cabinets",
                "Accent Cabinets",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["chairs"],
              values: [
                "Armchairs",
                "Accent Chairs",
                "Recliners",
                "Rocking Chairs",
                "Swivel Chairs",
                "Lounge Chairs",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["other_living_room_furniture"],
              inputType: "Text",
              maxLength: 40,
              helpingText:
                "Specify the living room furniture item (e.g., 'side table' or 'footstool').",
            },
          ],
        },
      },
      condition(),
    ],
  },
  {
    subCategory: "Other Furniture",
    groups: [
      {
        label: "items",
        inputType: "Text",
        maxLength: 40,
        helpingText: "Specify the furniture item (e.g., 'Table' or 'Beds').",
      },
      condition(),
    ],
  },
  {
    subCategory: "Jewellery",
    groups: [
      {
        label: "type",
        values: [
          "Jewellery Sets",
          "Rings",
          "Earrings",
          "Bracelets",
          "Anklets",
          "Bangles",
          "Chains",
          "Necklaces",
          "Nose rings",
          "Pendants",
          "Others",
        ].map((label) => createOption(label)),
      },
      {
        label: "Material",
        values: [
          "Diamond",
          "Gold",
          "Silver",
          "Artificial",
          "Platinum",
          "Others",
        ].map((label) => createOption(label)),
      },
      {
        label: "Gender",
        values: ["Men", "Women"].map((label) => createOption(label)),
      },
      condition(),
    ],
  },
  {
    subCategory: "Men's Fashion",
    groups: [
      {
        label: "Items",
        values: [
          "T-Shirts",
          "Shirts",
          "Jeans",
          "Trousers",
          "Jackets",
          "Sweaters",
          "Suits",
          "Footwear",
          "Accessories",
          "Other Men's Fashion",
        ].map((label) => createOption(label)),
        nestedGroup: {
          title: "Type",
          conditionalOptions: [
            {
              condition: ["t-shirts"],
              values: [
                "Graphic T-Shirts",
                "Plain T-Shirts",
                "Polo T-Shirts",
                "Henley T-Shirts",
                "V-Neck T-Shirts",
                "Crew Neck T-Shirts",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["shirts"],
              values: [
                "Casual Shirts",
                "Formal Shirts",
                "Denim Shirts",
                "Linen Shirts",
                "Printed Shirts",
                "Checkered Shirts",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["jeans"],
              values: [
                "Skinny Jeans",
                "Slim Fit Jeans",
                "Regular Fit Jeans",
                "Bootcut Jeans",
                "Straight Leg Jeans",
                "Distressed Jeans",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["trousers"],
              values: [
                "Chinos",
                "Formal Trousers",
                "Cargo Pants",
                "Joggers",
                "Track Pants",
                "Khakis",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["jackets"],
              values: [
                "Leather Jackets",
                "Bomber Jackets",
                "Denim Jackets",
                "Blazers",
                "Windbreakers",
                "Parkas",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["footwear"],
              values: [
                "Sneakers",
                "Loafers",
                "Formal Shoes",
                "Boots",
                "Sandals",
                "Slip-Ons",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["accessories"],
              values: [
                "Belts",
                "Watches",
                "Wallets",
                "Sunglasses",
                "Hats & Caps",
                "Ties",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["other_mens_fashion"],
              inputType: "Text",
              maxLength: 40,
              helpingText:
                "Specify the men's fashion item (e.g., 'Watches' or 'gloves').",
            },
          ],
        },
      },
      condition(),
    ],
  },
  {
    subCategory: "Women's Fashion",
    groups: [
      {
        label: "Items",
        values: [
          "Tops",
          "Dresses",
          "Skirts",
          "Jeans",
          "Trousers",
          "Jackets",
          "Sweaters",
          "Footwear",
          "Accessories",
          "Other Women's Fashion",
        ].map((label) => createOption(label)),
        nestedGroup: {
          title: "Type",
          conditionalOptions: [
            {
              condition: ["tops"],
              values: [
                "Blouses",
                "T-Shirts",
                "Tank Tops",
                "Crop Tops",
                "Long Sleeve Tops",
                "Sweatshirts",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["dresses"],
              values: [
                "Maxi Dresses",
                "Midi Dresses",
                "Mini Dresses",
                "Bodycon Dresses",
                "Cocktail Dresses",
                "A-Line Dresses",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["skirts"],
              values: [
                "Mini Skirts",
                "Midi Skirts",
                "Maxi Skirts",
                "Pencil Skirts",
                "Pleated Skirts",
                "A-Line Skirts",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["jeans"],
              values: [
                "Skinny Jeans",
                "Straight Jeans",
                "Wide-Leg Jeans",
                "High-Waist Jeans",
                "Bootcut Jeans",
                "Distressed Jeans",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["trousers"],
              values: [
                "Formal Trousers",
                "Culottes",
                "Palazzo Pants",
                "Cargo Pants",
                "Track Pants",
                "Joggers",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["jackets"],
              values: [
                "Leather Jackets",
                "Blazers",
                "Denim Jackets",
                "Cardigans",
                "Bomber Jackets",
                "Coats",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["footwear"],
              values: [
                "Heels",
                "Flats",
                "Boots",
                "Sandals",
                "Sneakers",
                "Loafers",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["accessories"],
              values: [
                "Bags",
                "Scarves",
                "Jewelry",
                "Belts",
                "Sunglasses",
                "Hats",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["other_womens_fashion"],
              inputType: "Text",
              maxLength: 40,
              helpingText:
                "Specify the women's fashion item (e.g., 'hair accessory' or 'shawl').",
            },
          ],
        },
      },
      condition(),
    ],
  },
  {
    subCategory: "Kid's Fashion",
    groups: [
      {
        label: "Items",
        values: [
          "Tops",
          "Dresses",
          "Jeans",
          "Trousers",
          "Jackets",
          "Sweaters",
          "Footwear",
          "Accessories",
          "Other Kids' Fashion",
        ].map((label) => createOption(label)),
        nestedGroup: {
          title: "Type",
          conditionalOptions: [
            {
              condition: ["tops"],
              values: [
                "T-Shirts",
                "Shirts",
                "Sweatshirts",
                "Polo Shirts",
                "Tank Tops",
                "Long Sleeve Tops",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["dresses"],
              values: [
                "Party Dresses",
                "Casual Dresses",
                "Maxi Dresses",
                "Midi Dresses",
                "Mini Dresses",
                "A-Line Dresses",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["jeans"],
              values: [
                "Skinny Jeans",
                "Straight Jeans",
                "Wide-Leg Jeans",
                "Bootcut Jeans",
                "Distressed Jeans",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["trousers"],
              values: [
                "Cotton Trousers",
                "Track Pants",
                "Joggers",
                "Cargo Pants",
                "Shorts",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["jackets"],
              values: [
                "Denim Jackets",
                "Leather Jackets",
                "Windbreakers",
                "Puffer Jackets",
                "Bomber Jackets",
                "Blazers",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["footwear"],
              values: [
                "Sneakers",
                "Sandals",
                "Boots",
                "Slippers",
                "Flats",
                "Other Kids' Footwear",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["accessories"],
              values: [
                "Hats",
                "Bags",
                "Belts",
                "Socks",
                "Jewelry",
                "Scarves",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["other_kids_fashion"],
              inputType: "Text",
              maxLength: 40,
              helpingText:
                "Specify the kids' fashion item (e.g., 'hair clip' or 'tutu skirt').",
            },
          ],
        },
      },
      condition(),
    ],
  },
  {
    subCategory: "Clothes",
    groups: [
      {
        label: "Items",
        values: [
          "Eastern",
          "Western",
          "Hijabs & Abayas",
          "Sports Clothes",
          "Kids Clothes",
          "Other Clothing",
        ].map((label) => createOption(label)),
        nestedGroup: {
          title: "Type",
          conditionalOptions: [
            {
              condition: ["eastern"],
              values: [
                "Kurtas",
                "Shalwar Kameez",
                "Sarees",
                "Lehengas",
                "Sherwanis",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["western"],
              values: [
                "T-Shirts",
                "Jeans",
                "Dresses",
                "Blouses",
                "Skirts",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["hijabs_&_abayas"],
              values: [
                "Hijabs",
                "Abayas",
                "Niqabs",
                "Shaylas",
                "Khimars",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["sports_clothes"],
              values: [
                "Tracksuits",
                "Sports T-Shirts",
                "Gym Shorts",
                "Activewear",
                "Jackets",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["kids_clothes"],
              values: [
                "Kids T-Shirts",
                "Dresses",
                "Shorts",
                "Trousers",
                "Outerwear",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["other_clothing"],
              inputType: "Text",
              maxLength: 40,
              helpingText:
                "Specify the clothing item (e.g., 'unique design dress' or 'special occasion outfit').",
            },
          ],
        },
      },
      condition(),
    ],
  },
  {
    subCategory: "Computers & Accessories",
    groups: [
      {
        label: "Items",
        values: [
          "Desktops",
          "Workstations",
          "Gaming PCs",
          "Computers System",
          "Laptops",
          "Computer & Laptop Accessories",
          "Computer Components",
          "Servers",
          "Networking Devices",
          "Storage Devices",
          "Monitors",
          "Printers & Scanners",
          "Other Computer & Accessories",
        ].map((label) => createOption(label)),
        nestedGroup: {
          title: "Type",
          conditionalOptions: [
            {
              condition: ["desktops"],
              values: [
                "All-in-One Desktops",
                "Tower Desktops",
                "Mini Desktops",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["desktops"],
              label: "Brand",

              values: [
                "Dell",
                "HP",
                "Lenovo",
                "Apple",
                "Acer",
                "Asus",
                "Microsoft",
                "Samsung",
                "MSI",
                "Toshiba",
                "Other Desktop Brands",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["computers_system"],
              label: "Brand",
              values: [
                "Dell",
                "HP",
                "Lenovo",
                "Asus",
                "Apple",
                "Acer",
                "Microsoft",
                "MSI",
                "Razer",
                "Toshiba",
                "Samsung",
                "Huawei",
                "Other Computer Brands",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["laptops"],
              label: "Brand",
              values: [
                "Dell",
                "HP",
                "Lenovo",
                "Asus",
                "Apple",
                "Acer",
                "Microsoft",
                "MSI",
                "Razer",
                "Toshiba",
                "Samsung",
                "Huawei",
                "Other Laptop Brands",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["laptops"],
              values: [
                "Ultrabooks",
                "Gaming Laptops",
                "Business Laptops",
                "Convertible Laptops",
                "Chromebooks",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["computer_&_laptop_accessories"],
              values: [
                "Mouse",
                "Keyboards",
                "Laptop Cooling Pads",
                "Laptop Chargers",
                "Docking Stations",
                "Webcams",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["computer_components"],
              values: [
                "Processors",
                "Graphics Cards",
                "RAM",
                "Motherboards",
                "Power Supplies",
                "Cooling Systems",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["networking_devices"],
              values: [
                "Routers",
                "Switches",
                "Modems",
                "Network Cables",
                "Access Points",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["storage_devices"],
              values: [
                "External Hard Drives",
                "SSDs",
                "USB Flash Drives",
                "NAS Devices",
                "Memory Cards",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["monitors"],
              label: "Brand",

              values: [
                "Samsung",
                "LG",
                "Dell",
                "HP",
                "Acer",
                "Asus",
                "BenQ",
                "ViewSonic",
                "MSI",
                "Other Monitor Brands",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["monitors"],
              values: [
                "LED Monitors",
                "Curved Monitors",
                "Gaming Monitors",
                "Touchscreen Monitors",
                "4K Monitors",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["printers_&_scanners"],
              label: "Brand",

              values: [
                "HP",
                "Canon",
                "Epson",
                "Brother",
                "Lexmark",
                "Xerox",
                "Ricoh",
                "Samsung",
                "Pantum",
                "Other Printer Brands",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["printers_&_scanners"],
              values: [
                "Inkjet Printers",
                "Laser Printers",
                "All-in-One Printers",
                "Scanners",
                "3D Printers",
                "Others",
              ].map((label) => createOption(label)),
            },

            {
              condition: ["other_computer_&_accessories"],
              inputType: "Text",
              maxLength: 40,
              helpingText:
                "Specify any other accessory (e.g., 'UPS' or 'Graphics Tablet').",
            },
          ],
        },
      },
      condition(),
    ],
  },
  {
    subCategory: "Games",
    groups: [
      {
        label: "Items",
        values: [
          "Gaming Consoles",
          "Video Games",
          "Controllers",
          "Gaming Accessories",
          "Board Games",
          "Other Games",
        ].map((label) => createOption(label)),
        nestedGroup: {
          title: "Type",
          conditionalOptions: [
            {
              condition: ["gaming_consoles"],
              values: [
                "PlayStation",
                "Xbox",
                "Nintendo",
                "Retro Consoles",
                "Handheld Consoles",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["video_games"],
              values: [
                "PC Games",
                "PlayStation Games",
                "Xbox Games",
                "Nintendo Games",
                "Mobile Games",
                "VR Games",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["controllers"],
              values: [
                "PlayStation Controllers",
                "Xbox Controllers",
                "Nintendo Controllers",
                "PC Controllers",
                "VR Controllers",
                "Mobile Game Controllers",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["gaming_accessories"],
              values: [
                "Headsets",
                "VR Headsets",
                "Gaming Keyboards",
                "Gaming Mice",
                "Charging Docks",
                "Game Storage",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["board_games"],
              values: [
                "Card Games",
                "Family Games",
                "Strategy Games",
                "Puzzle Games",
                "Trivia Games",
                "Party Games",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["other_games"],
              inputType: "Text",
              maxLength: 40,
              helpingText:
                "Specify any other type of game (e.g., 'Puzzle Games' or 'Role-Playing Games').",
            },
          ],
        },
      },
      condition(),
    ],
  },
  {
    subCategory: "Televisions & Accessories",
    groups: [
      {
        label: "Items",
        values: [
          "LED TV",
          "CRT TV",
          "Dish Antennas",
          "IPTV",
          "Projectors & Projection Screens",
          "TV Cables",
          "Android Boxes",
          "Wall Mounts",
          "TV Remotes",
          "Other TV Accessories",
        ].map((label) => createOption(label)),
        nestedGroup: {
          title: "Type",
          conditionalOptions: [
            {
              condition: ["led_tv"],
              label: "Brand",
              values: [
                "Samsung",
                "TCL",
                "Sony",
                "LG",
                "Audionic",
                "Changhong Ruba",
                "EcoStar",
                "Haier",
                "Hisense",
                "Logitech",
                "Orient",
                "Panasonic",
                "PEL",
                "Philips",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["crt_tv"],
              label: "Brand",
              values: [
                "Sony",
                "Panasonic",
                "Philips",
                "Samsung",
                "Toshiba",
                "LG",
                "Sharp",
                "Hitachi",
                "Sanyo",
                "RCA",
                "Other Brands",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["led_tv"],
              label: "Screen Size",
              values: [
                "Below 32 Inches",
                "32 Inches",
                "33-43 Inches",
                "44-49 Inches",
                "50-59 Inches",
                "60-69 Inches",
                "70 Inches & above",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["led_tv"],
              label: "Resolution",
              values: [
                "Standard (480p)",
                "HD (720p)",
                "Full HD (1080p)",
                "4K or Ultra HD (2160p)",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["dish_antennas"],
              values: [
                "Satellite Dish",
                "Digital Antenna",
                "Portable Antenna",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["projectors_&_projection_screens"],
              values: [
                "LCD Projectors",
                "DLP Projectors",
                "Laser Projectors",
                "Projection Screens",
                "Portable Projectors",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["android_boxes"],
              values: [
                "4K Boxes",
                "HD Boxes",
                "Streaming Sticks",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["other_tv_accessories"],
              inputType: "Text",
              maxLength: 40,
              helpingText:
                "Specify the accessory type (e.g., 'Signal Booster' or 'HDMI Splitter').",
            },
          ],
        },
      },
      condition(),
    ],
  },
  {
    subCategory: "Home Appliances",
    groups: [
      {
        label: "Items",
        values: [
          "Washing Machines",
          "Refrigerators",
          "Microwave Ovens",
          "Air Conditioners",
          "Dishwashers",
          "Water Dispensers",
          "Vacuum Cleaners",
          "Ceiling Fans",
          "Table Fans",
          "Iron & Garment Steamer",
          "Juicers & Blenders",
          "Food Processors",
          "Electric Kettles",
          "Coffee Makers",
          "Toasters",
          "Others",
        ].map((label) => createOption(label)),
        nestedGroup: {
          title: "Brand",
          conditionalOptions: [
            {
              condition: ["washing_machines"],
              values: [
                "Samsung",
                "LG",
                "Haier",
                "Panasonic",
                "Siemens",
                "Bosch",
                "IFB",
                "Beko",
                "Whirlpool",
                "Midea",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["refrigerators"],
              values: [
                "Samsung",
                "LG",
                "Whirlpool",
                "Haier",
                "Panasonic",
                "Midea",
                "Electrolux",
                "Hisense",
                "Sharp",
                "Bosch",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["microwave_ovens"],
              values: [
                "Samsung",
                "LG",
                "Panasonic",
                "Sharp",
                "Kenwood",
                "Toshiba",
                "Whirlpool",
                "Beko",
                "Midea",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["air_conditioners"],
              values: [
                "Samsung",
                "LG",
                "Daikin",
                "Hitachi",
                "Mitsubishi",
                "Panasonic",
                "Carrier",
                "Voltas",
                "Gree",
                "Blue Star",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["washing_machines"],
              label: "Type",
              values: [
                "Top Load",
                "Front Load",
                "Semi-Automatic",
                "Fully Automatic",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["refrigerators"],
              label: "Type",
              values: [
                "Single Door",
                "Double Door",
                "Side by Side",
                "French Door",
                "Mini Fridge",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["microwave_ovens"],
              label: "Type",
              values: ["Solo", "Grill", "Convection", "Combo"].map((label) =>
                createOption(label)
              ),
            },
            {
              condition: ["air_conditioners"],
              label: "Cooling Capacity",
              values: ["1 Ton", "1.5 Ton", "2 Ton", "Others"].map((label) =>
                createOption(label)
              ),
            },
            {
              condition: ["dishwashers"],
              values: [
                "Bosch",
                "Siemens",
                "LG",
                "Samsung",
                "Whirlpool",
                "Miele",
                "Electrolux",
                "Kitchenaid",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["water_dispensers"],
              values: [
                "Aquafina",
                "Nestle",
                "Havells",
                "Kenstar",
                "Usha",
                "Voltas",
                "Blue Star",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["vacuum_cleaners"],
              values: [
                "Dyson",
                "Bissell",
                "Miele",
                "Shark",
                "Panasonic",
                "Philips",
                "Black+Decker",
                "Samsung",
                "LG",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["table_fans"],
              values: [
                "Usha",
                "Bajaj",
                "Orient",
                "V-Guard",
                "Crompton",
                "Havells",
                "Luminous",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["iron_&_garment_steamer"],
              values: [
                "Philips",
                "Panasonic",
                "Black+Decker",
                "Tefal",
                "Croma",
                "Usha",
                "Bajaj",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["food_processors"],
              values: [
                "Philips",
                "Kenwood",
                "Black+Decker",
                "Bajaj",
                "Croma",
                "Usha",
                "Prestige",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["others"],
              inputType: "Text",
              maxLength: 40,
              helpingText:
                "Specify the appliance type (e.g., 'Hand Blender' or 'Electric Grill').",
            },
          ],
        },
      },
      condition(),
    ],
  },
  {
    subCategory: "Audio",
    groups: [
      {
        label: "Items",
        values: [
          "Speakers",
          "Headphones",
          "Earphones",
          "Soundbars",
          "Amplifiers",
          "Microphones",
          "Bluetooth Speakers",
          "Home Theater Systems",
          "Party Speakers",
          "Portable Speakers",
          "Others",
        ].map((label) => createOption(label)),
        nestedGroup: {
          title: "Brand",
          conditionalOptions: [
            {
              condition: ["speakers"],
              values: [
                "Sony",
                "JBL",
                "Bose",
                "Harman Kardon",
                "Samsung",
                "Philips",
                "LG",
                "Sennheiser",
                "Logitech",
                "Creative",
                "F&D",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["headphones"],
              values: [
                "Sony",
                "Bose",
                "Sennheiser",
                "JBL",
                "Beats",
                "Skullcandy",
                "Audio-Technica",
                "Beyerdynamic",
                "Bang & Olufsen",
                "AKG",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["earphones"],
              values: [
                "Sony",
                "JBL",
                "Samsung",
                "Beats",
                "Skullcandy",
                "Xiaomi",
                "OnePlus",
                "Bose",
                "Sennheiser",
                "Anker",
                "Realme",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["soundbars"],
              values: [
                "Sony",
                "Samsung",
                "JBL",
                "LG",
                "Bose",
                "Vizio",
                "Harman Kardon",
                "Philips",
                "Sonos",
                "Klipsch",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["amplifiers"],
              values: [
                "Sony",
                "Yamaha",
                "Denon",
                "Pioneer",
                "Onkyo",
                "Marantz",
                "Peavey",
                "Fender",
                "Behringer",
                "Boss",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["microphones"],
              values: [
                "Shure",
                "Audio-Technica",
                "Rode",
                "Samson",
                "Sennheiser",
                "Blue Microphones",
                "BeyerDynamic",
                "AKG",
                "MXL",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["speakers"],
              label: "Type",
              values: [
                "Bluetooth Speakers",
                "Wired Speakers",
                "Portable Speakers",
                "Party Speakers",
                "Home Speakers",
                "Sound Systems",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["headphones"],
              label: "Type",
              values: [
                "Wired Headphones",
                "Wireless Headphones",
                "Over-Ear Headphones",
                "On-Ear Headphones",
                "In-Ear Headphones",
                "Noise Cancelling Headphones",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["earphones"],
              label: "Type",
              values: [
                "Wired Earphones",
                "Wireless Earphones",
                "In-Ear Earphones",
                "True Wireless Earphones",
                "Sports Earphones",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["soundbars"],
              label: "Channels",
              values: [
                "2.1 Channel",
                "3.1 Channel",
                "5.1 Channel",
                "7.1 Channel",
                "Dolby Atmos",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["amplifiers"],
              label: "Power Output",
              values: [
                "50W - 100W",
                "100W - 200W",
                "200W - 500W",
                "500W - 1000W",
                "1000W and above",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["microphones"],
              label: "Type",
              values: [
                "Dynamic Microphone",
                "Condenser Microphone",
                "Ribbon Microphone",
                "Lavalier Microphone",
                "Wireless Microphone",
                "USB Microphone",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["home_theater_systems"],
              values: [
                "Sony",
                "Samsung",
                "LG",
                "Bose",
                "JBL",
                "Philips",
                "Vizio",
                "Pioneer",
                "Harman Kardon",
                "Onkyo",
                "Others",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["home_theater_systems"],
              label: "Type",
              values: [
                "2.1 Channel",
                "5.1 Channel",
                "7.1 Channel",
                "Dolby Atmos",
              ].map((label) => createOption(label)),
            },
            {
              condition: ["others"],
              inputType: "Text",
              maxLength: 40,
              helpingText:
                "Specify the audio equipment type (e.g., 'Home Audio System' or 'DJ Speakers').",
            },
          ],
        },
      },
      condition(),
    ],
  },
  {
    subCategory: "Other Electronics",
    groups: [
      {
        label: "items",
        inputType: "Text",
        maxLength: 40,
        helpingText:
          "Specify the Electronics & Home Appliances item (e.g., 'Air Conditioners' or 'LED TV').",
      },
      condition(),
    ],
  },
  {
    subCategory: "Parrots",
    groups: [
      {
        label: "Type",
        values: [
          "Lovebird",
          "Cockatiel",
          "Raw Parrot",
          "Budgie",
          "African Grey",
          "Amazon",
          "Cockatoo",
          "Conure",
          "Eclectus",
          "Fisher",
          "Kashmiri",
          "Katha",
          "Lories",
          "Macaw",
          "Monk",
        ].map((label) => createOption(label)),
      },
      {
        label: "Gender",
        values: ["Male", "Female", "Pair"].map((label) => createOption(label)),
      },
      {
        label: "Age",
        inputType: "number",
        helpingText: "Specify the age in years (e.g., 1 year, 2 years, etc.).",
      },
    ],
  },
  {
    subCategory: "Cats",
    groups: [
      {
        label: "Breed",
        values: [
          "Persian",
          "Siamese",
          "Maine Coon",
          "Bengal",
          "Sphynx",
          "Ragdoll",
          "British Shorthair",
          "Abyssinian",
          "Burmese",
          "Scottish Fold",
          "Oriental Shorthair",
          "American Shorthair",
          "Exotic Shorthair",
          "Others",
        ].map((label) => createOption(label)),
      },
      {
        label: "Gender",
        values: ["Male", "Female", "Pair"].map((label) => createOption(label)),
      },
      {
        label: "Age",
        inputType: "number",
        helpingText: "Specify the age in years (e.g., 1 year, 2 years, etc.).",
      },
    ],
  },
  {
    subCategory: "Dogs",
    groups: [
      {
        label: "Breed",
        values: [
          "Labrador Retriever",
          "German Shepherd",
          "Golden Retriever",
          "Bulldog",
          "Beagle",
          "Poodle",
          "Rottweiler",
          "Dachshund",
          "Boxer",
          "Siberian Husky",
          "Chihuahua",
          "Shih Tzu",
          "Doberman Pinscher",
          "Yorkshire Terrier",
          "Pomeranian",
          "Cocker Spaniel",
          "Bichon Frise",
          "Others",
        ].map((label) => createOption(label)),
      },
      {
        label: "Gender",
        values: ["Male", "Female", "Pair"].map((label) => createOption(label)),
      },
      {
        label: "Age",
        inputType: "number",
        helpingText: "Specify the age in years (e.g., 1 year, 2 years, etc.).",
      },
    ],
  },
  {
    subCategory: "Rabbits",
    groups: [
      {
        label: "Breed",
        values: [
          "Himalayan",
          "Holland Lop",
          "Mini Rex",
          "Mini Lop",
          "Angora",
          "English Angora",
          "Netherland Dwarf",
          "Lionhead",
          "English Spot",
          "Flemish Giant",
          "Californian",
          "Others",
        ].map((label) => createOption(label)),
      },
      {
        label: "Gender",
        values: ["Male", "Female", "Pair"].map((label) => createOption(label)),
      },
      {
        label: "Age",
        inputType: "number",
        helpingText:
          "Specify the age in months (e.g., 6 months, 12 months, etc.).",
      },
    ],
  },
  {
    subCategory: "Hens",
    groups: [
      {
        label: "Breed",
        values: [
          "Rhode Island Red",
          "Leghorn",
          "Plymouth Rock",
          "Orpington",
          "Sussex",
          "Australorp",
          "Wyandotte",
          "Brahma",
          "Marans",
          "Cochin",
          "Silkie",
          "Other Breeds",
        ].map((label) => createOption(label)),
      },
      {
        label: "Gender",
        values: ["Male", "Female", "Pair"].map((label) => createOption(label)),
      },
      {
        label: "Age",
        inputType: "number",
        helpingText:
          "Specify the age in months (e.g., 6 months, 12 months, etc.).",
      },
    ],
  },
  {
    subCategory: "Pigeons",
    groups: [
      {
        label: "Breed",
        values: [
          "Homing Pigeons",
          "Racing Homers",
          "Utility Breeds",
          "Fancy Pigeons",
          "King Pigeons",
          "Mourning Doves",
          "Other Breeds",
        ].map((label) => createOption(label)),
      },
      {
        label: "Gender",
        values: ["Male", "Female", "Pair"].map((label) => createOption(label)),
      },
      {
        label: "Age",
        inputType: "number",
        helpingText:
          "Specify the age in months (e.g., 6 months, 12 months, etc.).",
      },
    ],
  },
  {
    subCategory: "Other Birds & Animals",
    groups: [
      {
        label: "Type",
        values: [
          "Cockatiel",
          "Budgie",
          "Canary",
          "Finch",
          "Macaw",
          "Lovebird",
          "Peacock",
          "Dove",
          "Parakeet",
          "Cockatoo",
          "African Grey",
          "Hawk",
          "Falcon",
          "Guinea Pig",
          "Hamster",
          "Tortoise",
          "Chinchilla",
          "Gecko",
          "Other Birds",
          "Other Animals",
        ].map((label) => createOption(label)),
        nestedGroup: {
          title: "Name",
          conditionalOptions: [
            {
              condition: ["other_birds", "other_animals"],
              inputType: "Text",
              helpingText:
                "Specify the name of the bird or animal if applicable.",
            },
          ],
        },
      },
      {
        label: "Gender",
        values: ["Male", "Female", "Pair", "Unsexed"].map((label) =>
          createOption(label)
        ),
      },
      {
        label: "Age",
        inputType: "number",
        helpingText:
          "Specify the age in months or years (e.g., 6 months, 2 years, etc.).",
      },
      {
        label: "Breed/Species",
        inputType: "Text",
        helpingText: "Specify the breed or species if applicable.",
      },
    ],
  },
];

export const isLogged: boolean = false;

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
