import { TextProps } from "@/interfaces";
import React from "react";

export const Text = ({ text, className, error }: TextProps) => {
  return (
    <h1
      className={`text-xs ${
        error ? "text-error" : "text-muted-foreground"
      } ${className}`}
    >
      {text}
    </h1>
  );
};
