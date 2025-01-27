import { MainCtgProductCardProps } from "@/interfaces";
import { data } from "@/utils";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  try {
    const body = await req.text();
    // console.log("body", body);
    body &&
      (await cookies()).set(process.env.NEXT_PUBLIC_LOCATION_KEY || "", body);

    const fourCardData: MainCtgProductCardProps[] = data
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
      })
      .filter((item): item is MainCtgProductCardProps => item !== null); // Type narrowing
    // Remove undefined values from the final array

    return Response.json({ data: fourCardData });
  } catch (error) {
    console.log("error", error);
  }
}
