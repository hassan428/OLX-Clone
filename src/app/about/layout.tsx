import { LayoutProps } from "@/interfaces";
import React from "react";

const layout = ({ children }: LayoutProps) => {
  return (
    <>
      About Layout
      {children}
    </>
  );
};

export default layout;
