import { MoreProductCardData } from "@/components/ProductsData";
import { PageProps } from "@/interfaces";

const page = ({ params }: PageProps) => {
  return <MoreProductCardData categoryName={params.name} />;
};

export default page;
