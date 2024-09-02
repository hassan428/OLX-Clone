"use client";
import * as React from "react";
import { LuMenuSquare } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { NavScreenBtn } from "@/components/NavScreenBtn";
import { DarkLightModeSwitch } from "@/components/DarkLightMode";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Image from "next/image";
import {
  IoCameraOutline,
  IoCardOutline,
  IoChatbubbleOutline,
  IoEyeOutline,
  IoHeartOutline,
  IoHelpCircleOutline,
  IoLogOutOutline,
  IoNewspaperOutline,
  IoNotificationsOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import Link from "next/link";
import { Moon } from "lucide-react";
import { RouteData } from "@/interfaces";
const isLogged: boolean = true;
const username: string = "Hassan Hanif";

const route_data: RouteData[] = isLogged
  ? [
      {
        title: "Dark Mode",
        Icon: Moon,
        href: "/",
      },
      {
        title: "Start selling",
        Icon: IoCameraOutline,
        href: "startselling",
      },
      {
        title: "My ads",
        Icon: IoNewspaperOutline,
        href: "myads",
      },
      {
        href: "myfavourites",
        title: "Favourites & Saved searches",
        Icon: IoHeartOutline,
      },
      {
        href: "publicprofileurl",
        title: "Public Profile",
        Icon: IoEyeOutline,
      },
      {
        href: "payments",
        title: "Buy Discounted Packages",
        Icon: IoNewspaperOutline,
      },
      {
        href: "myorders",
        title: "Bought Packages & Billing",
        Icon: IoCardOutline,
      },

      {
        title: "Chat",
        Icon: IoChatbubbleOutline,
        href: "chat",
      },
      {
        title: "Notifications",
        Icon: IoNotificationsOutline,
        href: "notifications",
      },
      {
        title: "Help",
        Icon: IoHelpCircleOutline,
        href: "help",
        className: "border-t",
      },
      {
        href: "setting",
        title: "Setting",
        Icon: IoSettingsOutline,
        className: "border-b",
      },
      { href: "logout", title: "Logout", Icon: IoLogOutOutline },
    ]
  : [
      {
        title: "Dark Mode",
        Icon: Moon,
        href: "/",
      },
      {
        title: "Start selling",
        Icon: IoCameraOutline,
        href: "startselling",
      },
      {
        title: "My ads",
        Icon: IoNewspaperOutline,
        href: "myads",
      },
      {
        title: "Chat",
        Icon: IoChatbubbleOutline,
        href: "chat",
      },
      {
        title: "Help",
        Icon: IoHelpCircleOutline,
        href: "help",
        className: "border-y",
      },
    ];

export function NavDrawer() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="default" size={"icon"}>
          <LuMenuSquare />
        </Button>
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="overflow-auto w-full min-h-screen xmd:hidden items-start p-3"
      >
        <SheetHeader className="cursor-pointer text-left text-sm py-5 w-full border-b-2 border-border">
          <div className="flex justify-start gap-3 items-center">
            <Image
              src={"/assets/images/load_avatar.png"}
              alt="Avatar"
              width={75}
              height={75}
            />

            <div>
              <h1 className={isLogged ? "text-base" : ""}>
                {isLogged ? "Hello," : "Enter to your account"}
              </h1>
              <h1
                className={
                  username
                    ? "font-bold text-lg"
                    : "underline underline-offset-2"
                }
              >
                {username || "Log in to your account"}
              </h1>
            </div>
          </div>
          {isLogged && (
            <Link href={"/editProfile"}>
              <Button
                variant={"outline"}
                className="w-full border-2 border-primary mt-2"
              >
                View and edit your profile
              </Button>
            </Link>
          )}
        </SheetHeader>

        {route_data.map(({ Icon, title, href, className }, i) => (
          <SheetTitle
            className={`p-3 w-full flex justify-between items-center border-border ${className}`}
            key={i}
          >
            <NavScreenBtn
              text={title}
              icon={<Icon size={25} />}
              className="text-[16px] font-normal ml-2"
              href={href}
            />

            {title == "Dark Mode" && <DarkLightModeSwitch />}
          </SheetTitle>
        ))}

        <SheetFooter>
          <div className={`w-full ${isLogged && "hidden"}`}>
            <Link href={"/login"}>
              <Button className="w-full border-2 border-primary my-2">
                Login
              </Button>
            </Link>

            <Link href={"/signup"}>
              <Button
                variant={"outline"}
                className="w-full border-2 border-primary"
              >
                Create a new account
              </Button>
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
