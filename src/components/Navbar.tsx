"use client";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { Sell_btn } from "@/components/Sell_btn";
import { NavScreenBtn } from "@/components/NavScreenBtn";
import { Location_select } from "@/components/Location_select";
import { Search_input } from "@/components/Search_input";
import { DarkLightModeBtn } from "@/components/DarkLightMode";
import { NavDrawer } from "@/components/NavDrawer";
import { ProfileRoutes } from "@/components/ProfileRoutes";
import { Button } from "@/components/ui/button";
import { LogJoinAlert } from "@/components/LogJoinAlert";
import { BackToTopBtn } from "@/components/BackToTopBtn";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { navbarRoute } from "@/utils";
import { Timer } from "@/components/Timer";
import { setLogJoinScreen } from "@/lib/features/slices/logJoinScreenSlice";

export const Navbar = () => {
  const { isLogged, name } = useAppSelector(({ auth }) => auth);
  const dispatch = useAppDispatch();
  const [isVisible, setIsVisible] = useState(true); // Navbar visibility state
  const [lastScrollY, setLastScrollY] = useState(0); // To track previous scroll position

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        // User is scrolling down and past 50px
        setIsVisible(false);
      } else {
        // User is scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY); // Update the last scroll position
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup event listener
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-background border-b border-border p-3 space-y-2 max-w-full sticky top-0 z-20 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="flex md:justify-start justify-between items-center md:gap-8 ">
        <div className="xmd:hidden">
          <NavDrawer />
        </div>
        <Logo />

        {navbarRoute.map(({ Icon, className, title, href }, i) => (
          <NavScreenBtn
            icon={<Icon size={25} />}
            text={title}
            href={`/category/${href}`}
            className={`max-sm:hidden ${className}`}
            key={i}
          />
        ))}

        <div className="max-xmd:hidden">
          <DarkLightModeBtn />
        </div>
      </nav>

      <nav className="w-full sm:flex justify-center items-center gap-5 max-sm:space-y-2">
        <div className="w-full">
          <Location_select />
        </div>

        <div className="w-full">
          <Search_input />
        </div>

        <div className="max-xmd:hidden min-w-max">
          {isLogged ? (
            <ProfileRoutes name={name!} />
          ) : (
            <LogJoinAlert
              onClick={() => dispatch(setLogJoinScreen("login"))}
              trigger={
                <Button variant={"link"} className="font-bold">
                  Login
                </Button>
              }
            />
          )}
        </div>
        <Sell_btn className="max-xmd:hidden" />
      </nav>
      <div className="fixed left-1/2 -translate-x-1/2 z-50">
        <BackToTopBtn className={!isVisible ? "mt-2" : ""} />
      </div>

      {/* OTP Timer don't Stop */}
      <div className="hidden">
        <Timer />
      </div>
    </nav>
  );
};
