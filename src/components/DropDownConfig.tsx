"use client";
import { DropDownConfigProps } from "@/interfaces";
import React, { useState, useRef, useEffect } from "react";
import { RiArrowDownWideLine, RiArrowUpWideLine } from "react-icons/ri";

export const DropDownConfig = ({
  placeholder,
  defaultSelect,
  selectHandle,
  selectValue,
  dropdownData,
  error,
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

  return (
    <div ref={dropdownRef} className="w-full">
      <div
        className={`border border-foreground ${
          error && "border-red-600 text-red-600"
        }  flex items-center cursor-pointer justify-between p-2 `}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>{defaultSelect || selectValue || placeholder}</div>

        <div>
          {isOpen ? (
            <RiArrowUpWideLine size={20} />
          ) : (
            <RiArrowDownWideLine size={20} />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="relative">
          <div
            className={`absolute z-10 bg-background overflow-auto w-full max-h-60  right-0 border rounded-md mt-2 shadow-lg `}
          >
            {dropdownData.map((value, i) => (
              <div
                key={i}
                className="cursor-pointer hover:bg-input px-5 py-3"
                onClick={() => {
                  selectHandle(value);
                  setIsOpen(false);
                }}
              >
                <h1>{value.label}</h1>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
