"use client";
import { Alert } from "@/components/Alert";
import { DatePicker } from "@/components/DatePicker";
import { DropDownConfig } from "@/components/DropDownConfig";
import { Text } from "@/components/Text";
import { TextInput } from "@/components/Text_input";
import { Button } from "@/components/ui/button";
import { Option, UserDetails } from "@/interfaces";
import { validateEmail } from "@/utils";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import { HiLightBulb } from "react-icons/hi";
import { IoCameraReverseOutline, IoCloseOutline } from "react-icons/io5";

const page = () => {
  const defaultAvatarUrl = "/assets/images/load_avatar.png";

  const nameInput = (id: string) => (
    <>
      <TextInput
        error={error?.name ? true : false}
        cut_handle={() => setDataHandle({ name: "" })}
        inputProps={{
          autoComplete: "name",
          id,
          value: data?.name || "",
          placeholder: "Enter Name",
          onChange: (e) => setDataHandle({ name: e.target.value }),
        }}
      />
      {error?.name && (
        <Text error={error?.name ? true : false} text={error.name} />
      )}
    </>
  );

  const [data, setData] = useState<UserDetails | null>(null);
  const [error, setError] = useState<UserDetails | null>(null);
  const [gender, setGender] = useState<Option | null>(null);
  const [avatarUrl, setAvatarUrl] = useState<any>(defaultAvatarUrl);

  const setDataHandle = (newData: UserDetails) => {
    setData({ ...data, ...newData });
  };

  const imageAvatarHandle = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { files } = target;
    const url = files && files[0];
    if (url) {
      const reader = new FileReader();
      reader.onload = ({ target }: ProgressEvent<FileReader>) => {
        setAvatarUrl(target?.result);
      };
      reader.readAsDataURL(url);
    }
  };

  const connectFacebook = () => {
    console.log("connectFacebook");
  };

  const connectGoogle = () => {
    console.log("connectGoogle");
  };

  const discardHandle = () => {
    console.log("discardHandle");
  };

  const saveChangesHandle = () => {
    setError(null);

    setDataHandle({
      avatarUrl: avatarUrl != defaultAvatarUrl ? avatarUrl : undefined,
      gender: gender?.value,
    });

    // const phoneNumber = `+92${data?.phoneNumber}`; // update phone number on send data to backend

    setError({
      name: !data?.name ? "Name is required!" : undefined,
      email: !data?.email
        ? "Email is required!"
        : !validateEmail(data.email)
        ? "Please enter a valid email address"
        : undefined,
      phoneNumber: !data?.phoneNumber
        ? "PhoneNumber is required!"
        : data.phoneNumber.length !== 10
        ? "Please enter a valid PhoneNumber"
        : undefined,
    });
  };

  const deleteAccount = () => {
    console.log("deleteAccount");
  };
  const seeMore = () => {
    console.log("seeMore");
  };

  console.log("data", data);

  const genderData: Option[] = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Others", value: "others" },
  ];

  return (
    <div className="m-3 sm:mx-20 flex flex-col gap-10">
      <div className="sm:p-5 flex flex-col gap-5 sm:border border-border">
        <div className="flex flex-col gap-2 sm:pb-5 sm:border-b border-muted-foreground">
          <h1 className="hidden sm:inline text-sm font-bold">Profile Photo</h1>
          <h1 className="inline sm:hidden text-lg font-bold">
            Basic Information
          </h1>
          <div className="flex justify-start gap-5 items-center">
            <input
              type="file"
              id="avatar"
              accept="image/*"
              className="hidden"
              onChange={imageAvatarHandle}
            />
            <div className="relative">
              {avatarUrl != defaultAvatarUrl && (
                <div
                  className="bg-foreground cursor-pointer absolute p-1 rounded-full right-0 top-0 text-background"
                  onClick={() => setAvatarUrl(defaultAvatarUrl)}
                >
                  <IoCloseOutline />
                </div>
              )}
              <Image
                src={avatarUrl}
                alt="Avatar"
                width={75}
                height={75}
                priority={true}
                className="rounded-full object-cover min-w-20 h-20"
              />
              {avatarUrl == defaultAvatarUrl && (
                <label
                  htmlFor="avatar"
                  className="bg-foreground flex sm:hidden absolute p-1 rounded-full right-0 bottom-0 text-background"
                >
                  <IoCameraReverseOutline />
                </label>
              )}
            </div>
            <div className="hidden sm:flex flex-col gap-1">
              <Button className="font-bold py-2 px-5">
                <label htmlFor="avatar">Upload Photo</label>
              </Button>
              <h1 className="text-xs">JPG, JPEG, PNG </h1>
            </div>
            <div className="flex sm:hidden flex-col w-full">
              <h1 className="text-sm font-bold">Name</h1>
              {nameInput("name")} {/* input id   */}
            </div>
          </div>
        </div>

        <div className="sm:flex w-full gap-2 items-start sm:border-b border-muted-foreground">
          <div className="flex w-full flex-col gap-5 sm:pb-5">
            <div className="hidden sm:flex flex-col gap-2">
              <h1
                className={`text-sm font-bold ${error?.name && "text-error"}`}
              >
                Name
              </h1>
              <div>
                {nameInput("Name")} {/* input id   */}
              </div>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <h1 className="text-sm font-bold">Date of Birth</h1>
              <div>
                <DatePicker
                  sendDate={(birthDate) => setDataHandle({ birthDate })}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <h1 className="text-sm font-bold">Gender</h1>
              <div>
                <DropDownConfig
                  placeholder={"Select your gender"}
                  selectValue={gender?.label || ""}
                  dropdownData={genderData}
                  selectHandle={setGender}
                  error={error?.gender ? true : false}
                />
                {error?.gender && (
                  <Text
                    className="mt-1"
                    error={error.gender ? true : false}
                    text={error.gender}
                  />
                )}
              </div>
            </div>

            <div className="flex flex-col gap-1 w-full">
              <textarea
                id="aboutMe"
                className={`border border-foreground ${
                  error?.aboutMe && "border-error text-error"
                } resize-none outline-0 bg-background p-2 leading-5 text-sm`}
                rows={5}
                placeholder="About me (Optional)"
                maxLength={200}
                onChange={(e) => setDataHandle({ aboutMe: e.target.value })}
              />
              <div className="flex items-center justify-end">
                <Text text={`${data?.aboutMe?.length || "0"} / 200`} />
              </div>
            </div>
          </div>

          <div className="w-full hidden sm:flex text-xs">
            <div className="flex flex-col gap-1 w-3/4 p-2 border border-muted-foreground">
              <div className="flex items-center gap-1">
                <HiLightBulb size={20} color="yellow" />
                <strong>Why is it important?</strong>
              </div>
              <h1 className="text-muted-foreground">
                LOX is built on trust. Help other people get to know you. Tell
                them about the things you like. Share your favorite brands,
                books, movies, shows, music, food. And you will see the results.
              </h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 sm:pb-5 sm:border-b border-muted-foreground">
          <div className="flex flex-col gap-3">
            <h1
              className={`text-sm font-bold ${
                error?.phoneNumber || (error?.email && "text-error")
              }`}
            >
              Contact
            </h1>

            <div className="sm:flex items-center gap-2">
              <div className="w-full">
                <div className="flex">
                  <div
                    className={`border border-foreground rounded-l-md ${
                      error?.phoneNumber && "border-error text-error"
                    } text-base px-2 flex items-center`}
                  >
                    <h1 className="">+92</h1>
                  </div>
                  <TextInput
                    error={error?.phoneNumber ? true : false}
                    cut_handle={() => setDataHandle({ phoneNumber: "" })}
                    className="rounded-l-none"
                    inputProps={{
                      id: "phoneNumber",
                      value: data?.phoneNumber || "",
                      placeholder: "Phone Number",
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
                  <Text
                    className="mt-1"
                    error={error.phoneNumber ? true : false}
                    text={error.phoneNumber}
                  />
                )}
              </div>
              <h1 className="hidden sm:inline w-full text-xs text-muted-foreground">
                This is the number for buyers contacts, reminders, and other
                notifications.
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-full">
              <TextInput
                error={error?.email ? true : false}
                cut_handle={() => setDataHandle({ email: "" })}
                inputProps={{
                  autoComplete: "email",
                  id: "email",
                  value: data?.email || "",
                  placeholder: "Email",
                  onChange: (e) =>
                    setDataHandle({
                      email: e.target.value.split(" ").join(""),
                    }),
                }}
              />
              {error?.email && (
                <Text
                  className="mt-1"
                  error={error?.email ? true : false}
                  text={error.email}
                />
              )}
            </div>
            <h1 className="hidden sm:inline w-full text-xs text-muted-foreground">
              We won't reveal your email to anyone else not use it to send you
              spam
            </h1>
          </div>
        </div>

        <div className="flex flex-col gap-5 sm:pb-5 sm:border-b border-muted-foreground">
          <div className="flex flex-col gap-3">
            <h1 className="text-sm font-bold">Optional Information</h1>
            <div className="flex items-center gap-2">
              <div className="flex flex-col items-start w-full text-sm gap-1">
                <h1 className="font-bold">Facebook</h1>
                <h6 className="text-muted-foreground text-xs">
                  Sign in with Facebook and discover your trusted connections to
                  buyers.
                </h6>
              </div>
              <div className="sm:w-full">
                <Button
                  className="border border-foreground sm:w-1/2"
                  variant={"outline"}
                  onClick={connectFacebook}
                >
                  Connect
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex flex-col items-start w-full text-sm gap-1">
                <h1 className="font-bold">Google</h1>
                <h6 className="text-muted-foreground text-xs">
                  Connect your OLX account to your Google account for simplicity
                  and ease.
                </h6>
              </div>
              <div className="sm:w-full">
                <Button
                  className="border border-foreground sm:w-1/2"
                  variant={"outline"}
                  onClick={connectGoogle}
                >
                  Connect
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:flex w-full justify-between items-center max-sm:border-b border-muted-foreground max-sm:pb-5">
          <Button
            className="hidden sm:flex"
            variant={"outline"}
            onClick={discardHandle}
          >
            Discard
          </Button>
          <Button className="max-sm:w-full" onClick={saveChangesHandle}>
            Save Changes
          </Button>
        </div>
      </div>

      <div className="sm:p-5 flex flex-col gap-3 sm:border border-border">
        <h1 className="font-bold sm:border-b border-muted-foreground sm:pb-3">
          Delete this account
        </h1>
        <h1 className="sm:font-semibol max-sm:text-xs max-sm:text-muted-foreground">
          Are you sure you want to delete your account?
        </h1>

        <Alert
          trigger={
            <Button
              className="max-w-max border border-foreground"
              variant="outline"
            >
              Yes, delete my account
            </Button>
          }
          title="Are you absolutely sure?"
          description=" This action cannot be undone. This will permanently delete your
            account and remove your data from our servers."
          doneText="Delete"
          doneClickHandle={deleteAccount}
          cancelText="Cancel"
          canceClickHandle={() => console.log("cancel")}
        />

        <Button
          className="w-max p-0 text-xs"
          variant={"link"}
          onClick={seeMore}
        >
          See more info
        </Button>
      </div>
    </div>
  );
};

export default page;
