import { RenderProductCardProps } from "@/interfaces";
import { data } from "@/utils";

export async function POST(req: Request) {
  try {
    const { mainCategory, subCategory } = await req.json();

    const allCategories =
      mainCategory == "allcategories" &&
      data.map((value) => value.cardData).flat();

    const specificCategoryCard = data.find(
      (value) => value.href === subCategory || value.href === mainCategory
    )?.cardData;

    return Response.json({
      data: allCategories || specificCategoryCard,
    });
  } catch (error) {
    console.log("error", error);
  }
}

