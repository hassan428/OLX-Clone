"use client";
import { useEffect } from "react";
import { LocationSelectConfig } from "@/components/LocationSelectConfig";
import { Option } from "@/interfaces";
import { locationStrogeName } from "@/utils/constant";
import { location_of_pakistan } from "@/utils";

export function Location_select() {
  useEffect(() => {
    const val = localStorage.getItem(locationStrogeName);
  }, []);

  const handleSelect = (value: string) => {
    getData(value);
    localStorage.setItem(locationStrogeName, value);
  };

  const getData = async (value: string) => {
    const location = localStorage.getItem(locationStrogeName);
    try {
      const res = await (
        await fetch("/api/cardData", {
          method: "post",
          body: JSON.stringify(value || location),
        })
      ).json();
      console.log("res", res);
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <LocationSelectConfig
      options={location_of_pakistan}
      placeholder={"Select Location"}
      onSelect={handleSelect}
      isDefaultSelect={true}
    />
  );
}
