import { LocationSelectConfig } from "@/components/LocationSelectConfig";
import { LOCATION_KEY, BACKEND_URL } from "@/utils/constant";
import { location_of_pakistan } from "@/utils";
import axios from "axios";

export function Location_select() {
  const handleSelect = async (value: string) => {
    try {
      localStorage.setItem(LOCATION_KEY, value);
      const res = await axios.post(`${BACKEND_URL}/api/allCard`, value);
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
