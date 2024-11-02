import {
  CategoryLink,
  LocationDataProps,
  Option,
  CategoryOptions,
  RenderProductCardProps,
  RouteData,
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
      {
        href: "other-mobiles",
        title: "Other Mobile",
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

export const categoryOptionsData: CategoryOptions[] = [
  {
    subCategory: "Cars",
    groups: [
      {
        label: "Make",
        values: [
          { label: "Suzuki", value: "suzuki" },
          { label: "Toyota", value: "toyota" },
          { label: "Honda", value: "honda" },
          { label: "Hyundai", value: "hyundai" },
          { label: "Nissan", value: "nissan" },
          { label: "Other Make", value: "others_make" },
        ],
        nestedGroup: {
          title: "Model",

          conditionalOptions: [
            {
              condition: "suzuki",

              values: [
                { label: "Alto", value: "alto" },
                { label: "WagonR", value: "wagonr" },
                { label: "Swift", value: "swift" },
                { label: "Mehran VXR", value: "mehran_vxr" },
                { label: "Mehran VX", value: "mehran_vx" },
                { label: "Cultus VXR", value: "cultus_vxr" },
                { label: "Cultus VXL", value: "cultus_vxl" },
                { label: "Bolan", value: "bolan" },
                { label: "Ravi", value: "ravi" },
                { label: "Jimny", value: "jimny" },
                { label: "Other", value: "others" },
              ],
            },
            {
              condition: "toyota",

              values: [
                { label: "Corolla", value: "corolla" },
                { label: "Yaris", value: "yaris" },
                { label: "Camry", value: "camry" },
                { label: "Land Cruiser", value: "land_cruiser" },
                { label: "Hilux", value: "hilux" },
                { label: "Fortuner", value: "fortuner" },
                { label: "Prado", value: "prado" },
                { label: "Avalon", value: "avalon" },
                { label: "C-HR", value: "chr" },
                { label: "RAV4", value: "rav4" },
                { label: "Other", value: "others" },
              ],
            },
            {
              condition: "honda",

              values: [
                { label: "Civic", value: "civic" },
                { label: "Accord", value: "accord" },
                { label: "City", value: "city" },
                { label: "CR-V", value: "cr_v" },
                { label: "HR-V", value: "hr_v" },
                { label: "Jazz", value: "jazz" },
                { label: "Brio", value: "brio" },
                { label: "Pilot", value: "pilot" },
                { label: "Odyssey", value: "odyssey" },
                { label: "Fit", value: "fit" },
                { label: "Other", value: "others" },
              ],
            },
            {
              condition: "nissan",

              values: [
                { label: "Altima", value: "altima" },
                { label: "Sentra", value: "sentra" },
                { label: "Maxima", value: "maxima" },
                { label: "Rogue", value: "rogue" },
                { label: "Murano", value: "murano" },
                { label: "Pathfinder", value: "pathfinder" },
                { label: "Versa", value: "versa" },
                { label: "Armada", value: "armada" },
                { label: "370Z", value: "370z" },
                { label: "GT-R", value: "gt_r" },
                { label: "Other", value: "others" },
              ],
            },
            {
              condition: "hyundai",

              values: [
                { label: "Elantra", value: "elantra" },
                { label: "Sonata", value: "sonata" },
                { label: "Tucson", value: "tucson" },
                { label: "Santa Fe", value: "santa_fe" },
                { label: "Accent", value: "accent" },
                { label: "Kona", value: "kona" },
                { label: "Creta", value: "creta" },
                { label: "Venue", value: "venue" },
                { label: "Palisade", value: "palisade" },
                { label: "Ioniq", value: "ioniq" },
                { label: "Other", value: "others" },
              ],
            },
            {
              condition: "others_make",
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
      {
        label: "Condition",
        values: [
          { label: "New", value: "new" },
          { label: "Used", value: "used" },
        ],
        nestedGroup: {
          title: "KMs Driven",
          conditionalOptions: [
            {
              condition: "used",
              inputType: "number",
              maxLength: 6,
              helpingText:
                "Please provide the distance traveled in kilometers (e.g., 45000).",
            },
          ],
        },
      },
      {
        label: "Fuel",
        values: [
          { label: "Petrol", value: "petrol" },
          { label: "Diesel", value: "diesel" },
          { label: "CNG", value: "cng" },
          { label: "LPG", value: "lpg" },
          { label: "Other Fuels", value: "others_fuel" },
        ],
      },
      {
        label: "Transmission",
        values: [
          { label: "Automatic", value: "automatic" },
          { label: "Manual", value: "manual" },
        ],
      },
      {
        label: "Color",
        values: [
          { label: "White", value: "white" },
          { label: "Black", value: "black" },
          { label: "Silver", value: "silver" },
          { label: "Gray", value: "gray" },
          { label: "Blue", value: "blue" },
          { label: "Red", value: "red" },
        ],
      },
      {
        label: "Documents",
        values: [
          { label: "Original", value: "original" },
          { label: "Duplicate", value: "duplicate" },
        ],
      },
    ],
  },
  {
    subCategory: "Bikes",
    groups: [
      {
        label: "Make",
        values: [
          { label: "Honda", value: "honda" },
          { label: "Yamaha", value: "yamaha" },
          { label: "Suzuki", value: "suzuki" },
          { label: "Kawasaki", value: "kawasaki" },
          { label: "Hi Speed", value: "hi_speed" },
          { label: "Super Power", value: "super_power" },
          { label: "Super Star", value: "super_star" },
          { label: "Unique", value: "unique" },
          { label: "Other Make", value: "others_make" },
        ],
        nestedGroup: {
          title: "Model",
          conditionalOptions: [
            {
              condition: "honda",
              values: [
                { label: "CBR 500R", value: "cb500r" },
                { label: "CBR 1000RR", value: "cbr1000rr" },
                { label: "CRF 250L", value: "crf250l" },
                { label: "CB500F", value: "cb500f" },
                { label: "CBR 250R", value: "cbr250r" },
                { label: "SH150i", value: "sh150i" },
                { label: "Other", value: "others" },
              ],
            },
            {
              condition: "yamaha",
              values: [
                { label: "YZF-R3", value: "yzf_r3" },
                { label: "MT-07", value: "mt_07" },
                { label: "FZ25", value: "fz25" },
                { label: "YZF-R1", value: "yzf_r1" },
                { label: "FZS 250", value: "fzs_250" },
                { label: "XTZ 250", value: "xtz_250" },
                { label: "Other", value: "others" },
              ],
            },
            {
              condition: "suzuki",
              values: [
                { label: "GSX-R1000", value: "gsxr1000" },
                { label: "Hayabusa", value: "hayabusa" },
                { label: "V-Strom 650", value: "v_strom_650" },
                { label: "GSX-S750", value: "gsx_s750" },
                { label: "SV650", value: "sv650" },
                { label: "GZ150", value: "gz150" },
                { label: "Other", value: "others" },
              ],
            },
            {
              condition: "kawasaki",
              values: [
                { label: "Ninja 250", value: "ninja_250" },
                { label: "Z900", value: "z900" },
                { label: "Versys 650", value: "versys_650" },
                { label: "Ninja H2", value: "ninja_h2" },
                { label: "KLR650", value: "klr650" },
                { label: "Z400", value: "z400" },
                { label: "Other", value: "others" },
              ],
            },
            {
              condition: "hi_speed",
              values: [{ label: "Other", value: "others" }],
            },
            {
              condition: "super_power",
              values: [{ label: "Other", value: "others" }],
            },
            {
              condition: "super_star",
              values: [{ label: "Other", value: "others" }],
            },
            {
              condition: "unique",
              values: [{ label: "Other", value: "others" }],
            },
            {
              condition: "others_make",
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
        values: [
          { label: "2 Stroke", value: "2_stroke" },
          { label: "4 Stroke", value: "4_stroke" },
        ],
      },
      {
        label: "Engine Capacity",
        values: [
          { label: "< 50cc", value: "<50cc" },
          { label: "70cc", value: "70cc" },
          { label: "100cc - 149cc", value: "100-149cc" },
          { label: "150cc - 199cc", value: "150-199cc" },
          { label: "200cc - 249cc", value: "200-249cc" },
          { label: "250cc - 299cc", value: "250-299cc" },
          { label: "300cc - 499cc", value: "300-499cc" },
          { label: "500cc - 699cc", value: "500-699cc" },
          { label: "700cc - 999cc", value: "700-999cc" },
          { label: "1000cc", value: "1000cc" },
          { label: "Above 1000cc", value: "above-1000cc" },
          { label: "Other Capacities", value: "others_capacity" },
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
        values: [
          { label: "Self Start", value: "self_start" },
          { label: "Kickstarter", value: "kickstarter" },
        ],
      },
      {
        label: "Origin",
        values: [
          { label: "Local", value: "local" },
          { label: "Chinese", value: "chinese" },
          { label: "Imported", value: "imported" },
        ],
      },
      {
        label: "Condition",
        values: [
          { label: "New", value: "new" },
          { label: "Used", value: "used" },
        ],
      },
    ],
  },
  {
    subCategory: "Rickshaw & Chingchi",
    groups: [
      {
        label: "Make",
        values: [
          { label: "Bajaj", value: "bajaj" },
          { label: "Qingqi", value: "qingqi" },
          { label: "Adam", value: "adam" },
          { label: "Suzuki", value: "suzuki" },
          { label: "Hi-Speed", value: "hi_speed" },
          { label: "Chingchi", value: "chingchi" },
          { label: "Other Make", value: "others_make" },
        ],
      },
      {
        label: "Year",
        inputType: "number",
        maxLength: 4,
      },
      {
        label: "Condition",
        values: [
          { label: "New", value: "new" },
          { label: "Used", value: "used" },
        ],
      },
    ],
  },
  {
    subCategory: "Buses and Vans",
    groups: [
      {
        label: "Make",
        values: [
          { label: "Suzuki", value: "suzuki" },
          { label: "Toyota", value: "toyota" },
          { label: "Hino", value: "hino" },
          { label: "Isuzu", value: "isuzu" },
          { label: "Daihatsu", value: "daihatsu" },
          { label: "Yutong", value: "yutong" },
          { label: "Other Make", value: "others_make" },
        ],
      },
      {
        label: "Year",
        inputType: "number",
        maxLength: 4,
      },
      {
        label: "Condition",
        values: [
          { label: "New", value: "new" },
          { label: "Used", value: "used" },
        ],
      },
    ],
  },
  {
    subCategory: "Other Vehicles",
    groups: [
      {
        label: "Condition",
        values: [
          { label: "New", value: "new" },
          { label: "Used", value: "used" },
        ],
      },
    ],
  },
  {
    subCategory: "Mobiles",
    groups: [
      {
        label: "Brand",
        values: [
          { label: "Samsung", value: "samsung" },
          { label: "Apple", value: "apple" },
          { label: "Xiaomi", value: "xiaomi" },
          { label: "Oppo", value: "oppo" },
          { label: "Vivo", value: "vivo" },
          { label: "Huawei", value: "huawei" },
          { label: "OnePlus", value: "oneplus" },
          { label: "Google", value: "google" },
          { label: "Realme", value: "realme" },
          { label: "Motorola", value: "motorola" },
          { label: "Other Brand", value: "other_brand" },
        ],
        nestedGroup: {
          title: "Model",
          conditionalOptions: [
            {
              condition: "samsung",
              values: [
                { label: "Galaxy S23", value: "galaxy_s23" },
                { label: "Galaxy S23 Ultra", value: "galaxy_s23_ultra" },
                { label: "Galaxy A54", value: "galaxy_a54" },
                { label: "Galaxy Z Flip 5", value: "galaxy_z_flip_5" },
                { label: "Galaxy Z Fold 4", value: "galaxy_z_fold_4" },
                { label: "Galaxy A34", value: "galaxy_a34" },
              ],
            },
            {
              condition: "apple",
              values: [
                { label: "iPhone 14", value: "iphone_14" },
                { label: "iPhone 14 Pro", value: "iphone_14_pro" },
                { label: "iPhone 14 Pro Max", value: "iphone_14_pro_max" },
                { label: "iPhone 13", value: "iphone_13" },
                { label: "iPhone 13 Mini", value: "iphone_13_mini" },
                { label: "iPhone SE (3rd Gen)", value: "iphone_se" },
                { label: "iPhone 12", value: "iphone_12" },
                { label: "iPhone 12 Mini", value: "iphone_12_mini" },
                { label: "iPhone 12 Pro", value: "iphone_12_pro" },
                { label: "iPhone 12 Pro Max", value: "iphone_12_pro_max" },
                { label: "iPhone 11", value: "iphone_11" },
                { label: "iPhone 11 Pro", value: "iphone_11_pro" },
                { label: "iPhone 11 Pro Max", value: "iphone_11_pro_max" },
                { label: "iPhone XS", value: "iphone_xs" },
                { label: "iPhone XS Max", value: "iphone_xs_max" },
                { label: "iPhone XR", value: "iphone_xr" },
                { label: "iPhone X", value: "iphone_x" },
              ],
            },
            {
              condition: "xiaomi",
              values: [
                { label: "Redmi Note 12", value: "redmi_note_12" },
                { label: "Xiaomi 13", value: "xiaomi_13" },
                { label: "Poco F5", value: "poco_f5" },
                { label: "Redmi K50", value: "redmi_k50" },
                { label: "Xiaomi 12T", value: "xiaomi_12t" },
                { label: "Redmi Note 11 Pro", value: "redmi_note_11_pro" },
              ],
            },
            {
              condition: "oppo",
              values: [
                { label: "Oppo Reno 8", value: "oppo_reno_8" },
                { label: "Oppo Find X5", value: "oppo_find_x5" },
                { label: "Oppo A78", value: "oppo_a78" },
                { label: "Oppo F21 Pro", value: "oppo_f21_pro" },
                { label: "Oppo Reno 8 Pro", value: "oppo_reno_8_pro" },
              ],
            },
            {
              condition: "vivo",
              values: [
                { label: "Vivo V25", value: "vivo_v25" },
                { label: "Vivo X80", value: "vivo_x80" },
                { label: "Vivo Y100", value: "vivo_y100" },
                { label: "Vivo V23", value: "vivo_v23" },
                { label: "Vivo X90 Pro", value: "vivo_x90_pro" },
              ],
            },
            {
              condition: "huawei",
              values: [
                { label: "Huawei P50", value: "huawei_p50" },
                { label: "Huawei Mate 40", value: "huawei_mate_40" },
                { label: "Huawei P50 Pro", value: "huawei_p50_pro" },
                { label: "Huawei Nova 10", value: "huawei_nova_10" },
                { label: "Huawei Mate 50", value: "huawei_mate_50" },
              ],
            },
            {
              condition: "oneplus",
              values: [
                { label: "OnePlus 11", value: "oneplus_11" },
                { label: "OnePlus Nord 2", value: "oneplus_nord_2" },
                { label: "OnePlus 10 Pro", value: "oneplus_10_pro" },
                { label: "OnePlus 9", value: "oneplus_9" },
                { label: "OnePlus Nord CE 2", value: "oneplus_nord_ce_2" },
              ],
            },
            {
              condition: "google",
              values: [
                { label: "Pixel 7", value: "pixel_7" },
                { label: "Pixel 7a", value: "pixel_7a" },
                { label: "Pixel 6", value: "pixel_6" },
                { label: "Pixel 6a", value: "pixel_6a" },
                { label: "Pixel 5", value: "pixel_5" },
              ],
            },
            {
              condition: "realme",
              values: [
                { label: "Realme 11", value: "realme_11" },
                { label: "Realme GT 2 Pro", value: "realme_gt_2_pro" },
                { label: "Realme 10", value: "realme_10" },
                { label: "Realme C35", value: "realme_c35" },
                { label: "Realme Narzo 50", value: "realme_narzo_50" },
              ],
            },
            {
              condition: "motorola",
              values: [
                { label: "Motorola Edge 30", value: "motorola_edge_30" },
                {
                  label: "Motorola G Stylus 5G",
                  value: "motorola_g_stylus_5g",
                },
                { label: "Motorola Edge 20", value: "motorola_edge_20" },
                {
                  label: "Motorola Moto G Power",
                  value: "motorola_moto_g_power",
                },
                { label: "Motorola Razr 5G", value: "motorola_razr_5g" },
              ],
            },
            {
              condition: "other_brand",
              inputType: "Text",
              maxLength: 15,
              helpingText:
                "Please enter the model of the mobile (e.g., specific models like 'Galaxy S23' or 'iPhone 15').",
            },
          ],
        },
      },
      {
        label: "Condition",
        values: [
          { label: "New", value: "new" },
          { label: "Open Box", value: "openbox" },
          { label: "Used", value: "used" },
          { label: "Refurbished", value: "refurbished" },
          { label: "For Parts", value: "parts" },
        ],
      },
    ],
  },
  {
    subCategory: "Tablets",
    groups: [
      {
        label: "Brand",
        values: [
          { label: "Apple", value: "apple" },
          { label: "Samsung", value: "samsung" },
          { label: "Microsoft", value: "microsoft" },
          { label: "Lenovo", value: "lenovo" },
          { label: "Amazon", value: "amazon" },
          { label: "Huawei", value: "huawei" },
          { label: "Other Brand", value: "other_brand" },
        ],
        nestedGroup: {
          title: "Model",
          conditionalOptions: [
            {
              condition: "apple",
              values: [
                { label: "iPad Pro 12.9-inch", value: "ipad_pro_12_9" },
                { label: "iPad Pro 11-inch", value: "ipad_pro_11" },
                { label: "iPad Air (5th Gen)", value: "ipad_air" },
                { label: "iPad (10th Gen)", value: "ipad_10" },
                { label: "iPad Mini (6th Gen)", value: "ipad_mini" },
              ],
            },
            {
              condition: "samsung",
              values: [
                { label: "Galaxy Tab S9", value: "galaxy_tab_s9" },
                { label: "Galaxy Tab S9 Ultra", value: "galaxy_tab_s9_ultra" },
                { label: "Galaxy Tab A8", value: "galaxy_tab_a8" },
                { label: "Galaxy Tab S7 FE", value: "galaxy_tab_s7_fe" },
              ],
            },
            {
              condition: "microsoft",
              values: [
                { label: "Surface Pro 9", value: "surface_pro_9" },
                { label: "Surface Go 3", value: "surface_go_3" },
                {
                  label: "Surface Laptop Studio",
                  value: "surface_laptop_studio",
                },
                { label: "Surface Duo 2", value: "surface_duo_2" },
              ],
            },
            {
              condition: "lenovo",
              values: [
                { label: "Tab P12 Pro", value: "tab_p12_pro" },
                { label: "Tab M10 Plus", value: "tab_m10_plus" },
                { label: "Tab P11", value: "tab_p11" },
                { label: "Tab M8", value: "tab_m8" },
              ],
            },
            {
              condition: "amazon",
              values: [
                { label: "Fire HD 10", value: "fire_hd_10" },
                { label: "Fire HD 10 Plus", value: "fire_hd_10_plus" },
                { label: "Fire 7", value: "fire_7" },
                { label: "Fire HD 8", value: "fire_hd_8" },
              ],
            },
            {
              condition: "huawei",
              values: [
                { label: "MatePad Pro", value: "matepad_pro" },
                { label: "MatePad 11", value: "matepad_11" },
                { label: "MediaPad M5", value: "mediapad_m5" },
                { label: "MediaPad T5", value: "mediapad_t5" },
              ],
            },
            {
              condition: "other_brand",
              inputType: "Text",
              maxLength: 15,
              helpingText:
                "Please enter the model of the tablet (e.g., specific models like 'iPad Pro' or 'Galaxy Tab S9').",
            },
          ],
        },
      },
      {
        label: "Condition",
        values: [
          { label: "New", value: "new" },
          { label: "Open Box", value: "openbox" },
          { label: "Used", value: "used" },
          { label: "Refurbished", value: "refurbished" },
          { label: "For Parts", value: "parts" },
        ],
      },
    ],
  },
  {
    subCategory: "Smart Watches",
    groups: [
      {
        label: "Brand",
        values: [
          { label: "Apple", value: "apple" },
          { label: "Samsung", value: "samsung" },
          { label: "Garmin", value: "garmin" },
          { label: "Fitbit", value: "fitbit" },
          { label: "Fossil", value: "fossil" },
          { label: "Amazfit", value: "amazfit" },
          { label: "Other Brand", value: "other_brand" },
        ],
        nestedGroup: {
          title: "Model",
          conditionalOptions: [
            {
              condition: "apple",
              values: [
                {
                  label: "Apple Watch Series 9",
                  value: "apple_watch_series_9",
                },
                { label: "Apple Watch Ultra 2", value: "apple_watch_ultra_2" },
                { label: "Apple Watch SE (2nd Gen)", value: "apple_watch_se" },
                {
                  label: "Apple Watch Series 8",
                  value: "apple_watch_series_8",
                },
              ],
            },
            {
              condition: "samsung",
              values: [
                { label: "Galaxy Watch 6", value: "galaxy_watch_6" },
                {
                  label: "Galaxy Watch 6 Classic",
                  value: "galaxy_watch_6_classic",
                },
                {
                  label: "Galaxy Watch Active 2",
                  value: "galaxy_watch_active_2",
                },
                { label: "Galaxy Watch 5", value: "galaxy_watch_5" },
              ],
            },
            {
              condition: "garmin",
              values: [
                { label: "Garmin Fenix 7", value: "garmin_fenix_7" },
                { label: "Garmin Venu 2", value: "garmin_venu_2" },
                {
                  label: "Garmin Forerunner 255",
                  value: "garmin_forerunner_255",
                },
                { label: "Garmin Instinct 2", value: "garmin_instinct_2" },
              ],
            },
            {
              condition: "fitbit",
              values: [
                { label: "Fitbit Sense 2", value: "fitbit_sense_2" },
                { label: "Fitbit Versa 4", value: "fitbit_versa_4" },
                { label: "Fitbit Inspire 3", value: "fitbit_inspire_3" },
                { label: "Fitbit Luxe", value: "fitbit_luxe" },
              ],
            },
            {
              condition: "fossil",
              values: [
                { label: "Fossil Gen 6", value: "fossil_gen_6" },
                { label: "Fossil Hybrid HR", value: "fossil_hybrid_hr" },
                { label: "Fossil Gen 5", value: "fossil_gen_5" },
                {
                  label: "Fossil Gen 6 Wellness Edition",
                  value: "fossil_gen_6_wellness",
                },
              ],
            },
            {
              condition: "amazfit",
              values: [
                { label: "Amazfit GTR 4", value: "amazfit_gtr_4" },
                { label: "Amazfit Bip U Pro", value: "amazfit_bip_u_pro" },
                { label: "Amazfit T-Rex Pro", value: "amazfit_t_rex_pro" },
                { label: "Amazfit GTS 2", value: "amazfit_gts_2" },
              ],
            },
            {
              condition: "other_brand",
              inputType: "Text",
              maxLength: 15,
              helpingText:
                "Please enter the model of the smartwatch (e.g., specific models like 'Fossil Gen 6' or 'Fitbit Sense 2').",
            },
          ],
        },
      },
      {
        label: "Condition",
        values: [
          { label: "New", value: "new" },
          { label: "Used", value: "used" },
        ],
      },
    ],
  },
];

const brandData: Option[] = [
  { label: "Apple", value: "apple" },
  { label: "Samsung", value: "samsung" },
  { label: "Vivo", value: "vivo" },
  { label: "Realme", value: "realme" },
  { label: "Nokia", value: "nokia" },
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
