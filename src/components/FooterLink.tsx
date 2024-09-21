import { FooterLinkSection } from "@/interfaces";
import Link from "next/link";
import React from "react";

// export const FooterLink = ({ data, title }: FooterLinkSection) => {
//   return (
//     <div className="flex flex-col gap-3 h-max border border-black">
//       <h2 className="text-base font-bold">{title}</h2>

//       <div>
//         {data.map(({ href, text }, i) => (
//           <Link key={i} href={href}>
//             <h1 className="text-sm">{text}</h1>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };
export const FooterLink = ({ data, title }: FooterLinkSection) => {
  return (
    <div className="flex flex-col gap-3 h-36">
      <h2 className="text-base font-bold uppercase">{title}</h2>
      <div>
        {data.map(({ href, text }, i) => (
          <Link key={i} href={href}>
            <h1 className="text-sm">{text}</h1>
          </Link>
        ))}
      </div>
    </div>
  );
};
