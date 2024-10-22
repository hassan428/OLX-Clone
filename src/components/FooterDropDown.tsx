import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FooterLinkSection } from "@/interfaces";
import Link from "next/link";

export const FooterDropDown = ({ data, title }: FooterLinkSection) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="px-2">{title}</AccordionTrigger>
        <AccordionContent className="bg-input flex flex-col gap-2 px-4 py-2">
          {data.map(({ href, text }, i) => (
            <Link key={i} href={href}>
              <h1 className="hover:font-bold">{text}</h1>
            </Link>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
