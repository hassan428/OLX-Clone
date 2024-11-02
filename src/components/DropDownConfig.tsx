"use client";
import { DropDownConfigProps } from "@/interfaces";
import React, { useState, useRef, useEffect } from "react";
import { RiArrowDownWideLine } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { TextInput } from "@/components/Text_input";

export const DropDownConfig = ({
  placeholder,
  defaultSelect,
  selectHandle,
  selectValue,
  dropdownData,
  error,
  id,
  cut_handle,
  onChange,
  maxLength,
}: DropDownConfigProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return !dropdownData ? (
    <TextInput
      error={error}
      cut_handle={cut_handle}
      inputProps={{
        autoComplete: id,
        id,
        maxLength,
        value: selectValue,
        placeholder: `Enter ${placeholder}`,
        onChange,
      }}
    />
  ) : dropdownData.length <= 3 ? (
    <div className="flex items-center gap-3 flex-wrap">
      {dropdownData.map((option, i) => {
        return (
          <Button
            key={i}
            className={`rounded text-foreground border-4 hover:bg-background border-green-900  ${
              option.label == selectValue && " bg-green-500 hover:bg-green-500"
            } `}
            onClick={() => selectHandle(option)}
            variant={option.label == selectValue ? "default" : "outline"}
          >
            {option.label}
          </Button>
        );
      })}
    </div>
  ) : (
    <div ref={dropdownRef} className="w-full text-sm">
      <div
        className={`border border-foreground rounded-md capitalize ${
          error && "border-error text-error"
        }  flex items-center cursor-pointer justify-between p-2 `}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>{defaultSelect || selectValue || `Select ${placeholder}`}</div>

        <div>
          <RiArrowDownWideLine
            className={`transition-all ${isOpen ? "rotate-180" : "rotate-0"} `}
            size={25}
          />
        </div>
      </div>
      {isOpen && (
        <div className="relative">
          <div
            className={`absolute z-10 bg-background overflow-auto w-full max-h-60  right-0 border rounded-md mt-2 shadow-lg `}
          >
            {dropdownData?.map((option, i) => (
              <div
                key={i}
                className="cursor-pointer hover:bg-input px-5 py-3"
                onClick={() => {
                  selectHandle(option);
                  setIsOpen(false);
                }}
              >
                <h1>{option.label}</h1>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
