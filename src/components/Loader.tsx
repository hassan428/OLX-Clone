import { LoaderPinwheelIcon } from "lucide-react";
import React from "react";

export const Loader = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-full z-50 flex flex-col justify-center items-center backdrop-blur-sm bg-opacity-40 text-foreground">
      <LoaderPinwheelIcon size={40} className="animate-spin" />
      <h1 className="mt-2 animate-bounce text-lg">Please wait...</h1>
    </div>
  );
};
