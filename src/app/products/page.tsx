import Image from "next/image";
import React from "react";
import imagePath from "../../../public/assets/images/taskcy_app_icon.jpg";

const imagePath2 = "/assets/images/taskcy_app_icon.jpg"; // SLASH "/" located direct public directory

const page = () => {
  return (
    <div className="text-4xl">
      All Products
      <Image
        src={imagePath2}
        // src={imagePath}
        // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw_BDmPZaZkmce5-_TF_YKaqRe14kIVKxyWw&s"
        alt="taskcy"
        width={250}
        height={250}
        className="m-5 text-sm"
      />
    </div>
  );
};

export default page;
