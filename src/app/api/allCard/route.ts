import { RenderProductCardProps } from "@/interfaces";
import { data } from "@/utils";
import { LOCATION_KEY } from "@/utils/constant";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  try {
    const body = await req.text();
    console.log("body", body);
    body && cookies().set(LOCATION_KEY, body);

    const fourCardData: RenderProductCardProps[] = data
      .map((value) => {
        // Filter cardData based on the condition
        const filteredCardData = value.cardData.filter(
          (card, i) =>
            i < 4 &&
            (!body ||
              body === "Over All, Pakistan" ||
              card.location.includes(body))
        );
        return filteredCardData.length > 0
          ? { ...value, cardData: filteredCardData }
          : null;

        // Only return the object if cardData is not empty
      })
      // Remove undefined values from the final array
      .filter((item): item is RenderProductCardProps => item !== null); // Type narrowing

    return Response.json({ data: fourCardData });
  } catch (error) {
    console.log("error", error);
  }
}
