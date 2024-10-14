"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { IoCloseSharp } from "react-icons/io5";
import { TextInputProps } from "@/interfaces";

export const TextInput = ({
  inputProps,
  cut_handle,
  error,
}: TextInputProps) => {
  return (
    <div
      className={`border border-foreground ${
        error && "text-red-600 border-red-600"
      }  flex items-center justify-center w-full p-0.5 `}
    >
      <Input
        {...inputProps}
        className="focus-visible:ring-0 outline-0 border-0 rounded-none text-base"
      />
      {inputProps.value && (
        <IoCloseSharp className="cursor-pointer mr-1" onClick={cut_handle} />
      )}
    </div>
  );
};
