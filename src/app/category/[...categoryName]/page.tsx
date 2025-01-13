import { MoreProductCardData } from "@/components/ProductsData";
import { PageProps } from "@/interfaces";

const MoreProductPage = async ({ params }: PageProps) => {
  const { categoryName } = await params;

  return (
    categoryName && (
      <MoreProductCardData mainCtg={categoryName[0]} subCtg={categoryName[1]} />
    )
  );
};

export default MoreProductPage;
