import { LayoutProps } from "@/interfaces";
import React from "react";

const layout = ({ children, params }: LayoutProps) => {
  console.log("params", params);
  const { name } = params;
  return (
    <div className="text-center text-2xl">
      product name layout
      <div className=" text-4xl flex justify-center">
        {children}
        {name}
      </div>
    </div>
  );
};
export default layout;
