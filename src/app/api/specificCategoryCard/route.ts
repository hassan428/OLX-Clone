import { RenderProductCardProps } from "@/interfaces";
import { data } from "@/utils";
import { LOCATION_KEY } from "@/utils/constant";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  try {
    const { mainCategory, subCategory, location } = await req.json();

    const allCategories =
      mainCategory === "allcategories" &&
      data.flatMap((value) => {
        const filteredCardData = value.cardData.filter(
          (card) =>
            !location ||
            location === "Over All, Pakistan" ||
            card.location.includes(location)
        );

        return filteredCardData.length > 0 ? filteredCardData : [];
      });

    const specificCategoryCard = data.find(
      (value) => value.href === subCategory || value.href === mainCategory
    )?.cardData.filter(
      (card) =>
        !location ||
        location === "Over All, Pakistan" ||
        card.location.includes(location)
    );

    return Response.json({
      data: allCategories || specificCategoryCard,
    });
  } catch (error) {
    console.log("error", error);
  }
}
