import { LayoutProps } from "@/interfaces";
import React from "react";

const layout = ({ children, params }: LayoutProps) => {
  console.log("params", params);
  const { id } = params;
  return <div>{children}</div>;
};

export default layout;
