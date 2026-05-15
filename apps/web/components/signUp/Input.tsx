import React from "react";

const Input = ({
  label,
  onChange,
  type = "text",
}: {
  label: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}) => {
  return (
    <>
      <div className="flex flex-col m-2 ">
        <label className="font-bold">{label}</label>
        <input className="border h-[50px]" type={type} onChange={onChange} />
      </div>
    </>
  );
};

export default Input;
