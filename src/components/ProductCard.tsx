import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Heart } from "lucide-react";

export function ProductCard() {
  return (
    <div className="flex m-2 gap-2">
      <Card className="w-1/4 h-ful border-2 border-border rounded-xl cursor-pointer hover:mx-2">
        <CardHeader className="p-0 border-2 border-border rounded-xl h-40">
          <Image
            src={"/assets/images/products/mobile.jfif"}
            alt="led"
            width={250}
            height={250}
            className="rounded-xl h-full"
          />
        </CardHeader>
        <CardContent className="p-3">
          <div className="flex justify-between">
            <CardTitle className="text-base mb-2">Rs. 50,000</CardTitle>
            <Heart />
          </div>
          <CardDescription className="text-accent-foreground">
            IPhone 12 Pro Max 256GB PTA Approved
          </CardDescription>
        </CardContent>
        <CardFooter className="flex-col items-start px-3  text-sm gap-2">
          <p>Bahria Town Karachi</p>
          <p className="text-xs text-muted-foreground">1 weeks ago</p>
        </CardFooter>
      </Card>
    </div>
  );
}
// src={"/assets/images/logo/Loxlight.png"}
// src={"/assets/images/category/led.webp"}
// src={"/assets/images/products/mobile.jfif"}
