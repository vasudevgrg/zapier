import React from "react";
import Appbar from "../Appbar/Appbar";

const Input = ({ label }: {label: string}) => {
  return (
    <>
    
      <div className="flex flex-col m-2 ">
        <label className="font-bold">{label}</label>
        <input className="border h-[50px]" />
      </div>
    </>
  );
};

export default Input;
