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
  MainCtgProductCardProps,
} from "@/interfaces";

import axios from "axios";
import { cookies } from "next/headers";
import { LOCATION_KEY, BACKEND_URL } from "@/utils/constant";
import { Loader } from "@/components/Loader";

import { notFound } from "next/navigation";

export const ProductCardData = async () => {
  const getDataHandle = async () => {
    try {
      const location = await cookies().get(LOCATION_KEY);
      console.log("location", location);
      const res = await axios.post(
        `${BACKEND_URL}/api/allCard`,
        location?.value
      );
      return res.data.data;
    } catch (err) {
      console.log("err", err);
    }
  };

  const getData: MainCtgProductCardProps[] = await getDataHandle();

  return !getData
    ? notFound()
    : getData?.map((data, i) => <RenderProductCard key={i} {...data} />);
};

export const MoreProductCardData = async ({
  subCtg,
  mainCtg,
}: MoreProductCardDataProps) => {
  const getDataHandle = async () => {
    try {
      const location = cookies().get(LOCATION_KEY);
      const res = await axios.post(`${BACKEND_URL}/api/specificCategoryCard`, {
        mainCtg,
        subCtg,
        location: location?.value,
      });
      // console.log("response", res.data.data);
      return res.data.data;
    } catch (err) {
      console.log("err", err);
    }
  };
  const getData: ProductCardProps[] = await getDataHandle();

  return !getData?.length ? notFound() : <RenderMoreProductCard {...getData} />;
};

export const DetailProductCardData = async ({
  productID,
}: DetailProductCardDataProps) => {
  const getDataHandle = async () => {
    try {
      const res = await axios.post(
        `${BACKEND_URL}/api/specificCardDetails`,
        productID
      );
      console.log("response", res.data.data);
      return res.data.data;
    } catch (err) {
      console.log("err", err);
    }
  };

  const getData: ProductCardProps = await getDataHandle();

  return !getData ? (
    notFound()
  ) : (
    <RenderDetailProductCard cardDetails={getData} />
  );
};
