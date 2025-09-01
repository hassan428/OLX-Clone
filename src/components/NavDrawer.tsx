"use client";
import { PiListDuotone } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import { NavScreenBtn, LogOutBtn } from "@/components/NavScreenBtn";
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
import { publicRouteData, profileRouteData } from "@/utils";
import { LogJoinAlert } from "@/components/LogJoinAlert";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { setLogJoinScreen } from "@/lib/features/slices/logJoinScreenSlice";

export function NavDrawer() {
  const { isLogged, name } = useAppSelector(({ auth }) => auth);
  const dispatch = useAppDispatch();

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
              {isLogged ? (
                <SheetDescription className="text-foreground font-bold text-lg">
                  {name}
                </SheetDescription>
              ) : (
                <LogJoinAlert
                  onClick={() => dispatch(setLogJoinScreen("login"))}
                  trigger={
                    <h1 className="underline underline-offset-2">
                      Log in to your account
                    </h1>
                  }
                />
              )}
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

        {(isLogged ? profileRouteData : publicRouteData).map(
          ({ Icon, title, href, className }, i) => (
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
          )
        )}

        <SheetTitle className="p-3 w-full flex justify-between items-center border-border">
          <LogOutBtn className="text-[16px] font-normal ml-2" />
        </SheetTitle>

        <SheetFooter>
          <div className={`w-full ${isLogged && "hidden"}`}>
            <LogJoinAlert
              onClick={() => dispatch(setLogJoinScreen("login"))}
              trigger={
                <Button className="w-full border-2 border-primary my-2">
                  Login
                </Button>
              }
            />
            <LogJoinAlert
              onClick={() => dispatch(setLogJoinScreen("join"))}
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
