"use client";
import React, { useState, useRef, useEffect } from "react";
import { RiArrowDownWideLine, RiArrowUpWideLine } from "react-icons/ri";
import { IoLocation, IoLocationOutline } from "react-icons/io5";
import { LocationSelectProps, Option } from "@/interfaces";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const LocationSelectConfig = ({
  options,
  placeholder,
  onSelect,
  defaultSelect,
}: LocationSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(
    defaultSelect
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {/* Dropdown button */}
      <button
        onClick={toggleDropdown}
        className={`w-full border border-foreground p-3 rounded-md flex items-center justify-between shadow-sm focus:outline-none transition-all`}
      >
        <h1>{selectedOption?.label || defaultSelect?.label || placeholder}</h1>
        {isOpen ? (
          <RiArrowUpWideLine size={25} />
        ) : (
          <RiArrowDownWideLine size={25} />
        )}
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute z-10 bg-background w-full border rounded-md mt-2 shadow-lg">
          <Accordion type="single" collapsible className="w-full">
            {options.map(({ province, cities }, i) =>
              province.value === "all" ? (
                // Direct selection for "Over All, Pakistan"
                <div
                  key={i}
                  onClick={() => handleOptionClick(province)}
                  className={`flex items-center gap-2 px-3 py-4 border-b cursor-pointer hover:bg-input rounded  ${
                    [selectedOption?.label, defaultSelect?.label].includes(
                      province.label
                    ) &&
                    "bg-green-300 text-green-900 hover:bg-green-300 font-bold"
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
                // Accordion for provinces with cities
                <AccordionItem key={i} value={`items-${i}`}>
                  <AccordionTrigger className="text-left hover:bg-input hover:border-b-2 border-background px-3">
                    <div className="flex items-center gap-2 ">
                      {[selectedOption?.label, defaultSelect?.label].includes(
                        province.label
                      ) ? (
                        <IoLocation color="#16a34a" size={20} />
                      ) : (
                        <IoLocationOutline size={20} />
                      )}
                      {province.label}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col p-0  bg-border mb-2 rounded">
                    {cities?.map((city) => (
                      <div
                        key={city.value}
                        onClick={() => handleOptionClick(city)}
                        className={`cursor-pointer pl-5 p-3 hover:font-bold hover:bg-input rounded flex items-center gap-2 ${
                          selectedOption?.label === city.label &&
                          "bg-green-300 text-green-900 hover:bg-green-300 font-bold"
                        }`}
                      >
                        {selectedOption?.label === city.label ? (
                          <IoLocation size={20} />
                        ) : (
                          <IoLocationOutline size={20} />
                        )}
                        {city.label}
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              )
            )}
          </Accordion>
        </div>
      )}
    </div>
  );
};
