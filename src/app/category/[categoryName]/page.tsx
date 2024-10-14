import { MoreProductCardData } from "@/components/ProductsData";
import { PageProps } from "@/interfaces";

const page = ({ params }: PageProps) => {
  return (
    params.categoryName && (
      <MoreProductCardData categoryName={params.categoryName} />
    )
  );
};

export default page;
