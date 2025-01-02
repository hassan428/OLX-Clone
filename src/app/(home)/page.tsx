import React from "react";
import { CategoryTextWithImage } from "@/components/CategoryTextWithImage";
import { Slider } from "@/components/Slider";
import { ProductCardData } from "@/components/ProductsData";
import ProductName from "@/components/TestRedux";
const page = () => {
  return (
    <>
      {/* <Slider /> */}
      <ProductName />
      <CategoryTextWithImage />
      <ProductCardData />
    </>
  );
};

export default page;
