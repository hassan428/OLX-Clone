"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Share2 } from "lucide-react";

export const ShareProfile = () => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const shareProfileHandle = () => {
    try {
      const currentUrl = window.location.href; // Get the current URL
      navigator.clipboard.writeText(currentUrl);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (error) {
      setIsCopied(false);
    }
  };
  return (
    <Button
      variant={"outline"}
      className="w-full border-2 border-primary gap-2"
      onClick={shareProfileHandle}
    >
      {isCopied ? (
        <>
          <Check /> URL copied to clipboard
        </>
      ) : (
        <>
          <Share2 /> Share user profile
        </>
      )}
    </Button>
  );
};
