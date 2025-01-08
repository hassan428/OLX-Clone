import { ProductCardProps } from "@/interfaces";
import { data } from "@/utils";

export async function POST(req: Request) {
  try {
    const { mainCtg, subCtg, location } = await req.json();

    let productCard: ProductCardProps[] = [];

    if (mainCtg === "allcategories") {
      data.flatMap((mainCtgCard) => {
        productCard.push(...mainCtgCard.cardData);

        mainCtgCard?.subCtgCard?.flatMap((subCtgCard) => {
          productCard.push(...subCtgCard.cardData);
        });
      });
    } else {
      data.find((mainCtgCard) => {
        if (!subCtg && mainCtgCard.href === mainCtg) {
          productCard?.push(...mainCtgCard?.cardData);
          mainCtgCard.subCtgCard?.find((subCtgCard) => {
            productCard?.push(...subCtgCard?.cardData);
          });
        }
        mainCtgCard.subCtgCard?.find((subCtgCard) => {
          if (subCtgCard.href === subCtg) {
            productCard?.push(...subCtgCard?.cardData);
          }
        });
      });
    }

    productCard = productCard?.filter(
      (card) =>
        !location ||
        location === "Over All, Pakistan" ||
        card.location.includes(location)
    );

    return Response.json({
      data: productCard,
    });
  } catch (error) {
    console.log("error", error);
  }
}
