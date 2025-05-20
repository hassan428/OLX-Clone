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
        <AccordionTrigger className="px-2 py-3 border-b border-black hover:font-bold">
          {title}
        </AccordionTrigger>
        <AccordionContent className="bg-background gap-2 px-4 py-2">
          {data.map(({ href, text }, i) => (
            <Link
              key={i}
              href={href}
              className="list-item list-disc hover:font-bold hover:bg-border p-2 mx-2 rounded-md"
            >
              <h1>{text}</h1>
            </Link>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
