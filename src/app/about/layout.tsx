import { LayoutProps } from "@/interfaces";
import React from "react";

const layout = ({ children }: LayoutProps) => {
  return (
    <div>
      About Layout
      {children}
    </div>
  );
};

export default layout;
