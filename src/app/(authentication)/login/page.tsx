"use client";
import React, { useState } from "react";
import { InputField } from "@/components/InputField";
import { useRouter } from "next/navigation";
import styles from "@/modulerCSS/styles.module.css";
import { InputValue } from "@/interfaces";
const { text_color } = styles;

const page = () => {
  const [data, set_data] = React.useState({});
  const navigate = useRouter();

  const inputValue = ({ target }: InputValue) => {
    set_data({ ...data, [target.id]: target.value });
  };

  const submitHandle = (e: any) => {
    e.preventDefault();
    console.log("data", data);
    navigate.push("/");
  };

  return (
    <form
      onSubmit={submitHandle}
      className={`flex flex-col items-center gap-5 ${text_color}`}
    >
      <h1 style={{ fontSize: 50 }}>login Page</h1>
      <InputField
        placeholder="Username"
        type="text"
        id="username"
        onChange={inputValue}
      />

      <InputField
        placeholder="Password"
        type="password"
        id="password"
        onChange={inputValue}
      />

      <button
        className={`border border-black px-2 rounded hover:bg-pink-200 `}
        type="submit"
      >
        login
      </button>
    </form>
  );
};

export default page;
