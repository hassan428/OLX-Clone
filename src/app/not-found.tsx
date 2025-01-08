import React from "react";
import { headers } from "next/headers";
export const notFound = async () => {
  const headersList = await headers();
  const domain = headersList.get("host");

  console.log("headersList", headersList);
  console.log("domain", domain);

  return (
    <div>
      <h1 className="text-center text-3xl font-bold">Page Not Found</h1>
    </div>
  );
};

export default notFound;
