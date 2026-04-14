import React from "react";
import { Option } from "./Option";
import LinkButton from "../button/LinkButton";
import PrimaryButton from "../button/PrimaryButton";

const Appbar = () => {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex">
        <Option text="Products" option={true}/>
        <Option text="Solutions" />
        <Option text="Resources" />
        <Option text="Enterprice" />
        <Option text="Pricing" />
      </div>

      <div>
        <LinkButton text="contact sales" onClick={() => {}} />
        <LinkButton text="Login" onClick={() => {}} />
        <PrimaryButton text="signup"/>
      </div>
    </div>
  );
};

export default Appbar;
