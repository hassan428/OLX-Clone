"use client";
import { useEffect } from "react";
import { LocationSelectConfig } from "@/components/LocationSelectConfig";
import { Option } from "@/interfaces";
import { LOCATION_KEY } from "@/utils/constant";
import { location_of_pakistan } from "@/utils";
import axios from "axios";

export function Location_select() {
  useEffect(() => {
    const val = localStorage.getItem(LOCATION_KEY);
  }, []);

  const handleSelect = async (value: string) => {
    try {
      localStorage.setItem(LOCATION_KEY, value);
      const res = await axios.post("http://localhost:3000/api/allCard", value);
      console.log("response", res.data.data);
      return res.data.data;
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
