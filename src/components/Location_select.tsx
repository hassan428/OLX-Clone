"use client";
import { useEffect, useState } from "react";
import { DropdownConfig } from "./DropDownConfig";
import { Option } from "@/interfaces";

export function Location_select() {
  const location_of_pakistan: Option[] = [
    {
      value: "all",
      label: "Over All, Pakistan",
    },
    {
      value: "sindh",
      label: "Sindh",
    },
    {
      value: "punjab",
      label: "Punjab",
    },
    {
      value: "balochistan",
      label: "Balochistan",
    },
    {
      value: "kpk",
      label: "Khyber Pakhtunkhwa",
    },
    {
      value: "kashmir",
      label: "Azad Kashmir",
    },
  ];

  const [defaultSelect, setDefaultSelect] = useState<Option | null>(null);

  useEffect(() => {
    const val = localStorage.getItem("location");
    const realValue = val && JSON.parse(val);
    setDefaultSelect(realValue);
  }, []);

  const handleSelect = (value: Option) => {
    setDefaultSelect(null);
    localStorage.setItem("location", JSON.stringify(value));
  };

  return (
    <DropdownConfig
      options={location_of_pakistan}
      placeholder={"Select Location"}
      onSelect={handleSelect}
      defaultSelect={defaultSelect}
    />
  );
}
