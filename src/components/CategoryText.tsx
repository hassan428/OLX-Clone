"use client";
import Link from "next/link";
import React, { useState } from "react";
import { category_link } from "@/utils";
import { usePathname } from "next/navigation";

export const CategoryText = () => {
  const pathname = usePathname().split("/");
  
  // Create a state array to store the showSubCategory value for each category
  const [subCategoryStates, setSubCategoryStates] = useState<boolean[]>(
    new Array(category_link.length).fill(false)
  );

  // Function to handle hover behavior
  const handleMouseEnter = (index: number) => {
    setSubCategoryStates((prev) =>
      prev.map((item, idx) => (idx === index ? true : item))
    );
  };

  const handleMouseLeave = (index: number) => {
    setSubCategoryStates((prev) =>
      prev.map((item, idx) => (idx === index ? false : item))
    );
  };

  return (
    <div className="hidden md:flex justify-start items-center gap-5 p-2 text-sm">
      <Link href={"/category/allcategories"}>
        <strong className="hover:font-black">All Categories</strong>
      </Link>
      {category_link.map(({ href, title, subCategories }, i) => (
        <div
          key={i}
          className="flex flex-col gap-1 relative"
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={() => handleMouseLeave(i)}
        >
          <Link href={`/category/${href}`}>
            <h1
              className={`hover:font-bold ${
                pathname[2] === href && "font-bold"
              }`}
            >
              {title?.split(" ")[0]}
            </h1>
          </Link>
          {subCategoryStates[i] && (
            <div className="absolute flex flex-col gap-2 mt-5 z-20 bg-background p-4 rounded-lg w-max shadow-xl border border-border transition-all duration-300 ease-in-out max-h-60 overflow-y-auto">
              <ul className="list-disc pl-5">
                {subCategories?.map(({ href: subCateHref, title }, subIdx) => (
                  <li
                    key={subIdx}
                    className={`hover:font-semibold px-3 py-2 rounded-md transition-colors duration-200 ${
                      pathname[3] === subCateHref
                        ? "font-bold text-green-900 bg-green-300"
                        : "hover:bg-border"
                    }`}
                  >
                    <Link href={`/category/${href}/${subCateHref}`}>
                      <h1>{title}</h1>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
// "use client";
// import Link from "next/link";
// import React, { useState } from "react";
// import { category_link } from "@/utils";
// import { usePathname } from "next/navigation";

// export const CategoryText = () => {
//   const pathname = usePathname().split("/");
//   return (
//     <div className="hidden md:flex justify-start items-center gap-5 p-2 text-sm">
//       <Link href={"/category/allcategories"}>
//         <strong className="hover:font-black">All Categories</strong>
//       </Link>
//       {category_link.map(({ href, title, subCategories }, i) => {
//         const [showSubCategory, setShowSubCategory] = useState<boolean>(false);
//         return (
//           <div
//             onMouseEnter={() => setShowSubCategory(true)}
//             onMouseLeave={() => setShowSubCategory(false)}
//             key={i}
//             className="flex flex-col gap-1 relative"
//           >
//             <Link href={`/category/${href}`}>
//               <h1
//                 className={`hover:font-bold ${
//                   pathname[2] == href && "font-bold"
//                 }`}
//               >
//                 {title?.split(" ")[0]}
//               </h1>
//             </Link>
//             {showSubCategory && (
//               <div className="absolute flex flex-col gap-2 mt-5 z-20 bg-background p-4 rounded-lg w-max shadow-xl border border-border transition-all duration-300 ease-in-out max-h-60 overflow-y-auto">
//                 <ul className="list-disc pl-5">
//                   {subCategories?.map(({ href: subCateHref, title }, i) => (
//                     <li
//                       key={i}
//                       className={`hover:font-semibold px-3 py-2 rounded-md transition-colors duration-200 ${
//                         pathname[3] == subCateHref
//                           ? "font-bold text-green-900 bg-green-300"
//                           : "hover:bg-border"
//                       }`}
//                     >
//                       <Link href={`/category/${href}/${subCateHref}`}>
//                         <h1>{title}</h1>
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// };
