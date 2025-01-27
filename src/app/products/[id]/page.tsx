import { DetailProductCardData } from "@/components/ProductsDataSSR";
import { PageProps } from "@/interfaces";

const ProductDetailsPage = async ({ params }: PageProps) => {
  const { id } = await params;
  return (
    <div className="flex items-center">
      <DetailProductCardData productID={id} />
    </div>
  );
};

export default ProductDetailsPage;
