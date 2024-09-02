import { LayoutProps } from "@/interfaces";
import React from "react";

const layout = ({ children, params }: LayoutProps) => {
  console.log("params", params);
  const { id } = params;
  return (
    <div className="text-center text-2xl">
      product id layout
      <div className=" text-4xl flex justify-center">
        {children}
        {id}
      </div>
    </div>
  );
};

export default layout;
