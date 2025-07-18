import { RenderMoreProductCard } from "@/components/RenderProductCardCSR";
import { ShareProfile } from "@/components/ShareProfile";
import { PageProps } from "@/interfaces";
import { data } from "@/utils";
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";

const ProfilePage = ({ params }: PageProps) => {
  const moreProductData = data.find((value) => value.cardData)!;

  return (
    <>
      <div className="flex flex-col sm:flex-row items-start p-2 sm:py-5 gap-2">
        <div className="flex flex-col w-full sm:w-1/3 gap-5 sm:items-center">
          <div className="flex flex-row sm:flex-col items-center gap-2">
            <Image
              src={"/assets/images/load_avatar.png"}
              alt="Avatar"
              width={75}
              height={75}
              priority={true}
              className="w-20 h-20 sm:w-36 sm:h-36 rounded-full object-cover"
            />

            <div className="flex flex-col justify-around font-bold">
              <h1 className="sm:hidden">Muhammad Huzaifa</h1>
              <h1 className="border-b border-foreground w-max ">
                {moreProductData.cardData.length} published ads
              </h1>
            </div>
          </div>

          <ShareProfile />
        </div>

        <div className="flex sm:flex-col w-full sm:w-2/3 gap-3 ">
          <h1 className="max-sm:hidden text-4xl font-bold">Muhammad Huzaifa</h1>

          <div className="my-5 w-full flex flex-col gap-5">
            <h1 className="font-bold">Filter By:-</h1>
            <div className="w-full sm:w-1/2">
              <h1 className="text-sm">Location</h1>
              <div className="flex items-center border-2 border-border rounded gap-1 mt-1 p-2">
                <IoLocationOutline size={20} />
                <h1>{"location"}</h1>
              </div>
            </div>
            <RenderMoreProductCard {...moreProductData.cardData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
