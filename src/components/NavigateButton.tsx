"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";
import { NavigateButtonProps } from "@/interfaces";

const NavigateButton = ({
  pageName,
  btnText,
  method,
  variant,
}: NavigateButtonProps) => {
  const navigate = useRouter();

  const navigateHandle = () => {
    method == "replace" || method == "push"
      ? navigate[method](pageName)
      : navigate[method]();
  };

  return (
    <Button onClick={navigateHandle} variant={variant}>
      {btnText}
    </Button>
  );
};

export { NavigateButton };
