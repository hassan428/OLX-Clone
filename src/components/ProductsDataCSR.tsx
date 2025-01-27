"use client";
import { useEffect, useState } from "react";
import { RenderMoreProductCard } from "@/components/RenderProductCardCSR";
import { MoreProductCardDataProps, ProductCardProps } from "@/interfaces";
import axios from "axios";
import { notFound } from "next/navigation";
import Cookies from "js-cookie";
import { Button } from "@/components/ui/button";

export const MoreProductCardData = ({
  subCtg,
  mainCtg,
}: MoreProductCardDataProps) => {
  const [data, setdata] = useState<ProductCardProps[]>(
    Array(10).fill(null)
    // []
  );
  const [isNotFound, setIsNotFound] = useState<boolean>(false);
  const [isDataEnd, setIsDataEnd] = useState<boolean>(false);
  console.log("data", data);
  useEffect(() => {
    const getDataHandle = async () => {
      try {
        const location = Cookies.get(
          process.env.NEXT_PUBLIC_LOCATION_KEY || ""
        );

        const res = await axios.post(`/api/specificCategoryCard`, {
          mainCtg,
          subCtg,
          location,
        });
        setIsNotFound(!data.length && !res.data.data.length);
        setdata(res.data.data);
      } catch (err) {
        console.log("err", err);
      }
    };
    setTimeout(() => {
      getDataHandle();
    }, 3000);
  }, []);

  return isNotFound ? (
    notFound()
  ) : (
    <>
      <RenderMoreProductCard {...data} />

      {!isDataEnd && data.length ? (
        <div className="flex items-end">
          <Button
            variant={"outline"}
            className="w-max border-2 border-primary mt-2"
          >
            Load More
          </Button>
        </div>
      ) : null}
    </>
  );
};
