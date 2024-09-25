import React from "react";
import { CategoryText, CategoryTextWithImage } from "@/components/CategoryLink";
import { Slider } from "@/components/Slider";
import { ProductCardData } from "@/components/ProductsData";
const page = () => {
  return (
    <div>
      <CategoryText />
      <Slider />
      <CategoryTextWithImage />
      <ProductCardData />
    </div>
  );
};

export default page;
