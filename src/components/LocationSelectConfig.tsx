"use client";
import React, { useState, useRef, useEffect } from "react";
import { RiArrowDownWideLine, RiArrowUpWideLine } from "react-icons/ri";
import { IoLocation, IoLocationOutline } from "react-icons/io5";
import { LocationSelectProps, Option } from "@/interfaces";

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

      {isOpen && (
        <ul className="absolute z-10 bg-background w-full border rounded-md mt-2 shadow-lg">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleOptionClick(option)}
              className="p-3 hover:p-4 hover:border-y border-foreground cursor-pointer flex items-center gap-2"
            >
              {[selectedOption?.label, defaultSelect?.label].includes(
                option.label
              ) ? (
                <IoLocation color="#16a34a" size={20} />
              ) : (
                <IoLocationOutline size={20} />
              )}

              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
