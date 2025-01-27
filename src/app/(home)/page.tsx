import { CategoryTextWithImage } from "@/components/CategoryTextWithImage";
import { Slider } from "@/components/Slider";
import { ProductCardData } from "@/components/ProductsDataSSR";

const HomePage = () => {
  return (
    <>
      <Slider />
      <CategoryTextWithImage />
      <ProductCardData />
    </>
  );
};

export default HomePage;
