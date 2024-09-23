import React from "react";
import { CategoryText, CategoryTextWithImage } from "@/components/CategoryLink";
import { Slider } from "@/components/Slider";
import { ProductsData } from "@/components/ProductsData";
const page = () => {
  return (
    <div>
      <CategoryText />
      <Slider />
      <CategoryTextWithImage />
      <ProductsData />
    </div>
  );
};

export default page;
