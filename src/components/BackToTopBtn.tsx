"use client";
import { BackToTopButtonProps } from "@/interfaces";
import { scrollToTop } from "@/utils";
import { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

export const BackToTopBtn = ({ className }: BackToTopButtonProps) => {
  const [showBtn, setShowBtn] = useState<Boolean>(false);

  useEffect(() => {
    const showBtnHandle = () => {
      setShowBtn(window.scrollY >= 300);
      // window.scrollY >= 300 ? setShowBtn(true) : setShowBtn(false);
    };

    window.addEventListener("scroll", showBtnHandle);
    return () => {
      window.removeEventListener("scroll", showBtnHandle);
    };
  }, []);

  return (
    showBtn && (
      <button
        onClick={scrollToTop}
        className={`bg-background flex items-center text-xs border hover:border-2 border-foreground px-4 py-2 rounded-full shadow-lg transition duration-300 ${className}`}
      >
        <IoIosArrowUp size={20} />
        <h1>Back to Top</h1>
      </button>
    )
  );
};
