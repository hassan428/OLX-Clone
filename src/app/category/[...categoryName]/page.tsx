import { MoreProductCardData } from "@/components/ProductsData";
import { PageProps } from "@/interfaces";
import axios from "axios";

const MoreProductPage = ({ params }: PageProps) => {
  const { categoryName } = params;

  return (
    categoryName && (
      <MoreProductCardData
        mainCategory={categoryName[0]}
        subCategory={categoryName[1]}
      />
    )
  );
};

export default MoreProductPage;
