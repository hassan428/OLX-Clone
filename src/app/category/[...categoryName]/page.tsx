import { MoreProductCardData } from "@/components/ProductsData";
import { PageProps } from "@/interfaces";

const page = ({ params }: PageProps) => {
  return (
    params.categoryName && (
      <MoreProductCardData
        mainCategory={params.categoryName[0]}
        subCategory={params.categoryName[1]}
      />
    )
  );
};

export default page;
