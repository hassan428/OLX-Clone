import React, { InputHTMLAttributes } from "react";

const InputField = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <input className="border border-black rounded p-2" {...props} />;
};

export { InputField };
