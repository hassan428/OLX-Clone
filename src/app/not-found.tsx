// "use client";
import React from "react";
// import { usePathname } from "next/navigation";

export const notFound = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold">
        Page Not Found 
        {/* :{usePathname()} */}
      </h1>
    </div>
  );
};

export default notFound;
