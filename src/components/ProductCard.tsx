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
import { DetailProductCardProps, ProductCardProps } from "@/interfaces";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CardDetailImageSlider } from "@/components/CardDetailImageSlider";
import { IoLocationOutline } from "react-icons/io5";
import Link from "next/link";

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
      className={`w-56 xmd:w-1/4 cursor-pointer relative ${className}`}
    >
      <CardHeader className="p-0 h-40">
        <Image
          src={src}
          alt="led"
          width={250}
          height={250}
          className="h-full w-full"
        />
        {/* <Button className="w-max p-3 absolute top-1 left-1">Featured</Button> */}
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
      <CardHeader className="p-0 w-28 sm:w-52">
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
  //   location,
  //  price,
  //   src,
  //   time,
  //   title,
  //   id,
  imageSrc,
}: DetailProductCardProps) => {
  return (
    <div className="sm:flex items-start gap-2 m-2">
      <Card className="w-full cursor-pointer bg-background">
        <CardHeader className="bg-foreground p-0">
          <CardDetailImageSlider src={imageSrc} />
        </CardHeader>
        <CardContent className="p-0">
          <div className="border border-border my-3 p-3 rounded">
            <div className="flex justify-between items-center mt-0 mb-4">
              <CardTitle className="text-3xl">price</CardTitle>
              <div className="flex items-center gap-2">
                <Heart />
                <Share2 />
              </div>
            </div>

            <CardDescription className="text-foreground text-lg leading-6 font-bold">
              title Lorem ipsum dolor sit amet consectetr
            </CardDescription>

            <div className="flex justify-between items-center text-sm my-2 text-accent-foreground">
              <div className="flex items-center gap-2">
                <IoLocationOutline />
                <h1>Bahria town</h1>
              </div>
              <h1>8 hours ago</h1>
            </div>
          </div>

          <div className="border border-border my-3 p-3 rounded text-foreground">
            <h1 className="text-xl font-bold">Details</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 my-1 gap-3 text-sm">
              <div className="flex items-center justify-around bg-input">
                <h1 className="text-accent-foreground">8 hours ago</h1>
                <h1 className="font-bold">Bahria town</h1>
              </div>
              <div className="flex items-center justify-around bg-input">
                <h1 className="text-accent-foreground">8 hours ago</h1>
                <h1 className="font-bold">Bahria town</h1>
              </div>
              <div className="flex items-center justify-around bg-input">
                <h1 className="text-accent-foreground">8 hours ago</h1>
                <h1 className="font-bold">Bahria town</h1>
              </div>
            </div>
          </div>

          <div className="border border-border my-3 p-3 rounded text-foreground">
            <h1 className="text-xl font-bold">Description</h1>
            <CardDescription className="text-foreground text-base leading-5 my-1">
              title Lorem ipsum dolor sit amet consectetr Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Ut itaque accusamus cupiditate
              vel. Voluptates qui aliquam fugit veniam possimus minima, cumque
              placeat. Accusantium dolorum reprehenderit odit dolores sunt
              dolorem, exercitationem nemo placeat ut. Delectus quia officia
              pariatur labore ipsa at, porro et laudantium ab cupiditate
              explicabo, magnam provident numquam voluptates!
            </CardDescription>
          </div>
        </CardContent>
      </Card>

      <div className="w-full">
        <div className="border border-border p-3 my-3 flex flex-col gap-3">
          <h1 className="text-xl font-bold">Listed by private user</h1>
          <Link
            href={"/profile"}
            className="flex justify-start gap-3 items-center"
          >
            <Image
              src={"/assets/images/load_avatar.png"}
              alt="Avatar"
              width={75}
              height={75}
            />
            <div className="flex flex-col gap-1 text-sm">
              <h1>Username</h1>
              <h1>Member since Jun 2022</h1>
              <h1 className="hover:underline">See Profile</h1>
            </div>
          </Link>

          <Button
            variant={"default"}
            className="w-full border-2 border-primary my-2"
          >
            <Phone size={20} className="mr-1" /> Show Phone Number
          </Button>

          <Button
            variant={"outline"}
            className="w-full border-2 border-primary"
          >
            <MessageCircleMore size={20} className="mr-1" />
            Chat
          </Button>
        </div>
        <div className="border border-border p-3 my-3">
          <h1 className="text-xl font-bold">Location</h1>
          <div className="flex items-center gap-2 mt-2">
            <IoLocationOutline />
            <h1>Bahria town</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
