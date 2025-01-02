import { RenderProductCardProps } from "@/interfaces";
import { data } from "@/utils";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  try {
    const body = await req.text();
    console.log("body", body);

    const fourCardData: RenderProductCardProps[] = data.map((value) => {
      const filteredCardData = value.cardData.filter(
        (card, i) =>
          i < 4 &&
          (body === "Over All, Pakistan" || card.location.includes(body))
      );

      return { ...value, cardData: filteredCardData };
    });

    return Response.json({ data: fourCardData });
  } catch (error) {
    console.log("error", error);
  }
}
