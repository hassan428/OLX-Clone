"use client";
import { DropDownConfig } from "@/components/DropDownConfig";
import { ErrorText } from "@/components/ErrorText";
import { TextInput } from "@/components/Text_input";
import { Option } from "@/interfaces";
import { location_of_pakistan } from "@/utils";
import { ImagePlusIcon, PlusIcon } from "lucide-react";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";

const page = () => {
  const render: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1, 1, 1];

  const conditionData: Option[] = [
    { label: "New", value: "new" },
    { label: "Open Box", value: "openbox" },
    { label: "Used", value: "used" },
    { label: "Refurbished", value: "refurbished" },
    { label: "For Parts", value: "parts" },
  ];

  const brandData: Option[] = [
    { label: "Apple", value: "apple" },
    { label: "Samsung", value: "samsung" },
    { label: "Vivo", value: "vivo" },
    { label: "Realme", value: "realme" },
    { label: "Nokia", value: "nokia" },
  ];

  const [brand, setBrand] = useState<Option | null>(null);
  const [condition, setCondition] = useState<Option | null>(null);
  const [location, setLocation] = useState<Option | null>(null);

  const [data, setData] = useState<any | null>(null); // type define krna baqi hain
  const [error, setError] = useState<any | null>(null);

  const setDataHandle = (newData: any) => {
    setData({ ...data, ...newData });
  };

  const adsImageHandle = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { files } = target;
    const url = files && files[0];
    if (url) {
      const reader = new FileReader();
      reader.onload = ({ target }: ProgressEvent<FileReader>) => {
        // setAvatarUrl(target?.result);
      };
      reader.readAsDataURL(url);
    }
  };

  return (
    <>
      <h1 className="text-center font-bold text-xl">Post Your AD</h1>
      <input
        type="file"
        id="ads"
        className="hidden"
        onChange={adsImageHandle}
      />

      <div className="flex flex-col gap-10">
        <div className="border-2 border-border rounded-xl m-2 p-2">
          {/* first Section */}
          <div className="flex items-center border-b-2 border-border p-3  text-sm">
            <h1 className="w-1/4 font-bold">Category</h1>
            <div className="w-3/4">
              <div className="flex items-center justify-between">
                <div className="flex gap-1 ">
                  <Image
                    src={`/assets/images/category/mobiles.png`}
                    alt={"mobiles"}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div className="flex flex-col justify-evenly">
                    <h1 className="font-bold">Mobiles</h1>
                    <h1 className="text-muted-foreground">Tablets</h1>
                  </div>
                </div>
                <h1 className="text-blue-600 cursor-pointer">Change</h1>
              </div>
            </div>
          </div>

          {/* second Section */}

          <div className="flex items-center border-b-2 border-border p-3  text-sm">
            <h1 className="w-1/4 font-bold">Upload Images</h1>
            <div className="w-2/4">
              <div className="flex flex-col gap-2">
                <div className="grid grid-cols-5 gap-2">
                  {render.map((value, i) => (
                    <div
                      key={i}
                      className="border-2 border-border flex items-center justify-center rounded-xl w-20 h-20"
                    >
                      {i == 0 ? (
                        <label htmlFor="ads" className="cursor-pointer">
                          <PlusIcon />
                        </label>
                      ) : i < 3 ? (
                        <Image
                          src={`/assets/images/category/led.webp`}
                          alt={"mobiles"}
                          width={80}
                          height={80}
                          className="w-full rounded-xl"
                        />
                      ) : (
                        <ImagePlusIcon />
                      )}
                    </div>
                  ))}
                </div>
                <h1 className="text-xs text-muted-foreground">
                  For the cover picture we recommend using the landscape mode.
                </h1>
              </div>
            </div>
          </div>

          {/* third Section */}

          <div className="flex flex-col border-b-2 border-border p-3 text-sm">
            <div className="flex items-center p-3">
              <h1 className="w-1/4 font-bold">Brand*</h1>
              <div className="w-2/4">
                <div>
                  <DropDownConfig
                    placeholder={"Select Brand"}
                    selectValue={brand?.label || ""}
                    dropdownData={brandData}
                    selectHandle={setBrand}
                    // error={error?.gender ? true : false}
                  />
                  {/* {error?.gender && (
                <ErrorText className="mt-1" errorText={error.gender} />
              )} */}
                </div>
              </div>
            </div>
            <div className="flex items-center p-3">
              <h1 className="w-1/4 font-bold">Condition*</h1>
              <div className="w-2/4">
                <div>
                  <DropDownConfig
                    placeholder={"Select Condition"}
                    selectValue={condition?.label || ""}
                    dropdownData={conditionData}
                    selectHandle={setCondition}
                    // error={error?.gender ? true : false}
                  />
                  {/* {error?.gender && (
                <ErrorText className="mt-1" errorText={error.gender} />
              )} */}
                </div>
              </div>
            </div>
          </div>

          {/* fourth Section */}

          <div className="flex flex-col border-b-2 border-border p-3 text-sm">
            <div className="flex items-center p-3">
              <h1 className="w-1/4 font-bold">Ad title*</h1>
              <div className="w-2/4">
                <TextInput
                  error={error?.title ? true : false}
                  cut_handle={() => setDataHandle({ title: "" })}
                  inputProps={{
                    autoComplete: "title",
                    maxLength: 50,
                    id: "title",
                    value: data?.title || "",
                    placeholder: "Enter Title",
                    onChange: (e) => setDataHandle({ title: e.target.value }),
                  }}
                />
                <div className="flex items-baseline justify-between mt-0.5 gap-2">
                  <div>
                    {error?.title ? (
                      <ErrorText errorText={error.title} />
                    ) : (
                      <h1 className="text-xs">
                        Mention the key features of your item (e.g. brand,
                        model, age, type)
                      </h1>
                    )}
                  </div>

                  <div>
                    <h1 className="text-xs w-max">{`${
                      data?.title?.length || "0"
                    } / 50`}</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center p-3">
              <h1 className="w-1/4 font-bold">Description*</h1>
              <div className="w-2/4 flex flex-col gap-0.5">
                <textarea
                  id="description"
                  className={`border border-foreground ${
                    error?.aboutMe && "border-red-600 text-red-600"
                  } resize-none outline-0 bg-background p-2 leading-5 text-base w-full`}
                  rows={5}
                  placeholder="Describe the item you're selling"
                  maxLength={5000}
                  onChange={(e) =>
                    setDataHandle({ description: e.target.value })
                  }
                />

                <div className="flex items-baseline justify-between gap-2">
                  <div>
                    {error?.description ? (
                      <ErrorText errorText={error.description} />
                    ) : (
                      <h1 className="text-xs">
                        Include condition, features and reason for selling
                      </h1>
                    )}
                  </div>

                  <div>
                    <h1 className="text-xs w-max">{`${
                      data?.description?.length || "0"
                    } / 5000`}</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center p-3">
              <h1 className="w-1/4 font-bold">Location*</h1>
              <div className="w-2/4">
                <div>
                  <DropDownConfig
                    placeholder={"Select Location"}
                    selectValue={location?.label || ""}
                    dropdownData={location_of_pakistan}
                    selectHandle={setLocation}
                    // error={error?.gender ? true : false}
                  />
                  {/* {error?.gender && (
                <ErrorText className="mt-1" errorText={error.gender} />
              )} */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-2 border-border rounded-xl m-2 p-2">
          <div className="flex items-center  border-border p-3  text-sm">
            <h1 className="w-1/4 font-bold">Category</h1>
            <div className="w-3/4">
              <div className="flex">
                <div
                  className={`border border-foreground ${
                    error?.phoneNumber && "border-red-600 text-red-600"
                  } text-base px-2 flex items-center`}
                >
                  <h1 className="">+92</h1>
                </div>
                <TextInput
                  error={error?.phoneNumber ? true : false}
                  cut_handle={() => setDataHandle({ phoneNumber: "" })}
                  inputProps={{
                    id: "phoneNumber",
                    value: data?.phoneNumber || "",
                    placeholder: "Phone Number",
                    maxLength: 10,
                    onChange: (e) => {
                      const { value } = e.target;
                      if (value.length == 0) setDataHandle({ phoneNumber: "" });
                      for (let i = 0; i < value.length; i++)
                        if (!Number.isNaN(Number(value.split("")[i])))
                          setDataHandle({
                            phoneNumber: value.slice(0).split(" ").join(""),
                          });
                        else setDataHandle({});
                    },
                  }}
                />
              </div>
              {error?.phoneNumber && (
                <ErrorText className="mt-1" errorText={error.phoneNumber} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
