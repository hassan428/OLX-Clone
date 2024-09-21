"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

export const Logo = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const navigate = useRouter();
  // When mounted on client, set to true
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <Image
        src={`/assets/images/logo/lox${resolvedTheme}.png`}
        alt="lox"
        width={100}
        height={100}
        onClick={() => navigate.push("/")}
        className="cursor-pointer w-auto h-auto"
        priority={true}
      />
    )
  );
};
