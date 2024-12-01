"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { IoCloseSharp, IoEye, IoEyeOff } from "react-icons/io5";
import { TextInputProps } from "@/interfaces";

export const TextInput = ({
  inputProps,
  cut_handle,
  error,
  className,
}: TextInputProps) => {
  const [passwordInput, setPasswordInput] = useState<string | undefined>(
    "password"
  );
  return (
    <div
      className={`border rounded-md flex items-center justify-center w-full p-0.5 ${
        error ? "text-error border-error" : "border-foreground"
      } ${className}`}
    >
      <Input
        {...inputProps}
        type={inputProps.type == "password" ? passwordInput : inputProps.type}
        className="focus-visible:ring-0 placeholder:capitalize outline-0 border-0 rounded-r-none text-sm m-[1px]"
      />
      {inputProps.value && (
        <IoCloseSharp
          size={15}
          className="cursor-pointer mr-1"
          onClick={cut_handle}
        />
      )}
      {inputProps.type == "password" &&
        (passwordInput == "password" ? (
          <IoEye
            size={20}
            className="cursor-pointer mr-1"
            onClick={() => {
              setPasswordInput("text");
            }}
          />
        ) : (
          <IoEyeOff
            size={20}
            className="cursor-pointer mr-1"
            onClick={() => setPasswordInput("password")}
          />
        ))}
    </div>
  );
};
