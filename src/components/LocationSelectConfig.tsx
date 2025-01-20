"use client";
import React, { useState, useEffect, useRef } from "react";
import { IoLocation, IoLocationOutline } from "react-icons/io5";
import { RiArrowDownWideLine } from "react-icons/ri";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LocationSelectProps } from "@/interfaces";
import Cookies from "js-cookie";

export const LocationSelectConfig = ({
  options,
  placeholder,
  onSelect,
  onBlurOrClose,
  onOpen,
  error,
  isDefaultSelect,
}: LocationSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [defaultSelect, setDefaultSelect] = useState<string | null>(null);
  const [hasMounted, setHasMounted] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const location = Cookies.get(process.env.NEXT_PUBLIC_LOCATION_KEY || "");
    isDefaultSelect && location && setDefaultSelect(location);
    selectedValue && setDefaultSelect(null);
  }, [selectedValue]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);

        // Only trigger onBlurOrClose after initial mount
        if (hasMounted && !selectedValue) {
          onBlurOrClose?.(); // Trigger the onBlurOrClose callback
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [selectedValue, onBlurOrClose, hasMounted]);

  const selectClickHandle = (value: string) => {
    setSelectedValue(value);
    onSelect(value);
    setIsOpen(false);
  };

  useEffect(() => {
    isOpen && onOpen?.();
  }, [isOpen]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setHasMounted(true);
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {/* Dropdown button */}
      <button
        onClick={toggleDropdown}
        className={`w-full border p-3 rounded-md flex items-center justify-between shadow-sm focus:outline-none transition-all ${
          error ? "text-error border-error" : "border-foreground"
        }`}
      >
        <h1>{selectedValue || defaultSelect || placeholder}</h1>

        <RiArrowDownWideLine
          className={`transition-all ${isOpen ? "rotate-180" : "rotate-0"} `}
          size={25}
        />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute z-10 bg-border w-full border rounded-md mt-2 shadow-lg">
          <Accordion type="single" collapsible className="w-full">
            {options.map(({ province, cities }, i) => {
              return province === "Over All, Pakistan" ? (
                <div
                  key={i}
                  onClick={() => selectClickHandle(province)}
                  className={`flex items-center gap-2 px-2 py-4 border-b-2 border-background cursor-pointer  ${
                    [selectedValue, defaultSelect].includes(province)
                      ? "bg-green-300 text-green-900 hover:bg-green-300 font-semibold"
                      : "hover:bg-input hover:font-semibold"
                  }`}
                >
                  {[selectedValue, defaultSelect].includes(province) ? (
                    <IoLocation size={20} />
                  ) : (
                    <IoLocationOutline size={20} />
                  )}
                  {province}
                </div>
              ) : (
                <AccordionItem key={i} value={`items-${i}`}>
                  <AccordionTrigger
                    className={`text-left border-b-2 border-background px-2 ${
                      [selectedValue, defaultSelect].includes(province) ||
                      cities?.some(
                        (city) =>
                          city === selectedValue || city === defaultSelect
                      )
                        ? "bg-green-300 border-b-2 text-green-900 hover:bg-green-300 font-semibold"
                        : "hover:bg-input hover:font-semibold"
                    }`}
                  >
                    <div className="flex items-center gap-2 ">
                      {[selectedValue, defaultSelect].includes(province) ||
                      cities?.some(
                        (city) =>
                          city === selectedValue || city === defaultSelect
                      ) ? (
                        <IoLocation size={20} />
                      ) : (
                        <IoLocationOutline size={20} />
                      )}
                      {province}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col p-0 bg-background mb-1 border-b-2 border-background">
                    {cities?.map((city) => (
                      <div
                        key={city}
                        onClick={() => selectClickHandle(city)}
                        className={`cursor-pointer ml-5 p-3 mr-2 my-1 rounded-md hover:font-bold border-b border-background flex items-center gap-2 ${
                          [selectedValue, defaultSelect].includes(city)
                            ? "bg-green-300 text-green-900 hover:bg-green-300 font-semibold"
                            : "hover:bg-border hover:font-semibold"
                        }`}
                      >
                        {[selectedValue, defaultSelect].includes(city) ? (
                          <IoLocation size={20} />
                        ) : (
                          <IoLocationOutline size={20} />
                        )}
                        {city}
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      )}
    </div>
  );
};
