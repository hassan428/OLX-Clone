import { data } from "@/utils";
import { ProductCardProps } from "@/interfaces";

export async function POST(req: Request) {
  try {
    const productID = await req.text();

    let cardDetails: ProductCardProps | undefined;

    for (const { cardData, subCtgCard } of data) {
      // Check in main category
      cardDetails =
        cardData?.find((card) => card.id == productID) ||
        subCtgCard
          ?.flatMap(({ cardData }) => cardData || [])
          .find((card) => card.id == productID);

      if (cardDetails) break;
    }

    return Response.json({
      data: cardDetails,
    });
  } catch (error) {
    console.log("error", error);
  }
}
