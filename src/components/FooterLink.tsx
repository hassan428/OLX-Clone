import { FooterLinkSection } from "@/interfaces";
import Link from "next/link";

export const FooterLink = ({ data, title }: FooterLinkSection) => {
  return (
    <div className="flex flex-col gap-3 h-36 w-max">
      <h1 className="text-base font-bold uppercase">{title}</h1>
      <div>
        {data.map(({ href, text }, i) => (
          <Link
            key={i}
            href={href}
            className="text-sm hover:font-bold hover:bg-background p-1 rounded-md line-clamp-1"
          >
            <h1>{text}</h1>
          </Link>
        ))}
      </div>
    </div>
  );
};
