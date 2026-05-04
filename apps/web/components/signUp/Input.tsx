import React from "react";
import Appbar from "../Appbar/Appbar";

const Input = ({ label, onChange }: {label: string, onChange?: (e)=> void}) => {
  return (
    <>
    
      <div className="flex flex-col m-2 ">
        <label className="font-bold">{label}</label>
        <input className="border h-[50px]" onChange={onChange} />
      </div>
    </>
  );
};

export default Input;
