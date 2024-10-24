"use client";
import { useEffect, useState } from "react";
import { LocationSelectConfig } from "@/components/LocationSelectConfig";
import { Option } from "@/interfaces";
import { locationStrogeName } from "@/utils/constant";
import { location_of_pakistan } from "@/utils";

export function Location_select() {
  const [defaultSelect, setDefaultSelect] = useState<Option | null>(null);

  useEffect(() => {
    const val = localStorage.getItem(locationStrogeName);
    const realValue = val && JSON.parse(val);
    setDefaultSelect(realValue);
  }, []);

  const handleSelect = (value: Option) => {
    setDefaultSelect(null);
    localStorage.setItem(locationStrogeName, JSON.stringify(value));
  };

  return (
    <LocationSelectConfig
      options={location_of_pakistan}
      placeholder={"Select Location"}
      onSelect={handleSelect}
      defaultSelect={defaultSelect}
    />
  );
}

// "use client";
// import { useEffect, useState } from "react";
// import { LocationSelectConfig } from "@/components/LocationSelectConfig";
// import { Option } from "@/interfaces";
// import { locationStrogeName } from "@/utils/constant";
// import { location_of_pakistan } from "@/utils";

// export function Location_select() {
//   const [defaultSelect, setDefaultSelect] = useState<Option | null>(null);

//   useEffect(() => {
//     const val = localStorage.getItem(locationStrogeName);
//     const realValue = val && JSON.parse(val);
//     setDefaultSelect(realValue);
//   }, []);

//   const handleSelect = (value: Option) => {
//     setDefaultSelect(null);
//     localStorage.setItem(locationStrogeName, JSON.stringify(value));
//   };

//   return (
//     <LocationSelectConfig
//       options={location_of_pakistan}
//       placeholder={"Select Location"}
//       onSelect={handleSelect}
//       defaultSelect={defaultSelect}
//     />
//   );
// }
