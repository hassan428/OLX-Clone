"use client";
import { CategoryDialog } from "@/components/CategoryDialog";
import { ImageUploader } from "@/components/ImageDragDrop";
import { InputAndDropdown } from "@/components/InputAndDropdown";
import { LocationSelectConfig } from "@/components/LocationSelectConfig";
import { Text } from "@/components/Text";
import { TextInput } from "@/components/Text_input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { SentCtg, ImageItem, AdDetails, DynamicData } from "@/interfaces";
import {
  formatPrice,
  isError,
  isNumber,
  location_of_pakistan,
  minPriceHandle,
  minYear,
  validatePhone,
  validateYear,
} from "@/utils";
import { ctgOptionsData } from "@/utils/ctgOptionsData";
import Image from "next/image";
import React, { useEffect, useState, useCallback, useMemo } from "react";

const PostPage = () => {
  const [sortedImages, setSortedImages] = useState<File[]>([]);
  const [ctg, setCtg] = useState<SentCtg | null>(null);
  const [data, setData] = useState<AdDetails | null>(null);
  const [error, setError] = useState<AdDetails | null>(null);
  const [dynamicData, setDynamicData] = useState<DynamicData | null>(null);
  const [dynamicError, setDynamicError] = useState<DynamicData | null>(null);
  const [priceInWords, setPriceInWords] = useState<string>("");
  const [minPrice, setMinPrice] = useState<number>(0);

  // Function to handle sorted images passed from the child component
  const handleSortedImages = (images: ImageItem[]) => {
    const validImages = images.filter((img) => img.file !== null);
    setSortedImages(validImages.map((img) => img.file!)); // Only store valid files
    adsImageHandle();
    setErrorHandle({
      image: validImages.length == 0 ? ["true"] : undefined,
    });
  };

  const dynamicDataKeys = useMemo(() => {
    return ["key1", "key2", "key3"]; // Replace with your actual dynamic keys
  }, []);

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

  const adsImageHandle = useCallback(() => {
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
  }, [sortedImages]);

  useEffect(() => {
    if (sortedImages.length > 0) {
      adsImageHandle();
    }
  }, [sortedImages, adsImageHandle]);

  useEffect(() => {
    // setDynamicData(null);
    setDynamicError(null);
    setErrorHandle({
      mainCtg: ctg?.main && undefined,
    });
    setDataHandle({
      mainCtg: ctg?.main,
      subCtg: ctg?.sub,
    });

    setMinPrice(minPriceHandle(ctg?.sub));

    dynamicDataKeys.map((value) =>
      setDynamicDataHandle({
        [value]: undefined,
      })
    );
  }, [ctg, dynamicDataKeys]); // dynamicDataKeys added to the dependency array

  const errorCheck = (value?: string): AdDetails => {
    return {
      location: !data?.location ? "Location is required!" : undefined,
      mainCtg: !ctg?.main ? "Please select a category to proceed." : undefined,
      image: sortedImages.length == 0 ? ["true"] : undefined,
      adTitle: !data?.adTitle
        ? "Ad Title is required!"
        : data.adTitle.length < 5
        ? "A minimum length of 5 characters is allowed."
        : undefined,
      description: !data?.description
        ? "Description is required!"
        : data.description.length < 10
        ? "Description should contain at least 10 alphanumeric characters."
        : undefined,

      price: !data?.price
        ? "Price is required!"
        : Number(data.price) < minPrice
        ? `The minimum allowed value is PKR ${minPrice}`
        : undefined,

      phoneNumber:
        !value && !data?.phoneNumber
          ? "Phone Number is required!"
          : !validatePhone(value || data?.phoneNumber)
          ? "Please enter a valid phone number"
          : undefined,
    };
  };

  const postNowHandle = () => {
    dynamicDataKeys.map((value) =>
      setDynamicErrorHandle({
        [value]:
          !dynamicData || !dynamicData[value]
            ? `${value} is required!`
            : undefined,
      })
    );

    setErrorHandle(errorCheck());

    if (
      isError({ ...data, ...dynamicData }) ||
      isError({ ...error, ...dynamicError }, true)
    ) {
      console.log("error hain");
    } else {
      console.log("error nahi hain");
      console.log("send data to bakend");
    }
    console.log("data", data);
    console.log("dynamicData", dynamicData);
    console.log("dynamicError", dynamicError);
    console.log("error", error);
  };

  // console.log("dynamicDataKeys", dynamicDataKeys);

  return (
    <>
      <h1 className="text-center font-bold text-xl">Post Your AD</h1>
      <div className="sm:flex gap-2 p-1 items-start w-full">
        <div className="flex flex-col gap-5 sm:w-3/4">
          <div className="border-2 border-border rounded-xl m-1 ">
            {/* select category Section */}
            <div className="flex flex-col sm:flex-row gap-2 items-center border-b-2 border-border p-2 sm:p-5 text-xs sm:text-sm">
              <h1
                className={`w-full sm:w-1/4 font-bold ${
                  error?.mainCtg && "text-error"
                }`}
              >
                Category
              </h1>
              <div className="w-full flex flex-col sm:w-3/4">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 ">
                    <Image
                      src={`/assets/images/${
                        ctg?.src ? `category/${ctg.src} ` : "load_avatar.png"
                      }`}
                      alt={"mobiles load_avatar.png"}
                      width={80}
                      height={80}
                      className="rounded-full w-14 h-14 sm:w-16 sm:h-16"
                      priority={true}
                    />
                    <div className="flex flex-col justify-evenly ">
                      <h1 className="font-bold">{`${ctg?.main || "Main"}`}</h1>
                      <h1 className="text-muted-foreground">{`${
                        ctg?.sub || "Sub"
                      }`}</h1>
                    </div>
                  </div>

                  <CategoryDialog sentCtgData={setCtg} />
                </div>
                {error?.mainCtg && (
                  <Text className="mt-1" error={true} text={error.mainCtg} />
                )}
              </div>
            </div>

            {/* select image Section */}

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
                  error={!!error?.image}
                  text={
                    error?.image
                      ? "Please provide an image"
                      : "For the cover picture we recommend using the landscape mode."
                  }
                />
              </div>
            </div>

            {/* dynamic option Section */}

            {ctgOptionsData.map(({ subCtg, groups }, i) => {
              if (subCtg !== ctg?.sub) {
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
                      dynamicDataKeys.push(label);
                      return (
                        <div key={i}>
                          <div className="flex flex-col sm:flex-row max-sm:gap-2 items-center py-3">
                            <h1
                              className={`w-full sm:w-1/4 font-bold capitalize ${
                                dynamicError?.[label] && "text-error"
                              }`}
                            >
                              {label}*
                            </h1>
                            <div className="w-full sm:w-3/4">
                              <div>
                                <InputAndDropdown
                                  error={!!(label && dynamicError?.[label])}
                                  placeholder={label}
                                  maxLength={maxLength}
                                  selectValue={
                                    dynamicData?.[label]?.label ||
                                    dynamicData?.[label]
                                  }
                                  onOpen={() =>
                                    setDynamicErrorHandle({
                                      [label]: undefined,
                                    })
                                  }
                                  cut_handle={() => {
                                    setDynamicErrorHandle({
                                      [label]: `${label} is required!`,
                                    });
                                    setDynamicDataHandle({
                                      [label]: "",
                                    });
                                  }}
                                  onBlur={() => {
                                    setDynamicErrorHandle({
                                      [label]: !dynamicData?.[label]
                                        ? `${label} is required!`
                                        : label === "Year" &&
                                          !validateYear(dynamicData?.[label])
                                        ? `Please enter a valid year between ${minYear} and ${new Date().getFullYear()}.`
                                        : undefined,
                                    });
                                  }}
                                  onChange={(e) => {
                                    const { value } = e.target;

                                    if (
                                      (inputType == "number" &&
                                        isNumber(value)) ||
                                      inputType == "Text"
                                    ) {
                                      setDynamicErrorHandle({
                                        [label]: !value
                                          ? `${label} is required!`
                                          : label === "Year" &&
                                            value.length == 4 &&
                                            !validateYear(value)
                                          ? `Please enter a valid year between ${minYear} and ${new Date().getFullYear()}.`
                                          : undefined,
                                      });
                                      setDynamicDataHandle({
                                        [label]: value,
                                      });
                                    }
                                  }}
                                  dropdownData={values}
                                  selectHandle={(selectOption) => {
                                    let prev = { ...dynamicData };

                                    i === 0 &&
                                      dynamicDataKeys.map((value) => {
                                        prev[value] = undefined;
                                      });

                                    setDynamicData({
                                      ...prev,
                                      [label]: selectOption,
                                    });
                                    setDynamicErrorHandle({
                                      [label]: undefined,
                                    });
                                  }}
                                />
                                {dynamicError?.[label] ? (
                                  <Text
                                    className="mt-1"
                                    error
                                    text={dynamicError[label]}
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

                              const key = label || nestedGroup.title;
                              dynamicDataKeys.push(key);

                              return (
                                <div
                                  key={i}
                                  className="flex flex-col sm:flex-row max-sm:gap-2 items-center py-3"
                                >
                                  <h1
                                    className={`w-full sm:w-1/4 font-bold capitalize ${
                                      dynamicError?.[key] && "text-error"
                                    }`}
                                  >
                                    {key}*
                                  </h1>
                                  <div className="w-full sm:w-3/4">
                                    <div>
                                      <InputAndDropdown
                                        error={!!(key && dynamicError?.[key])}
                                        placeholder={key}
                                        selectValue={
                                          dynamicData[key]?.label ||
                                          dynamicData[key]
                                        }
                                        maxLength={maxLength}
                                        id={key}
                                        onOpen={() =>
                                          setDynamicErrorHandle({
                                            [key]: undefined,
                                          })
                                        }
                                        cut_handle={() => {
                                          setDynamicErrorHandle({
                                            [key]: `${key} is required!`,
                                          });
                                          setDynamicDataHandle({
                                            [key]: "",
                                          });
                                        }}
                                        onBlur={() => {
                                          setDynamicErrorHandle({
                                            [key]: !dynamicData?.[key]
                                              ? `${key} is required!`
                                              : undefined,
                                          });
                                        }}
                                        onChange={(e) => {
                                          const { value } = e.target;
                                          if (
                                            (inputType == "number" &&
                                              isNumber(value)) ||
                                            inputType == "Text"
                                          ) {
                                            setDynamicErrorHandle({
                                              [key]: !value
                                                ? `${key} is required!`
                                                : undefined,
                                            });
                                            setDynamicDataHandle({
                                              [key]: value,
                                            });
                                          }
                                        }}
                                        dropdownData={values}
                                        selectHandle={(selectOption) => {
                                          setDynamicDataHandle({
                                            [key]: selectOption,
                                          });

                                          setDynamicErrorHandle({
                                            [key]: undefined,
                                          });
                                        }}
                                      />

                                      {dynamicError?.[key] ? (
                                        <Text
                                          className="mt-1"
                                          error
                                          text={dynamicError[key]}
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

            {/* title, desc & location Section */}

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
                    error={!!error?.adTitle}
                    cut_handle={() => {
                      setDataHandle({ adTitle: "" });
                      setErrorHandle({ adTitle: "Ad Title is required!" });
                    }}
                    inputProps={{
                      autoComplete: "title",
                      maxLength: 50,
                      id: "title",
                      value: data?.adTitle || "",
                      placeholder: "Enter Title",
                      onBlur: () =>
                        setErrorHandle({
                          adTitle: errorCheck().adTitle,
                        }),
                      onChange: (e) => {
                        setErrorHandle({
                          adTitle: !e.target.value
                            ? "Ad Title is required!"
                            : undefined,
                        });
                        setDataHandle({ adTitle: e.target.value });
                      },
                    }}
                  />
                  <div className="flex items-baseline justify-between mt-0.5 gap-2">
                    <div>
                      <Text
                        error={!!error?.adTitle}
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
                    className={`border rounded-md ${
                      error?.description
                        ? "border-error text-error"
                        : "border-foreground"
                    } resize-none outline-0 bg-background p-2 leading-5 text-sm w-full`}
                    rows={5}
                    placeholder="Describe the item you're selling"
                    maxLength={5000}
                    onBlur={() =>
                      setErrorHandle({
                        description: errorCheck().description,
                      })
                    }
                    onChange={(e) => {
                      setErrorHandle({
                        description: !e.target.value
                          ? "Description is required!"
                          : undefined,
                      });
                      setDataHandle({ description: e.target.value });
                    }}
                  />

                  <div className="flex items-baseline justify-between gap-2">
                    <div>
                      <Text
                        error={!!error?.description}
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
                      onSelect={(location) => {
                        setDataHandle({ location });
                        setErrorHandle({ location: undefined });
                      }}
                      onBlurOrClose={() =>
                        setErrorHandle({ location: errorCheck().location })
                      }
                      onOpen={() => setErrorHandle({ location: undefined })}
                      isDefaultSelect={false}
                      error={!!error?.location}
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

          {/* price Section */}

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
                    className={`border rounded-l-md  ${
                      error?.price
                        ? "border-error text-error"
                        : "border-foreground"
                    } text-base px-2 flex items-center`}
                  >
                    <h1>Rs</h1>
                  </div>
                  <TextInput
                    error={!!error?.price}
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
                      onBlur: () =>
                        setErrorHandle({
                          price: errorCheck().price,
                        }),
                      onChange: (e) => {
                        const { value } = e.target;
                        if (isNumber(value)) {
                          setPriceInWords(formatPrice(Number(value)));
                          setErrorHandle({
                            price: !value ? "Price is required!" : undefined,
                          });
                          setDataHandle({
                            price: value,
                          });
                        }
                      },
                    }}
                  />
                </div>
                {(error?.price || priceInWords) && (
                  <Text
                    className="mt-1"
                    error={!!error?.price}
                    text={error?.price || `PKR ${priceInWords}`}
                  />
                )}
              </div>
            </div>
          </div>

          {/* price Section*/}

          <div className="border-2 border-border rounded-xl m-2">
            <div className="flex flex-col border-b-2 border-border p-2 sm:p-5 text-xs sm:text-sm">
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
                      className={`border rounded-l-md ${
                        error?.phoneNumber
                          ? "border-error text-error"
                          : "border-foreground"
                      } text-base px-2 flex items-center`}
                    >
                      <h1>+92</h1>
                    </div>
                    <TextInput
                      error={!!error?.phoneNumber}
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
                        onBlur: () =>
                          setErrorHandle({
                            phoneNumber: errorCheck().phoneNumber,
                          }),
                        onChange: (e) => {
                          const { value } = e.target;
                          if (isNumber(value)) {
                            setErrorHandle({
                              phoneNumber: !value
                                ? "Phone Number is required!"
                                : value.length == 10
                                ? errorCheck(value).phoneNumber
                                : undefined,
                            });
                            setDataHandle({
                              phoneNumber: value,
                            });
                          }
                        },
                      }}
                    />
                  </div>
                  {error?.phoneNumber && (
                    <Text className="mt-1" error text={error.phoneNumber} />
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

export default PostPage;
