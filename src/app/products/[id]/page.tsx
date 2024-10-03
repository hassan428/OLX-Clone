import { DetailProductCardData } from "@/components/ProductsData";
import { PageProps } from "@/interfaces";
import * as React from "react";

const page = ({ params }: PageProps) => {
  return (
    <div className="flex items-center">
      <DetailProductCardData productID={params.id} />
    </div>
  );
};

export default page;
