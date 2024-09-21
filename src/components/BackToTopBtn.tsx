"use client";
import { useState, useEffect } from "react";

export function BackToTopBtn() {
  const [showBtn, setShowBtn] = useState<Boolean>(false);

  useEffect(() => {
    const showBtnHandle = () => {
      window.scrollY >= 300 ? setShowBtn(true) : setShowBtn(false);
    };

    window.addEventListener("scroll", showBtnHandle);
    return () => {
      window.removeEventListener("scroll", showBtnHandle);
    };
  }, []);

  const scrollToTop = () => {
    document.getElementById("top")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    showBtn && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
      >
        Back to Top
      </button>
    )
  );
}
