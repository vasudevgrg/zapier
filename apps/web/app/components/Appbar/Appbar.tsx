import React from "react";
import { Option } from "./Option";
import LinkButton from "../button/LinkButton";
import PrimaryButton from "../button/PrimaryButton";

const Appbar = ({ page = 'home' }: { page?: string}) => {
  return (
    <div className="flex flex-row justify-between bg-grey-600 sticky m-auto w-10/11 ">
      <div className="flex items-center justify-center">
        <div className="text-2xl font-bold ">Zapier</div>
       {page=='home' && <div className="flex">
          <Option text="Products" option={true} />
          <Option text="Solutions" />
          <Option text="Resources" />
          <Option text="Enterprice" />
          <Option text="Pricing" />
        </div>}
      </div>

      <div>
        <LinkButton text="contact sales" onClick={() => {}} />
        <LinkButton text="Login" onClick={() => {}} />
        <PrimaryButton text="signup" />
      </div>
    </div>
  );
};

export default Appbar;
