import React from "react";
import { CategoryTextWithImage } from "@/components/CategoryLink";
import { Slider } from "@/components/Slider";
import { ProductCardData } from "@/components/ProductsData";
const page = () => {
  return (
    <>
      <Slider />
      <CategoryTextWithImage />
      <ProductCardData />
    </>
  );
};

export default page;
