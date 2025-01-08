import { DetailProductCardData } from "@/components/ProductsData";
import { PageProps } from "@/interfaces";
import * as React from "react";

const ProductDetailsPage = async ({ params }: PageProps) => {
  const { id } = await params;
  return (
    <div className="flex items-center">
      <DetailProductCardData productID={id} />
    </div>
  );
};

export default ProductDetailsPage;
