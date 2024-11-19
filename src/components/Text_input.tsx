"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { IoCloseSharp } from "react-icons/io5";
import { TextInputProps } from "@/interfaces";

export const TextInput = ({
  inputProps,
  cut_handle,
  error,
  className,
}: TextInputProps) => {
  return (
    <div
      className={`border border-foreground rounded-md flex items-center justify-center w-full p-0.5 ${
        error && "text-error border-error"
      } ${className}`}
    >
      <Input
        {...inputProps}
        className="focus-visible:ring-0 placeholder:capitalize outline-0 border-0 rounded-none text-sm"
      />
      {inputProps.value && (
        <IoCloseSharp className="cursor-pointer mr-1" onClick={cut_handle} />
      )}
    </div>
  );
};
