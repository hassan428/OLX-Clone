"use client";
import { CategoryDialog } from "@/components/CategoryDialog";
import { DropDownConfig } from "@/components/DropDownConfig";
import { Text } from "@/components/Text";
import { TextInput } from "@/components/Text_input";
import {
  SentCategory,
  ImageItem,
  Option,
  AdDetails,
  DynamicData,
} from "@/interfaces";
import { categoryOptionsData } from "@/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const page = () => {
  const [sortedImages, setSortedImages] = useState<File[]>([]);
  // Function to handle sorted images passed from the child component
  const handleSortedImages = (images: ImageItem[]) => {
    const validImages = images.filter((img) => img.file !== null);
    setSortedImages(validImages.map((img) => img.file!)); // Only store valid files
    adsImageHandle();
  };

  const [location, setLocation] = useState<Option | null>(null);
  const [category, setCategory] = useState<SentCategory | null>(null);
  const [data, setData] = useState<AdDetails | null>(null);
  const [error, setError] = useState<AdDetails | null>(null);
  const [dynamicData, setDynamicData] = useState<DynamicData | null>(null);

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
  }, [sortedImages]);

  useEffect(() => {
    setDynamicData(null);
  }, [category]);

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
  // console.log("data", data);
  console.log("dynamicData", dynamicData);

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
                  error?.mainCategory && "text-error"
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
                  <Text
                    className="mt-1"
                    error={error.mainCategory ? true : false}
                    text={error.mainCategory}
                  />
                )}
              </div>
            </div>

            {/* second Section */}

            {/* <div className="flex flex-col sm:flex-row gap-2 items-center border-b-2 border-border p-2 sm:p-5  text-xs sm:text-sm">
              <h1
                className={`w-full sm:w-1/4 font-bold ${
                  error?.image && "text-error"
                }`}
              >
                Upload Images
              </h1>
              <div className="w-full sm:w-3/4 flex flex-col gap-2">
                <ImageUploader onSortedImages={handleSortedImages} />
                {error?.image ? (
                  <Text
                    className="mt-1"
                    Text={"Please provide an image"}
                  />
                ) : (
                  <h1 className="text-[11px] leading-3 sm:text-xs text-muted-foreground">
                    For the cover picture we recommend using the landscape mode.
                  </h1>
                )}
              </div>
            </div> */}

            {/* third Section */}

            {categoryOptionsData.map(({ subCategory, groups }, i) => {
              if (subCategory !== category?.sub) {
                return null;
              }
              return (
                <div
                  key={i}
                  className="flex flex-col border-b-2 border-border p-2 sm:p-5 text-xs sm:text-sm"
                >
                  {groups.map(
                    (
                      {
                        label,
                        values,
                        nestedGroup,
                        helpingText,
                        inputType,
                        maxLength,
                      },
                      i
                    ) => {
                      return (
                        <div key={i}>
                          <div className="flex flex-col sm:flex-row max-sm:gap-2 items-center py-3">
                            <h1 className="w-full sm:w-1/4 font-bold capitalize">
                              {label}*
                            </h1>
                            <div className="w-full sm:w-3/4">
                              <div>
                                <DropDownConfig
                                  placeholder={label}
                                  maxLength={maxLength}
                                  selectValue={
                                    dynamicData
                                      ? dynamicData[label]?.label ||
                                        dynamicData[label]
                                      : ""
                                  }
                                  cut_handle={() =>
                                    setDynamicData({
                                      ...dynamicData,
                                      [label]: "",
                                    })
                                  }
                                  onChange={(e) => {
                                    const { value } = e.target;
                                    if (value.length == 0)
                                      setDynamicData({
                                        ...dynamicData,
                                        [label]: "",
                                      });
                                    for (let i = 0; i < value.length; i++)
                                      if (
                                        inputType == "number" &&
                                        !Number.isNaN(
                                          Number(value.split("")[i])
                                        )
                                      )
                                        setDynamicData({
                                          ...dynamicData,
                                          [label]: value
                                            .slice(0)
                                            .split(" ")
                                            .join(""),
                                        });
                                      else if (inputType == "Text")
                                        setDynamicData({
                                          ...dynamicData,
                                          [label]: e.target.value,
                                        });
                                      else
                                        setDynamicData({
                                          ...dynamicData,
                                        });
                                  }}
                                  dropdownData={values}
                                  selectHandle={(selectOption) => {
                                    const prev =
                                      i === 0 ? {} : { ...dynamicData };
                                    setDynamicData({
                                      ...prev,
                                      [label]: selectOption,
                                    });
                                  }}
                                />
                                {helpingText && (
                                  <Text className="mt-1" text={helpingText} />
                                )}
                              </div>
                            </div>
                          </div>

                          {nestedGroup?.conditionalOptions?.map(
                            (
                              {
                                values,
                                condition,
                                helpingText,
                                inputType,
                                maxLength,
                              },
                              i
                            ) => {
                              if (
                                !dynamicData ||
                                !Object.values(dynamicData).find(
                                  (savedData) => savedData?.value === condition
                                )
                              ) {
                                return null;
                              }
                              return (
                                <div
                                  key={i}
                                  className="flex flex-col sm:flex-row max-sm:gap-2 items-center py-3"
                                >
                                  <h1 className="w-full sm:w-1/4 font-bold capitalize">
                                    {nestedGroup.title}*
                                  </h1>
                                  <div className="w-full sm:w-3/4">
                                    <div>
                                      <DropDownConfig
                                        placeholder={nestedGroup.title}
                                        selectValue={
                                          dynamicData[nestedGroup.title]
                                            ?.label ||
                                          dynamicData[nestedGroup.title] ||
                                          ""
                                        }
                                        maxLength={maxLength}
                                        id={nestedGroup.title}
                                        cut_handle={() =>
                                          setDynamicData({
                                            ...dynamicData,
                                            [nestedGroup.title]: "",
                                          })
                                        }
                                        onChange={(e) => {
                                          const { value } = e.target;
                                          if (value.length == 0)
                                            setDynamicData({
                                              ...dynamicData,

                                              [nestedGroup.title]: "",
                                            });
                                          for (let i = 0; i < value.length; i++)
                                            if (
                                              inputType == "number" &&
                                              !Number.isNaN(
                                                Number(value.split("")[i])
                                              )
                                            )
                                              setDynamicData({
                                                ...dynamicData,
                                                [nestedGroup.title]: value
                                                  .slice(0)
                                                  .split(" ")
                                                  .join(""),
                                              });
                                            else if (inputType == "Text")
                                              setDynamicData({
                                                ...dynamicData,
                                                [nestedGroup.title]:
                                                  e.target.value,
                                              });
                                            else
                                              setDynamicData({
                                                ...dynamicData,
                                              });
                                        }}
                                        dropdownData={values}
                                        selectHandle={(selectOption) => {
                                          setDynamicData({
                                            ...dynamicData,
                                            [nestedGroup.title]: selectOption,
                                          });
                                        }}
                                      />

                                      {helpingText && (
                                        <Text
                                          className="mt-1"
                                          text={helpingText}
                                        />
                                      )}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      );
                    }
                  )}
                </div>
              );
            })}

            {/* fourth Section */}
            {/* <div className="flex flex-col p-2 sm:p-5 text-xs sm:text-sm">
              <div className="flex flex-col sm:flex-row max-sm:gap-2 items-center py-3">
                <h1
                  className={`w-full sm:w-1/4 font-bold ${
                    error?.adTitle && "text-error"
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
                        <Text Text={error.adTitle} />
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
                    error?.description && "text-error"
                  }`}
                >
                  Description*
                </h1>
                <div className="w-full sm:w-3/4 flex flex-col gap-0.5">
                  <textarea
                    id="description"
                    className={`border border-foreground rounded-md ${
                      error?.description && "border-error text-error"
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
                        <Text Text={error.description} />
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

              <div className="flex  flex-col sm:flex-row max-sm:gap-2 items-center py-3">
                <h1
                  className={`w-full sm:w-1/4 font-bold ${
                    error?.location && "text-error"
                  }`}
                >
                  Location*
                </h1>
                <div className="w-full text-sm sm:w-3/4">
                  <div>
                    <LocationSelectConfig
                      options={location_of_pakistan.slice(1)}
                      placeholder={"Select Location"}
                      onSelect={setLocation}
                      isDefaultSelect={false}
                      error={error?.location ? true : false}
                    />
                    {error?.location && (
                      <Text className="mt-1" Text={error.location} />
                    )}
                  </div>
                </div>
              </div>
            </div> */}
          </div>

          {/* fifth Section */}

          <div className="border-2 border-border rounded-xl m-2">
            <div className="flex flex-col sm:flex-row gap-2 items-center p-2 sm:p-5 text-xs sm:text-sm">
              <h1
                className={`w-full sm:w-1/4 font-bold ${
                  error?.price && "text-error"
                }`}
              >
                Price*
              </h1>
              <div className="w-full sm:w-3/4">
                <div className="flex">
                  <div
                    className={`border border-foreground rounded-l-md  ${
                      error?.price && "border-error text-error"
                    } text-base px-2 flex items-center`}
                  >
                    <h1>Rs</h1>
                  </div>
                  <TextInput
                    error={error?.price ? true : false}
                    cut_handle={() => setDataHandle({ price: "" })}
                    className="rounded-l-none"
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
                  <Text
                    className="mt-1"
                    error={error?.price ? true : false}
                    text={error.price}
                  />
                )}
              </div>
            </div>
          </div>

          {/* sixth Section */}

          {/* <div className="border-2 border-border rounded-xl m-2">
            <div className="flex flex-col border-b-2 border-border p-2 sm:p-5 text-xs sm:text-sm">
              <div className="flex flex-col sm:flex-row max-sm:gap-2 items-center py-3">
                <h1
                  className={`w-full sm:w-1/4 font-bold ${
                    error?.name && "text-error"
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
                    <Text className="mt-1" Text={error.name} />
                  )}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row max-sm:gap-2 items-center py-3">
                <h1
                  className={`w-full sm:w-1/4 font-bold ${
                    error?.phoneNumber && "text-error"
                  }`}
                >
                  Phone Number*
                </h1>
                <div className="w-full sm:w-3/4">
                  <div className="flex">
                    <div
                      className={`border border-foreground rounded-l-md ${
                        error?.phoneNumber && "border-error text-error"
                      } text-base px-2 flex items-center`}
                    >
                      <h1>+92</h1>
                    </div>
                    <TextInput
                      error={error?.phoneNumber ? true : false}
                      cut_handle={() => setDataHandle({ phoneNumber: "" })}
                      className="rounded-l-none"
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
                    <Text className="mt-1" Text={error.phoneNumber} />
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
          </div> */}
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
