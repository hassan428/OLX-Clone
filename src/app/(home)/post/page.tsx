"use client";

import { CategoryDialog } from "@/components/CategoryDialog";
import { DropDownConfig } from "@/components/DropDownConfig";
import { ErrorText } from "@/components/ErrorText";
import { ImageUploader } from "@/components/ImageDragDrop";
import { TextInput } from "@/components/Text_input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { SentCategory, ImageItem, Option, AdDetails } from "@/interfaces";
import { location_of_pakistan } from "@/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const page = () => {
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

  const [sortedImages, setSortedImages] = useState<File[]>([]);
  // Function to handle sorted images passed from the child component
  const handleSortedImages = (images: ImageItem[]) => {
    const validImages = images.filter((img) => img.file !== null);
    setSortedImages(validImages.map((img) => img.file!)); // Only store valid files
    adsImageHandle();
  };

  const [brand, setBrand] = useState<Option | null>(null);
  const [condition, setCondition] = useState<Option | null>(null);
  const [location, setLocation] = useState<Option | null>(null);
  const [category, setCategory] = useState<SentCategory | null>(null);
  const [data, setData] = useState<AdDetails | null>(null);
  const [error, setError] = useState<AdDetails | null>(null);

  const setDataHandle = (newData: AdDetails) => {
    setData({ ...data, ...newData });
  };

  const setErrorHandle = (newError: AdDetails) => {
    setError({ ...error, ...newError });
  };

  const adsImageHandle = () => {
    Promise.all(
      sortedImages.map(
        (file) =>
          new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = ({ target }) => resolve(target?.result);
            reader.readAsDataURL(file);
          })
      )
    )
      .then((imageBase64: any[]) =>
        setDataHandle({
          image: imageBase64,
        })
      )
      .catch((error) => console.error("Error reading files", error));
  };

  useEffect(() => {
    if (sortedImages.length > 0) {
      adsImageHandle();
    }
  }, [category, sortedImages, location]);

  const postNowHandle = () => {
    setDataHandle({
      mainCategory: category?.main,
      subCategory: category?.sub,
      location: location?.value,
    });
    setErrorHandle({
      name: !data?.name ? "Name is required!" : undefined,
      location: !location ? "Location is required!" : undefined,
      mainCategory: !category?.main
        ? "Please select a category to proceed."
        : undefined,
      image: sortedImages.length == 0 ? ["true"] : undefined,
      adTitle: !data?.adTitle
        ? "Ad Title is requird!"
        : data.adTitle.length < 5
        ? "A minimum length of 5 characters is allowed."
        : undefined,
      description: !data?.description
        ? "Description is requird!"
        : data.description.length < 10
        ? "Description should contain at least 10 alphanumeric characters."
        : undefined,

      price: !data?.price
        ? "Price is required!"
        : parseInt(data.price) < 200
        ? "The minimum allowed value is PKR 200"
        : undefined,

      phoneNumber: !data?.phoneNumber
        ? "PhoneNumber is required!"
        : data.phoneNumber.length !== 10
        ? "Please enter a valid PhoneNumber"
        : undefined,
    });
  };
  console.log("data", data);
  console.log("location", location);

  return (
    <>
      <h1 className="text-center font-bold text-xl">Post Your AD</h1>
      <div className="sm:flex gap-2 p-1 items-start w-full">
        <div className="flex flex-col gap-5 sm:w-3/4">
          <div className="border-2 border-border rounded-xl m-2">
            {/* first Section */}
            <div className="flex flex-col sm:flex-row gap-2 items-center border-b-2 border-border p-2 sm:p-5 text-xs sm:text-sm">
              <h1
                className={`w-full sm:w-1/4 font-bold ${
                  error?.mainCategory && "text-red-600"
                }`}
              >
                Category
              </h1>
              <div className="w-full flex flex-col sm:w-3/4">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 ">
                    <Image
                      src={`/assets/images/${
                        category?.src
                          ? `category/${category.src} `
                          : "load_avatar.png"
                      }`}
                      alt={"mobiles load_avatar.png"}
                      width={80}
                      height={80}
                      className="rounded-full w-14 h-14 sm:w-16 sm:h-16"
                      priority={true}
                    />
                    <div className="flex flex-col justify-evenly ">
                      <h1 className="font-bold">{`${
                        category?.main || "Main"
                      }`}</h1>
                      <h1 className="text-muted-foreground">{`${
                        category?.sub || "Sub"
                      }`}</h1>
                    </div>
                  </div>

                  <CategoryDialog sentCategoryData={setCategory} />
                </div>
                {error?.mainCategory && (
                  <ErrorText className="mt-1" errorText={error.mainCategory} />
                )}
              </div>
            </div>

            {/* second Section */}

            <div className="flex flex-col sm:flex-row gap-2 items-center border-b-2 border-border p-2 sm:p-5  text-xs sm:text-sm">
              <h1
                className={`w-full sm:w-1/4 font-bold ${
                  error?.image && "text-red-600"
                }`}
              >
                Upload Images
              </h1>
              <div className="w-full sm:w-3/4 flex flex-col gap-2">
                <ImageUploader onSortedImages={handleSortedImages} />
                {error?.image ? (
                  <ErrorText
                    className="mt-1"
                    errorText={"Please provide an image"}
                  />
                ) : (
                  <h1 className="text-[11px] leading-3 sm:text-xs text-muted-foreground">
                    For the cover picture we recommend using the landscape mode.
                  </h1>
                )}
              </div>
            </div>

            {/* third Section */}

            <div className="flex flex-col border-b-2 border-border p-2 sm:p-5 text-xs sm:text-sm">
              <div className="flex flex-col sm:flex-row max-sm:gap-2 items-center py-3">
                <h1 className="w-full sm:w-1/4 font-bold">Brand*</h1>
                <div className="w-full sm:w-3/4">
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
              <div className="flex flex-col sm:flex-row max-sm:gap-2 items-center py-3">
                <h1 className="w-full sm:w-1/4 font-bold">Condition*</h1>
                <div className="w-full sm:w-3/4">
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
            <div className="flex flex-col p-2 sm:p-5 text-xs sm:text-sm">
              <div className="flex flex-col sm:flex-row max-sm:gap-2 items-center py-3">
                <h1
                  className={`w-full sm:w-1/4 font-bold ${
                    error?.adTitle && "text-red-600"
                  }`}
                >
                  Ad Title*
                </h1>
                <div className="w-full sm:w-3/4">
                  <TextInput
                    error={error?.adTitle ? true : false}
                    cut_handle={() => setDataHandle({ adTitle: "" })}
                    inputProps={{
                      autoComplete: "title",
                      maxLength: 50,
                      id: "title",
                      value: data?.adTitle || "",
                      placeholder: "Enter Title",
                      onChange: (e) =>
                        setDataHandle({ adTitle: e.target.value }),
                    }}
                  />
                  <div className="flex items-baseline justify-between mt-0.5 gap-2">
                    <div>
                      {error?.adTitle ? (
                        <ErrorText errorText={error.adTitle} />
                      ) : (
                        <h1 className="text-xs">
                          Mention the key features of your item (e.g. brand,
                          model, age, type)
                        </h1>
                      )}
                    </div>

                    <div>
                      <h1 className="text-xs w-max">{`${
                        data?.adTitle?.length || "0"
                      } / 50`}</h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row max-sm:gap-2 items-center py-3">
                <h1
                  className={`w-full sm:w-1/4 font-bold ${
                    error?.description && "text-red-600"
                  }`}
                >
                  Description*
                </h1>
                <div className="w-full sm:w-3/4 flex flex-col gap-0.5">
                  <textarea
                    id="description"
                    className={`border border-foreground ${
                      error?.description && "border-red-600 text-red-600"
                    } resize-none outline-0 bg-background p-2 leading-5 text-sm w-full`}
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

              <div className="flex flex-col sm:flex-row max-sm:gap-2 items-center py-3">
                <h1
                  className={`w-full sm:w-1/4 font-bold ${
                    error?.location && "text-red-600"
                  }`}
                >
                  Location*
                </h1>
                <div className="w-full sm:w-3/4">
                  <div>
                    <DropDownConfig
                      placeholder={"Select Location"}
                      selectValue={location?.label || ""}
                      dropdownData={location_of_pakistan}
                      selectHandle={setLocation}
                      error={error?.location ? true : false}
                    />
                    {error?.location && (
                      <ErrorText className="mt-1" errorText={error.location} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* fifth Section */}

          <div className="border-2 border-border rounded-xl m-2">
            <div className="flex flex-col sm:flex-row gap-2 items-center p-2 sm:p-5 text-xs sm:text-sm">
              <h1
                className={`w-full sm:w-1/4 font-bold ${
                  error?.price && "border-red-600"
                }`}
              >
                Price*
              </h1>
              <div className="w-full sm:w-3/4">
                <div className="flex">
                  <div
                    className={`border border-foreground ${
                      error?.price && "border-red-600 text-red-600"
                    } text-base px-2 flex items-center`}
                  >
                    <h1>Rs</h1>
                  </div>
                  <TextInput
                    error={error?.price ? true : false}
                    cut_handle={() => setDataHandle({ price: "" })}
                    inputProps={{
                      id: "price",
                      value: data?.price || "",
                      placeholder: "Enter Price",
                      maxLength: 10,
                      onChange: (e) => {
                        const { value } = e.target;
                        if (value.length == 0) setDataHandle({ price: "" });
                        for (let i = 0; i < value.length; i++)
                          if (!Number.isNaN(Number(value.split("")[i])))
                            setDataHandle({
                              price: value.slice(0).split(" ").join(""),
                            });
                          else setDataHandle({});
                      },
                    }}
                  />
                </div>
                {error?.price && (
                  <ErrorText className="mt-1" errorText={error.price} />
                )}
              </div>
            </div>
          </div>

          {/* sixth Section */}

          <div className="border-2 border-border rounded-xl m-2">
            <div className="flex flex-col border-b-2 border-border p-2 sm:p-5 text-xs sm:text-sm">
              <div className="flex flex-col sm:flex-row max-sm:gap-2 items-center py-3">
                <h1
                  className={`w-full sm:w-1/4 font-bold ${
                    error?.name && "text-red-600"
                  }`}
                >
                  Name*
                </h1>
                <div className="w-full sm:w-3/4">
                  <TextInput
                    error={error?.name ? true : false}
                    cut_handle={() => setDataHandle({ name: "" })}
                    inputProps={{
                      autoComplete: "name",
                      maxLength: 50,
                      id: "name",
                      value: data?.name || "",
                      placeholder: "Enter Name",
                      onChange: (e) => setDataHandle({ name: e.target.value }),
                    }}
                  />
                  {error?.name && (
                    <ErrorText className="mt-1" errorText={error.name} />
                  )}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row max-sm:gap-2 items-center py-3">
                <h1
                  className={`w-full sm:w-1/4 font-bold ${
                    error?.phoneNumber && "text-red-600"
                  }`}
                >
                  Phone Number*
                </h1>
                <div className="w-full sm:w-3/4">
                  <div className="flex">
                    <div
                      className={`border border-foreground ${
                        error?.phoneNumber && "border-red-600 text-red-600"
                      } text-base px-2 flex items-center`}
                    >
                      <h1>+92</h1>
                    </div>
                    <TextInput
                      error={error?.phoneNumber ? true : false}
                      cut_handle={() => setDataHandle({ phoneNumber: "" })}
                      inputProps={{
                        id: "phoneNumber",
                        value: data?.phoneNumber || "",
                        placeholder: "Enter Phone Number",
                        maxLength: 10,
                        onChange: (e) => {
                          const { value } = e.target;
                          if (value.length == 0)
                            setDataHandle({ phoneNumber: "" });
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

              <div className="flex justify-between items-center pb-3 pt-5 text-sm">
                <h1 className="w-3/4 font-bold">Show my phone number in ads</h1>

                <Switch
                  defaultChecked={false}
                  id="showPhoneNumber"
                  className="data-[state=unchecked]:bg-gray-400 data-[state=checked]:bg-green-400"
                  onCheckedChange={(val: boolean) =>
                    setDataHandle({ showMyPhNum: val })
                  }
                />
              </div>
            </div>
            <div className="flex justify-end p-2 sm:p-5 text-xs sm:text-sm">
              <Button className="w-max" onClick={postNowHandle}>
                Post now
              </Button>
            </div>
          </div>
        </div>

        <div className="hidden sm:flex flex-col gap-5 w-1/4 text-xs border-2 border-border rounded-xl my-1 p-5 pr-2 ">
          <strong className="text-sm">Need help getting started?</strong>
          <h1>
            Review these resource to learn how to create a great ad and increase
            your selling chances
          </h1>

          <li className="font-bold cursor-pointer hover:underline">
            Tips for improving your ads and your chances of selling
          </li>
          <li className="font-bold cursor-pointer hover:underline">
            All you need to know about Posting Ads
          </li>

          <h1>You can always come back to change your ad</h1>
        </div>
      </div>
    </>
  );
};

export default page;
