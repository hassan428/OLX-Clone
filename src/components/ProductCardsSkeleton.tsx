import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Heart, MessageCircleMore, Phone, Share2 } from "lucide-react";
import {
  DetailProductCardProps,
  OptionalClassName,
  SkeletonLineProps,
} from "@/interfaces";
import { Button } from "@/components/ui/button";
import { CardDetailImageSlider } from "@/components/CardDetailImageSlider";
import { IoLocationOutline } from "react-icons/io5";
import Link from "next/link";

const SkeletonLine = ({ count, className }: SkeletonLineProps) =>
  [...Array(count)].map((_, i) => <div key={i} className={className} />);

export const ProductCardSkeletonUI = ({ className }: OptionalClassName) => (
  <Card className={`w-56 xmd:w-full cursor-default text-border ${className}`}>
    <CardHeader className="p-0 h-40 bg-border animate-pulse" />
    <CardContent className="p-3 border-2 border-border border-b-0 h-20">
      <div className="flex justify-between items-center mb-2">
        <CardTitle className="h-5 w-28 bg-border animate-pulse rounded" />
        <Heart className="bg-border animate-pulse rounded-full" />
      </div>
      <CardDescription className="h-9 bg-border animate-pulse rounded" />
    </CardContent>
    <CardFooter className="flex-col py-2 items-start justify-end px-3 gap-1 border-2 border-border border-t-0">
      <SkeletonLine
        count={2}
        className="h-4 w-20 bg-border animate-pulse rounded"
      />
    </CardFooter>
  </Card>
);

export const MoreProductCardSkeletonUI = () => (
  <Card className="h-36 sm:h-52 flex my-2 sm:m-2 border-2 border-border cursor-default text-border">
    <CardHeader className="p-0 w-28 sm:w-52 bg-border animate-pulse" />
    <div className="w-2/3 flex flex-col justify-between border-l-2 p-2 sm:p-5 border-border">
      <CardContent className="flex-col p-0">
        <div className="flex justify-between items-center mb-1 sm:mb-2 ">
          <CardTitle className="h-5 w-24 sm:w-32 bg-border animate-pulse rounded" />
          <Heart className="bg-border animate-pulse rounded-full" />
        </div>
        <CardDescription className="h-10 sm:h-14 bg-border animate-pulse rounded" />
      </CardContent>
      <CardFooter className="p-0 flex flex-col items-start justify-start gap-2">
        {["h-3 sm:h-4 w-14 sm:w-20", "w-16 sm:w-[95px] py-4 sm:py-5"].map(
          (className, i) => (
            <div key={i} className="flex items-center gap-2">
              <SkeletonLine
                count={2}
                className={`bg-border animate-pulse rounded ${className}`}
              />
            </div>
          )
        )}
      </CardFooter>
    </div>
  </Card>
);

export const DetailProductCardUI = ({
  cardDetails,
}: DetailProductCardProps) => {
  const {
    id,
    location,
    price,
    src,
    time,
    title,
    description,
    productOtherDetails,
  } = cardDetails;

  return (
    <div className="sm:flex items-start gap-2 m-2">
      <Card className="w-full bg-background border-none">
        <CardHeader className="p-0 m-0 mb-3 border border-border rounded">
          <CardDetailImageSlider src={src} />
        </CardHeader>
        <CardContent className="p-0">
          <div className="border border-border my-3 p-3 rounded">
            <div className="flex justify-between items-center mt-0 mb-4">
              <CardTitle className="text-3xl">{price}</CardTitle>
              <div className="flex items-center gap-2">
                <Heart />
                <Share2 />
              </div>
            </div>

            <CardDescription className="text-foreground text-lg leading-6 font-bold">
              {title}
            </CardDescription>

            <div className="flex justify-between items-center text-sm my-2 text-accent-foreground">
              <div className="flex items-center gap-2">
                <IoLocationOutline />
                <h1>{location}</h1>
              </div>
              <h1>{time}</h1>
            </div>
          </div>

          <div className="border border-border my-3 p-3 rounded text-foreground">
            <h1 className="text-xl font-bold">Details</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 my-1 gap-3 text-sm w-full">
              {Object.entries(productOtherDetails).map(([key, value], i) => (
                <div
                  key={i}
                  className="flex items-center justify-center w-full text-center"
                >
                  <h1 className="text-accent-foreground w-full capitalize bg-border rounded">
                    {key}
                  </h1>
                  <h1 className="font-bold w-full capitalize bg-border ml-2 rounded">
                    {value}
                  </h1>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-border my-3 p-3 rounded text-foreground">
            <h1 className="text-xl font-bold">Description</h1>
            <CardDescription className="text-foreground text-base leading-5 my-1">
              {description}
            </CardDescription>
          </div>
        </CardContent>
      </Card>

      <div className="w-full ">
        <div className="border border-border rounded p-3 mb-3 flex flex-col gap-3">
          <h1 className="text-xl font-bold">Listed by private user</h1>
          <Link
            href={"/profile/id"}
            className="flex justify-start gap-3 items-center"
          >
            <Image
              // src={"/assets/images/load_avatar.png"}
              src={"/assets/images/sliderimage.jfif"}
              alt={"Username"}
              width={75}
              height={75}
              priority={true}
              className="rounded-full object-cover w-20 h-20"
            />
            <div className="flex flex-col gap-1 text-sm">
              <h1>Username</h1>
              <h1>Member since Jun 2022</h1>
              <h1 className="hover:underline">See Profile</h1>
            </div>
          </Link>

          {Array(2)
            .fill(null)
            .map((_, i) => (
              <Button
                key={i}
                variant={i ? "outline" : "default"}
                className={`w-full${
                  !title
                    ? "bg-border animate-pulse text-border cursor-default hover:bg-border hover:text-border"
                    : "border-2 border-primary flex items-center gap-1 "
                }`}
              >
                {i ? <MessageCircleMore size={20} /> : <Phone size={20} />}
                <h1>{i ? "Chat" : "Show Phone Number"}</h1>
              </Button>
            ))}
        </div>
        <div className="border border-border rounded p-3 my-3">
          <h1 className="text-xl font-bold">Location</h1>
          <div className="flex items-center gap-2 mt-2">
            <IoLocationOutline />
            <h1>{location}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
