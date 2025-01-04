import React from "react";
import {
  RenderDetailProductCard,
  RenderMoreProductCard,
  RenderProductCard,
} from "@/components/RenderProductCard";
import {
  DetailProductCardDataProps,
  MoreProductCardDataProps,
  ProductCardProps,
  RenderProductCardProps,
} from "@/interfaces";
import { data } from "@/utils";
import axios from "axios";
import { cookies } from "next/headers";
import { LOCATION_KEY } from "@/utils/constant";

export const ProductCardData = async () => {
  const getDataHandle = async () => {
    try {
      const location = cookies().get(LOCATION_KEY);
      const res = await axios.post(
        "http://localhost:3000/api/allCard",
        location?.value
      );
      console.log("response", res.data.data);
      return res.data.data;
    } catch (err) {
      console.log("err", err);
    }
  };

  const getData: RenderProductCardProps[] = await getDataHandle();
  return getData?.map((data, i) => <RenderProductCard key={i} {...data} />);
};

export const MoreProductCardData = async ({
  mainCategory,
  subCategory,
}: MoreProductCardDataProps) => {
  const getDataHandle = async () => {
    try {
      const location = cookies().get(LOCATION_KEY);
      const res = await axios.post(
        "http://localhost:3000/api/specificCategoryCard",
        {
          mainCategory,
          subCategory,
          location: location?.value,
        }
      );
      console.log("response", res.data.data);
      return res.data.data;
    } catch (err) {
      console.log("err", err);
    }
  };
  const getData: ProductCardProps[] = await getDataHandle();

  return <RenderMoreProductCard {...getData} />;
};

export const DetailProductCardData = ({
  productID,
}: DetailProductCardDataProps) => {
  const detailsCardData = data
    .flatMap((value) => value.cardData) // Flatten all cardData arrays into one array
    .find((card) => card.id == productID)!; // Find the card with the matching ID

  return <RenderDetailProductCard cardDetails={detailsCardData} />;
};
