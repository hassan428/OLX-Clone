import { SliderSrc } from "@/interfaces";

export async function GET(req: Request) {
  try {
    const sliderImages: SliderSrc[] = [
      { src: "/assets/images/category/fashion.png", href: "/category/fashion" },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuHCbHGd7D623E5XBmXkDJSQb0iTK5l3GtSQ&s",
        href: "https://github.com/hassan428",
      },
    ];
    // console.log("sliderImages", sliderImages);
    return Response.json({ data: sliderImages });
  } catch (error) {
    console.log("error", error);
  }
}
