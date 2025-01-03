import { DetailProductCardData } from "@/components/ProductsData";
import { PageProps } from "@/interfaces";
import * as React from "react";

const ProductDetailsPage = ({ params }: PageProps) => {
  return (
    <div className="flex items-center">
      <DetailProductCardData productID={params.id} />
    </div>
  );
};

export default ProductDetailsPage;
