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
import { LocationSelectProps, Option } from "@/interfaces";
import { locationStrogeName } from "@/utils/constant";

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
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [defaultSelect, setDefaultSelect] = useState<Option | null>(null);
  const [hasMounted, setHasMounted] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const val = localStorage.getItem(locationStrogeName);
    const realValue: Option = val && JSON.parse(val);
    isDefaultSelect && setDefaultSelect(realValue);
    selectedOption && setDefaultSelect(null);
  }, [selectedOption]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);

        // Only trigger onBlurOrClose after initial mount
        if (hasMounted && !selectedOption) {
          onBlurOrClose?.(); // Trigger the onBlurOrClose callback
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [selectedOption, onBlurOrClose, hasMounted]);

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    onSelect(option);
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
        <h1>{selectedOption?.label || defaultSelect?.label || placeholder}</h1>

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
              return province.value === "all" ? (
                <div
                  key={i}
                  onClick={() => handleOptionClick(province)}
                  className={`flex items-center gap-2 px-3 py-4 border-b-2 border-background cursor-pointer  ${
                    [selectedOption?.label, defaultSelect?.label].includes(
                      province.label
                    )
                      ? "bg-green-300 text-green-900 hover:bg-green-300 font-semibold"
                      : "hover:bg-input hover:font-semibold"
                  }`}
                >
                  {[selectedOption?.label, defaultSelect?.label].includes(
                    province.label
                  ) ? (
                    <IoLocation size={20} />
                  ) : (
                    <IoLocationOutline size={20} />
                  )}
                  {province.label}
                </div>
              ) : (
                <AccordionItem key={i} value={`items-${i}`}>
                  <AccordionTrigger
                    className={`text-left border-b-2 border-background px-3 ${
                      [selectedOption?.label, defaultSelect?.label].includes(
                        province.label
                      ) ||
                      cities?.some(
                        (city) =>
                          city.label === selectedOption?.label ||
                          city.label === defaultSelect?.label
                      )
                        ? "bg-green-300 border-b-2 text-green-900 hover:bg-green-300 font-semibold"
                        : "hover:bg-input hover:font-semibold"
                    }`}
                  >
                    <div className="flex items-center gap-2 ">
                      {[selectedOption?.label, defaultSelect?.label].includes(
                        province.label
                      ) ||
                      cities?.some(
                        (city) =>
                          city.label === selectedOption?.label ||
                          city.label === defaultSelect?.label
                      ) ? (
                        <IoLocation size={20} />
                      ) : (
                        <IoLocationOutline size={20} />
                      )}
                      {province.label}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col p-0 bg-border mb-1">
                    {cities?.map((city) => (
                      <div
                        key={city.value}
                        onClick={() => handleOptionClick(city)}
                        className={`cursor-pointer pl-5 p-3 hover:font-bold hover:border-y border-border rounded flex items-center gap-2 ${
                          [
                            selectedOption?.label,
                            defaultSelect?.label,
                          ].includes(city.label)
                            ? "bg-green-300 text-green-900 hover:bg-green-300 font-semibold"
                            : "hover:bg-input hover:font-semibold"
                        }`}
                      >
                        {[selectedOption?.label, defaultSelect?.label].includes(
                          city.label
                        ) ? (
                          <IoLocation size={20} />
                        ) : (
                          <IoLocationOutline size={20} />
                        )}
                        {city.label}
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
