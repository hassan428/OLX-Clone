import {
  RenderDetailProductCard,
  RenderProductCard,
} from "@/components/RenderProductCardSSR";
import {
  DetailProductCardDataProps,
  ProductCardProps,
  MainCtgProductCardProps,
} from "@/interfaces";
import axios from "axios";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

const { BACKEND_URL } = process.env;

export const ProductCardData = async () => {
  const getDataHandle = async () => {
    try {
      const location = await (
        await cookies()
      ).get(process.env.NEXT_PUBLIC_LOCATION_KEY || "");
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
