import { LocationSelectConfig } from "@/components/LocationSelectConfig";
import { location_of_pakistan } from "@/utils";
import Cookies from "js-cookie";

export function Location_select() {
  const handleSelect = (value: string) => {
    Cookies.set(process.env.NEXT_PUBLIC_LOCATION_KEY || "", value);
    window.location.reload();
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

