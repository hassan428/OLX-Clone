import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Heart, MessageCircleMore, Phone } from "lucide-react";
import { ProductCardProps } from "@/interfaces";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export const ProductCardUI = ({
  location,
  price,
  src,
  time,
  title,
  id,
  className,
}: ProductCardProps) => {
  const navigate = useRouter();

  return (
    <Card
      onClick={() => navigate.push(`../products/${id}`)}
      key={id}
      className={`w-56 xmd:w-1/4 cursor-pointer ${className}`}
    >
      <CardHeader className="p-0 h-40">
        <Image
          src={src}
          alt="led"
          width={250}
          height={250}
          className="h-full w-full"
        />
      </CardHeader>
      <CardContent className="p-3 border-2 border-border border-b-0 h-20">
        <div className="flex justify-between items-center mb-2">
          <CardTitle className="text-base">{price}</CardTitle>
          <Heart />
        </div>
        <CardDescription className="text-accent-foreground hover:underline leading-4 line-clamp-2">
          <abbr title={title} className="no-underline">
            {title}
          </abbr>
        </CardDescription>
      </CardContent>
      <CardFooter className="flex-col text-muted-foreground py-2 items-start justify-end px-3 text-xs gap-1 border-2 border-border border-t-0">
        <h1 className="line-clamp-1">{location}</h1>
        <h1>{time}</h1>
      </CardFooter>
    </Card>
  );
};

export const MoreProductCardUI = ({
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
      onClick={() => navigate.push(`../products/${id}`)}
      key={id}
      className="cursor-pointer h-40 sm:h-52 flex my-2 sm:m-2 border-2 border-border"
    >
      <CardHeader className="p-0 w-40 sm:w-52">
        <Image
          src={src}
          alt="led"
          width={250}
          height={250}
          className="h-full w-full"
        />
      </CardHeader>
      <div className="w-2/3 flex flex-col justify-between border-l-2 p-2 sm:p-5 border-border">
        <CardContent className="flex-col p-0">
          <div className="flex justify-between items-center mb-2 ">
            <CardTitle className="sm:text-xl text-base font-bold">
              {price}
            </CardTitle>
            <Heart fill={"none"} />
          </div>
          <CardDescription className="text-sm sm:text-base text-accent-foreground hover:underline leading-5 line-clamp-2 sm:line-clamp-3">
            <abbr title={title} className="no-underline">
              {title}
            </abbr>
          </CardDescription>
        </CardContent>
        <CardFooter className="p-0 flex flex-col items-start justify-start gap-2 text-muted-foreground text-xs">
          <div className="flex items-center gap-2">
            <h1 className="line-clamp-1 ">{location}</h1>
            <h1 className="min-w-max">{time}</h1>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant={"outline"}
              className="w-full border-2 border-primary "
            >
              <Phone size={20} className="mr-1" />{" "}
              <h1 className="max-sm:hidden">Call</h1>
            </Button>
            <Button
              variant={"default"}
              className="w-full border-2 border-primary "
            >
              <MessageCircleMore size={20} className="mr-1" />{" "}
              <h1 className="max-sm:hidden">Chat</h1>
            </Button>
          </div>
        </CardFooter>
      </div>
    </Card>
  );
};

export const DetailProductCardUI = ({
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
      onClick={() => navigate.push(`../products/${id}`)}
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
        <div className="flex justify-between items-center mb-2">
          <CardTitle className="text-base ">{price}</CardTitle>
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
