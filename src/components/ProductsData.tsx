"use client";
import React, { useEffect, useState } from "react";
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
import { locationStrogeName } from "@/utils/constant";
import axios from "axios";

export const ProductCardData = () => {
  const [data, setdata] = useState<RenderProductCardProps[]>([]);

  // Data Fetch
  const getData = async () => {
    const location = localStorage.getItem(locationStrogeName);
    try {
      const res = await axios.post("/api/allCard", location);
      setdata(res.data.data);
      console.log("res", res.data.data);
    } catch (err) {
      console.log("err", err);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return data.map((data, i) => <RenderProductCard key={i} {...data} />);
};

export const MoreProductCardData = ({
  mainCategory,
  subCategory,
}: MoreProductCardDataProps) => {
  const [data, setdata] = useState<ProductCardProps[]>([]);
  // Data Fetch
  const getData = async () => {
    try {
      const res = await axios.post("/api/specificCategoryCard", {mainCategory,subCategory});
      setdata(res.data.data);
      console.log("res", res.data.data);
    } catch (err) {
      console.log("err", err);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return data && <RenderMoreProductCard {...data} />;
};

export const DetailProductCardData = ({
  productID,
}: DetailProductCardDataProps) => {
  const detailsCardData = data
    .flatMap((value) => value.cardData) // Flatten all cardData arrays into one array
    .find((card) => card.id == productID)!; // Find the card with the matching ID

  return <RenderDetailProductCard cardDetails={detailsCardData} />;
};
