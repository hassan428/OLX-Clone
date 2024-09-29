"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { PriceRangeInterface } from "@/interfaces";

export const PriceRange = () => {
  const [range, setRange] = useState<PriceRangeInterface | null>(null);
  const [error, setError] = useState<string>("");

  const onChangeHandle = (e: any) => {
    const { value, id } = e.target;
    setRange({
      ...range,
      [id]: value,
    });
  };

  const onClickHandle = () => {
    setError("");
    if (
      range?.lowest !== undefined &&
      range?.highest !== undefined &&
      +range.lowest > +range.highest
    ) {
      setError("Lowest price must be less than highest price");
    }
    // console.log("range", range);
  };

  return (
    <>
      <h1>Price</h1>
      <div className="flex justify-around items-center gap-2">
        <Input
          type="number"
          placeholder="Lowest"
          id="lowest"
          className={`focus:border-2 focus-visible:ring-0 ${
            error ? "text-red-500 border-red-500" : "border-foreground"
          }`}
          //   value={search_value}
          onChange={onChangeHandle}
        />
        <Input
          type="number"
          placeholder="Highest"
          id="highest"
          className={`focus:border-2 border-foreground focus-visible:ring-0 ${
            error && "text-red-500 border-red-500"
          }`}
          //   value={search_value}
          onChange={onChangeHandle}
        />
      </div>
      {error && <h1 className="text-red-500 text-xs">{error}</h1>}
      <Button onClick={onClickHandle} variant="default" className="w-full">
        Filter
      </Button>
    </>
  );
};
