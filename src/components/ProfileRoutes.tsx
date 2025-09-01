"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RiArrowDownWideLine } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { profileRouteData } from "@/utils";
import { LogOutBtn, NavScreenBtn } from "@/components/NavScreenBtn";
import { ProfileRoutesProps } from "@/interfaces";

export const ProfileRoutes = ({ name }: ProfileRoutesProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="flex items-center cursor-pointer">
        <Image
          src={"/assets/images/load_avatar.png"}
          alt="Avatar"
          width={80}
          height={80}
          priority={true}
          className="rounded-full object-cover w-10 h-10"
        />

        <div>
          <RiArrowDownWideLine
            className={`transition-all ${isOpen ? "rotate-180" : "rotate-0"} `}
            size={25}
          />
        </div>
      </div>
      {isOpen && (
        <div className="relative">
          <div className="absolute z-10 bg-background overflow-auto w-max max-h-[25rem] p-3 right-0 border rounded-md  shadow-lg">
            <div className="cursor-pointer text-left text-sm py-5 w-full border-b-2 border-border">
              <div className="flex justify-start gap-3 items-center">
                <Image
                  src={"/assets/images/load_avatar.png"}
                  alt="Avatar"
                  width={75}
                  height={75}
                  priority={true}
                  className="rounded-full object-cover w-14 h-14"
                />
                <div>
                  <h1 className="text-base">Hello,</h1>
                  <h1 className="font-bold text-lg">{name}</h1>
                </div>
              </div>

              <Link href={"/editprofile"}>
                <Button
                  variant={"outline"}
                  className="w-full border-2 border-primary mt-2"
                >
                  View and edit your profile
                </Button>
              </Link>
            </div>

            {profileRouteData.map(
              ({ Icon, title, href, className }, i) =>
                title != "Dark Mode" && (
                  <div
                    className={`border-border hover:bg-border rounded-md hover:font-bold p-2 mt-1  ${className}`}
                    onClick={() => setIsOpen(false)}
                    key={i}
                  >
                    <NavScreenBtn
                      text={title}
                      icon={<Icon size={25} />}
                      className="text-[16px] w-full flex justify-between items-center"
                      href={href}
                    />
                  </div>
                )
            )}
            <div className="border-border hover:bg-border rounded-md hover:font-bold p-2 mt-1">
              <LogOutBtn className="text-[16px] w-full flex justify-between items-center" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
