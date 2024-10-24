import React from "react";
import {
  RenderDetailProductCard,
  RenderMoreProductCard,
  RenderProductCard,
} from "@/components/RenderProductCard";
import {
  DetailProductCardDataProps,
  MoreProductCardDataProps,
} from "@/interfaces";
import { data } from "@/utils";

export const ProductCardData = () => {
  // Data Fetch

  return data.map((data, i) => <RenderProductCard key={i} {...data} />);
};

export const MoreProductCardData = ({
  mainCategory,
}: MoreProductCardDataProps) => {
  // Data Fetch
  const moreProductData = data.find((value) => value.href == mainCategory)!;

  // console.log("moreProductData", moreProductData);
  return mainCategory == "allcategories" ? (
    data.map((value) => <RenderMoreProductCard {...value?.cardData} />)
  ) : (
    <RenderMoreProductCard {...moreProductData?.cardData} />
  );
};

export const DetailProductCardData = ({
  productID,
}: DetailProductCardDataProps) => {
  const detailsCardData = data
    .flatMap((value) => value.cardData) // Flatten all cardData arrays into one array
    .find((card) => card.id == productID)!; // Find the card with the matching ID

  return <RenderDetailProductCard cardDetails={detailsCardData} />;
};
