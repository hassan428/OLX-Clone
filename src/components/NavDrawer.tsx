"use client";
import * as React from "react";
import { TiThListOutline } from "react-icons/ti";
import { PiListDuotone } from "react-icons/pi";
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

import Link from "next/link";
import { isLogged, route_data } from "@/utils";
import { LoginSignupAlert } from "@/components/LoginSignupAlert";
const username: string = "Hassan Hanif";

export function NavDrawer() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="default" size={"icon"}>
          <PiListDuotone size={20} />
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
              priority={true}
              className="w-16 h-16 rounded-full object-cover"
            />

            <div>
              <SheetDescription
                className={`text-foreground ${isLogged && "text-base"}`}
              >
                {isLogged ? "Hello," : "Enter to your account"}
              </SheetDescription>
              <SheetDescription
                className={`text-foreground ${
                  username
                    ? "font-bold text-lg"
                    : "underline underline-offset-2"
                }`}
              >
                {username || "Log in to your account"}
              </SheetDescription>
            </div>
          </div>
          {isLogged && (
            <Link href={"/editprofile"}>
              <Button
                variant={"outline"}
                className="w-full border-2 border-primary mt-2"
              >
                View and edit your profile
              </Button>
            </Link>
          )}
        </SheetHeader>

        <SheetTitle>
          <DarkLightModeSwitch />
        </SheetTitle>

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
              SheetClose={SheetClose}
            />
          </SheetTitle>
        ))}

        <SheetFooter>
          <div className={`w-full ${isLogged && "hidden"}`}>
            <LoginSignupAlert
              trigger={
                <Button className="w-full border-2 border-primary my-2">
                  Login
                </Button>
              }
            />
            <LoginSignupAlert
              trigger={
                <Button
                  variant={"outline"}
                  className="w-full border-2 border-primary"
                >
                  Create a new account
                </Button>
              }
            />
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
