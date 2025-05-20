import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { DetailProductCardUI, ProductCardUI } from "@/components/ProductCards";
import { DetailProductCardProps, MainCtgProductCardProps } from "@/interfaces";
import Link from "next/link";

export function RenderProductCard({
  cardData,
  heading,
  href,
}: MainCtgProductCardProps) {
  return (
    <div className="m-2 my-3">
      <div className="flex justify-between items-center my-2">
        <h1 className="text-lg sm:text-2xl font-bold line-clamp-1">
          {heading}
        </h1>
        <Link
          href={`category/${href}`}
          className="hover:underline text-sm sm:text-base min-w-max"
        >
          View more
        </Link>
      </div>
      <div className="hidden xmd:flex space-x-3">
        {cardData?.map(
          (data, i) => i < 4 && <ProductCardUI key={data.id} {...data} />
        )}
      </div>
      <ScrollArea className="xmd:hidden">
        <div className="flex w-max space-x-3">
          {cardData?.map((data) => (
            <figure key={data.id}>
              <ProductCardUI {...data} />
            </figure>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}

export function RenderDetailProductCard(data: DetailProductCardProps) {
  return <DetailProductCardUI {...data} />;
}
