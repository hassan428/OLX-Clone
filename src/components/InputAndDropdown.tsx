"use client";
import { DropDownConfigProps } from "@/interfaces";
import { useState, useRef, useEffect } from "react";
import { RiArrowDownWideLine } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { TextInput } from "@/components/Text_input";

export const InputAndDropdown = ({
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
  onBlur,
  onOpen,
}: DropDownConfigProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [hasMounted, setHasMounted] = useState<boolean>(false);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
      if (hasMounted && !selectValue) {
        onBlur?.(); // Trigger the onBlurOrClose callback
      }
    }
  };

  useEffect(() => {
    if (isOpen) {
      onOpen?.();
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setHasMounted(true);
  };

  return !dropdownData ? (
    <TextInput
      error={error}
      cut_handle={cut_handle}
      inputProps={{
        autoComplete: id,
        id,
        maxLength,
        value: selectValue || "",
        placeholder: `Enter ${placeholder}`,
        onChange,
        onBlur,
      }}
    />
  ) : dropdownData.length <= 3 ? (
    <div className="flex items-center gap-3 flex-wrap">
      {dropdownData.map((value, i) => {
        return (
          <Button
            key={i}
            className={`rounded text-foreground border-4 hover:bg-background border-green-900  ${
              value == selectValue && " bg-success hover:bg-success"
            } `}
            onClick={() => selectHandle(value)}
            variant={value == selectValue ? "default" : "outline"}
          >
            {value}
          </Button>
        );
      })}
    </div>
  ) : (
    <div ref={dropdownRef} className="w-full text-sm">
      <div
        className={`border rounded-md capitalize ${
          error ? "border-error text-error" : "border-foreground"
        }  flex items-center cursor-pointer justify-between p-2 `}
        onClick={toggleDropdown}
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
            {dropdownData?.map((value, i) => (
              <div
                key={i}
                className={`cursor-pointer hover:bg-input px-5 py-3 ${
                  value == selectValue && "font-black"
                }`}
                onClick={() => {
                  selectHandle(value);
                  setIsOpen(false);
                }}
              >
                <h1>{value}</h1>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
