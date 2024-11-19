"use client";
import { CategoryDialog } from "@/components/CategoryDialog";
import { ImageUploader } from "@/components/ImageDragDrop";
import { InputAndDropdown } from "@/components/InputAndDropdown";
import { LocationSelectConfig } from "@/components/LocationSelectConfig";
import { Text } from "@/components/Text";
import { TextInput } from "@/components/Text_input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  SentCategory,
  ImageItem,
  Option,
  AdDetails,
  DynamicData,
} from "@/interfaces";
import { categoryOptionsData, location_of_pakistan } from "@/utils";
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

  const dynamicDataKeys: string[] = [];

  const [location, setLocation] = useState<Option | null>(null);
  const [category, setCategory] = useState<SentCategory | null>(null);
  const [data, setData] = useState<AdDetails | null>(null);
  const [error, setError] = useState<AdDetails | null>(null);
  const [dynamicData, setDynamicData] = useState<DynamicData | null>(null);
  const [dynamicError, setDynamicError] = useState<DynamicData | null>(null);

  const setDataHandle = (newData: AdDetails) => {
    setData((pre) => {
      return { ...pre, ...newData };
    });
  };

  const setErrorHandle = (newError: AdDetails) => {
    setError((pre) => {
      return { ...pre, ...newError };
    });
  };

  const setDynamicDataHandle = (newData: DynamicData) => {
    setDynamicData((pre) => {
      return { ...pre, ...newData };
    });
  };

  const setDynamicErrorHandle = (newError: DynamicData) => {
    setDynamicError((pre) => {
      return { ...pre, ...newError };
    });
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
    dynamicDataKeys.map((value) => {
      if (!dynamicData || !dynamicData[value]) {
        setDynamicErrorHandle({ [value]: `${value} is required!` });
      } else setDynamicErrorHandle({ [value]: undefined });
    });

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
        : // console.log("data", data);
        data.adTitle.length < 5
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
        ? "Phone Number is required!"
        : data.phoneNumber.length !== 10
        ? "Please enter a valid phone number"
        : undefined,
    });
    if (error || dynamicError) {
      // if (
      //   (error &&
      //     Object.values(error).find((val) => val == "" || undefined || null)) ||
      //   (dynamicError &&
      //     Object.values(dynamicError).find(
      //       (val) => val == "" || undefined || null
      //     ))
      // )
      console.log("error hain");
    } else {
      console.log("error nahi hain");
    }
  };
  console.log("dynamicDataKeys", dynamicDataKeys);
  // console.log("data", data);
  console.log("dynamicData", dynamicData);
  console.log("dynamicError", dynamicError);
  console.log("error", error);

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

            <div className="flex flex-col sm:flex-row gap-2 items-center border-b-2 border-border p-2 sm:p-5  text-xs sm:text-sm">
              <h1
                className={`w-full sm:w-1/4 font-bold ${
                  error?.image && "text-error"
                }`}
              >
                Upload Images
              </h1>
              <div className="w-full sm:w-3/4 flex flex-col gap-2">
                <ImageUploader onSortedImages={handleSortedImages} />
                <Text
                  className="mt-1"
                  error={error?.image ? true : false}
                  text={
                    error?.image
                      ? "Please provide an image"
                      : "For the cover picture we recommend using the landscape mode."
                  }
                />
              </div>
            </div>

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
                        errorText,
                      },

                      i
                    ) => {
                      dynamicDataKeys.push(label);
                      return (
                        <div key={i}>
                          <div className="flex flex-col sm:flex-row max-sm:gap-2 items-center py-3">
                            <h1
                              className={`w-full sm:w-1/4 font-bold capitalize ${
                                dynamicError &&
                                dynamicError[label] &&
                                "text-error"
                              }`}
                            >
                              {label}*
                            </h1>
                            <div className="w-full sm:w-3/4">
                              <div>
                                <InputAndDropdown
                                  error={
                                    dynamicError && dynamicError[label]
                                      ? true
                                      : false
                                  }
                                  placeholder={label}
                                  maxLength={maxLength}
                                  selectValue={
                                    dynamicData
                                      ? dynamicData[label]?.label ||
                                        dynamicData[label]
                                      : ""
                                  }
                                  cut_handle={() => {
                                    setDynamicErrorHandle({
                                      [label]: `${label} is required!`,
                                    });
                                    setDynamicDataHandle({
                                      [label]: "",
                                    });
                                  }}
                                  onChange={(e) => {
                                    const { value } = e.target;
                                    if (value.length == 0) {
                                      setDynamicDataHandle({
                                        [label]: "",
                                      });
                                      setDynamicErrorHandle({
                                        [label]: `${label} is required!`,
                                      });
                                    }
                                    for (let i = 0; i < value.length; i++)
                                      if (
                                        inputType == "number" &&
                                        !Number.isNaN(
                                          Number(value.split("")[i])
                                        )
                                      ) {
                                        setDynamicDataHandle({
                                          [label]: value
                                            .slice(0)
                                            .split(" ")
                                            .join(""),
                                        });
                                        setDynamicErrorHandle({
                                          [label]: undefined,
                                        });
                                      } else if (inputType == "Text") {
                                        setDynamicDataHandle({
                                          [label]: e.target.value,
                                        });
                                        setDynamicErrorHandle({
                                          [label]: undefined,
                                        });
                                      } else {
                                        setDynamicDataHandle({});
                                      }
                                  }}
                                  dropdownData={values}
                                  selectHandle={(selectOption) => {
                                    const prev =
                                      i === 0 ? {} : { ...dynamicData };
                                    setDynamicData({
                                      ...prev,
                                      [label]: selectOption,
                                    });
                                    setDynamicErrorHandle({
                                      [label]: undefined,
                                    });
                                  }}
                                />
                                {dynamicError && dynamicError[label] ? (
                                  <Text
                                    className="mt-1"
                                    error={dynamicError[label]}
                                    text={errorText || dynamicError[label]}
                                  />
                                ) : (
                                  helpingText && (
                                    <Text className="mt-1" text={helpingText} />
                                  )
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
                                label,
                                errorText,
                              },
                              i
                            ) => {
                              if (
                                !dynamicData ||
                                !Object.values(dynamicData).find((savedData) =>
                                  condition.includes(savedData?.value)
                                )
                              ) {
                                return null;
                              }
                              dynamicDataKeys.push(label || nestedGroup.title);

                              return (
                                <div
                                  key={i}
                                  className="flex flex-col sm:flex-row max-sm:gap-2 items-center py-3"
                                >
                                  <h1
                                    className={`w-full sm:w-1/4 font-bold capitalize ${
                                      dynamicError &&
                                      dynamicError[
                                        label || nestedGroup.title
                                      ] &&
                                      "text-error"
                                    }`}
                                  >
                                    {label || nestedGroup.title}*
                                  </h1>
                                  <div className="w-full sm:w-3/4">
                                    <div>
                                      <InputAndDropdown
                                        error={
                                          dynamicError &&
                                          dynamicError[
                                            label || nestedGroup.title
                                          ]
                                            ? true
                                            : false
                                        }
                                        placeholder={label || nestedGroup.title}
                                        selectValue={
                                          dynamicData[
                                            label || nestedGroup.title
                                          ]?.label ||
                                          dynamicData[
                                            label || nestedGroup.title
                                          ] ||
                                          ""
                                        }
                                        maxLength={maxLength}
                                        id={label || nestedGroup.title}
                                        cut_handle={() => {
                                          setDynamicErrorHandle({
                                            [label || nestedGroup.title]: `${
                                              label || nestedGroup.title
                                            } is required!`,
                                          });
                                          setDynamicDataHandle({
                                            [label || nestedGroup.title]: "",
                                          });
                                        }}
                                        onChange={(e) => {
                                          const { value } = e.target;
                                          if (value.length == 0) {
                                            setDynamicErrorHandle({
                                              [label || nestedGroup.title]: `${
                                                label || nestedGroup.title
                                              } is required!`,
                                            });
                                            setDynamicDataHandle({
                                              [label || nestedGroup.title]: "",
                                            });
                                          }
                                          for (let i = 0; i < value.length; i++)
                                            if (
                                              inputType == "number" &&
                                              !Number.isNaN(
                                                Number(value.split("")[i])
                                              )
                                            ) {
                                              setDynamicDataHandle({
                                                [label || nestedGroup.title]:
                                                  value
                                                    .slice(0)
                                                    .split(" ")
                                                    .join(""),
                                              });
                                              setDynamicErrorHandle({
                                                [label || nestedGroup.title]:
                                                  undefined,
                                              });
                                            } else if (inputType == "Text") {
                                              setDynamicDataHandle({
                                                [label || nestedGroup.title]:
                                                  e.target.value,
                                              });
                                              setDynamicErrorHandle({
                                                [label || nestedGroup.title]:
                                                  undefined,
                                              });
                                            } else setDynamicDataHandle({});
                                        }}
                                        dropdownData={values}
                                        selectHandle={(selectOption) => {
                                          setDynamicDataHandle({
                                            [label || nestedGroup.title]:
                                              selectOption,
                                          });

                                          setDynamicErrorHandle({
                                            [label || nestedGroup.title]:
                                              undefined,
                                          });
                                        }}
                                      />

                                      {dynamicError &&
                                      dynamicError[
                                        label || nestedGroup.title
                                      ] ? (
                                        <Text
                                          className="mt-1"
                                          error={
                                            dynamicError[
                                              label || nestedGroup.title
                                            ]
                                          }
                                          text={
                                            errorText ||
                                            dynamicError[
                                              label || nestedGroup.title
                                            ]
                                          }
                                        />
                                      ) : (
                                        helpingText && (
                                          <Text
                                            className="mt-1"
                                            text={helpingText}
                                          />
                                        )
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

            <div className="flex flex-col p-2 sm:p-5 text-xs sm:text-sm">
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
                    cut_handle={() => {
                      setDataHandle({ adTitle: "" });
                      setErrorHandle({ adTitle: "Ad Title is requird!" });
                    }}
                    inputProps={{
                      autoComplete: "title",
                      maxLength: 50,
                      id: "title",
                      value: data?.adTitle || "",
                      placeholder: "Enter Title",
                      onChange: (e) => {
                        setErrorHandle({
                          adTitle: !e.target.value
                            ? "Ad Title is requird!"
                            : undefined,
                        });
                        setDataHandle({ adTitle: e.target.value });
                      },
                    }}
                  />
                  <div className="flex items-baseline justify-between mt-0.5 gap-2">
                    <div>
                      <Text
                        error={error?.adTitle ? true : false}
                        text={
                          error?.adTitle ||
                          "Mention the key features of your item (e.g. brand, model, age, type"
                        }
                      />
                    </div>

                    <div>
                      <Text
                        className="w-max"
                        text={`${data?.adTitle?.length || "0"} / 50`}
                      />
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
                    onChange={(e) => {
                      setErrorHandle({
                        description: !e.target.value
                          ? "Description is requird!"
                          : undefined,
                      });
                      setDataHandle({ description: e.target.value });
                    }}
                  />

                  <div className="flex items-baseline justify-between gap-2">
                    <div>
                      <Text
                        error={error?.description ? true : false}
                        text={
                          error?.description ||
                          "Include condition, features and reason for selling"
                        }
                      />
                    </div>
                    <div>
                      <Text
                        className="w-max"
                        text={`${data?.description?.length || "0"} / 5000`}
                      />
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
                      onSelect={(val) => {
                        setLocation(val);
                        setErrorHandle({ location: undefined });
                      }}
                      isDefaultSelect={false}
                      error={error?.location ? true : false}
                    />
                    {error?.location && (
                      <Text
                        className="mt-1"
                        error={true}
                        text={error.location}
                      />
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
                    cut_handle={() => {
                      setDataHandle({ price: "" });
                      setErrorHandle({ price: "Price is required!" });
                    }}
                    className="rounded-l-none"
                    inputProps={{
                      id: "price",
                      value: data?.price || "",
                      placeholder: "Enter Price",
                      maxLength: 10,
                      onChange: (e) => {
                        const { value } = e.target;
                        if (value.length == 0) {
                          setErrorHandle({ price: "Price is required!" });
                          setDataHandle({ price: "" });
                        }
                        for (let i = 0; i < value.length; i++)
                          if (!Number.isNaN(Number(value.split("")[i]))) {
                            setErrorHandle({ price: undefined });
                            setDataHandle({
                              price: value.slice(0).split(" ").join(""),
                            });
                          } else setDataHandle({});
                      },
                    }}
                  />
                </div>
                {error?.price && (
                  <Text className="mt-1" error={true} text={error.price} />
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
                    error?.name && "text-error"
                  }`}
                >
                  Name*
                </h1>
                <div className="w-full sm:w-3/4">
                  <TextInput
                    error={error?.name ? true : false}
                    cut_handle={() => {
                      setDataHandle({ name: "" });
                      setErrorHandle({ name: "Name is required!" });
                    }}
                    inputProps={{
                      autoComplete: "name",
                      maxLength: 50,
                      id: "name",
                      value: data?.name || "",
                      placeholder: "Enter Name",
                      onChange: (e) => {
                        setErrorHandle({
                          name: !e.target.value
                            ? "Name is requird!"
                            : undefined,
                        });
                        setDataHandle({ name: e.target.value });
                      },
                    }}
                  />
                  {error?.name && (
                    <Text className="mt-1" error={true} text={error.name} />
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
                      cut_handle={() => {
                        setDataHandle({ phoneNumber: "" });
                        setErrorHandle({
                          phoneNumber: "Phone Number is required!",
                        });
                      }}
                      className="rounded-l-none"
                      inputProps={{
                        id: "phoneNumber",
                        value: data?.phoneNumber || "",
                        placeholder: "Enter Phone Number",
                        maxLength: 10,
                        onChange: (e) => {
                          const { value } = e.target;
                          if (value.length == 0) {
                            setDataHandle({ phoneNumber: "" });
                            setErrorHandle({
                              phoneNumber: "Phone Number is required!",
                            });
                          }

                          for (let i = 0; i < value.length; i++)
                            if (!Number.isNaN(Number(value.split("")[i]))) {
                              setErrorHandle({ phoneNumber: undefined });
                              setDataHandle({
                                phoneNumber: value.slice(0).split(" ").join(""),
                              });
                            } else setDataHandle({});
                        },
                      }}
                    />
                  </div>
                  {error?.phoneNumber && (
                    <Text
                      className="mt-1"
                      error={true}
                      text={error.phoneNumber}
                    />
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
