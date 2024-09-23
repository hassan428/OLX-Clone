import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Heart } from "lucide-react";
import { ProductCardProps } from "@/interfaces";
import { useRouter } from "next/navigation";

export const ProductCard = ({
  location,
  price,
  src,
  time,
  title,
  id,
}: ProductCardProps) => {
  const navigate = useRouter();

  return (
    <Card
      onClick={() => navigate.push(`products/${id}`)}
      key={id}
      className="w-56 xmd:w-1/4 cursor-pointer"
    >
      <CardHeader className="p-0 h-40">
        <Image
          src={src}
          alt="led"
          width={250}
          height={250}
          className=" h-full w-full"
        />
      </CardHeader>
      <CardContent className="p-3 border-2 border-border border-b-0 h-20">
        <div className="flex justify-between">
          <CardTitle className="text-base mb-2">{price}</CardTitle>
          <Heart />
        </div>
        <CardDescription className="text-accent-foreground hover:underline leading-4 line-clamp-2">
          <abbr title={title} className="no-underline">
            {title}
          </abbr>
        </CardDescription>
      </CardContent>
      <CardFooter className="flex-col text-muted-foreground py-2 items-start justify-end px-3 text-xs gap-1 border-2 border-border border-t-0">
        <h1>{location}</h1>
        <h1>{time}</h1>
      </CardFooter>
    </Card>
  );
};
