import React from "react";
import { CategoryText, CategoryTextWithImage } from "@/components/CategoryLink";
import { Slider } from "@/components/Slider";
import { ProductCard } from "@/components/ProductCard";
const page = () => {
  return (
    <div>
      <CategoryText />
      <Slider />
      <CategoryTextWithImage />
      <ProductCard />
    </div>
  );
};

export default page;
