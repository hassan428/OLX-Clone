import { ErrorTextProps } from "@/interfaces";
import React from "react";

export const ErrorText = ({ errorText, className }: ErrorTextProps) => {
  return <h1 className={`text-xs text-red-600 ${className}`}>{errorText}</h1>;
};
