import React from "react";
import PrimaryButton from "../button/PrimaryButton";
import Image from "next/image";
import heroImage from "../../static/hero.avif";
import SignUpGoogle from "../button/SignUpGoogle";

const Hero = () => {
  return (

      <div className="flex flex-1 gap-6 justify-between align-center p-5 ">
        <div className="p-5">
          <h2 className="font-bold text-3xl py-4">The automation layer for agentic AI</h2>
          <h4 className="py-4">
            One MCP connection. 8,000+ apps. Set your policies and work <br/>across
            any model, surface, or agent harness — without <br/>connections or rules
            breaking.
          </h4>
          <div>
            <PrimaryButton text="Start free with email" size="big"/>
            <SignUpGoogle text="Sign Up with Google"/>
          </div>
        </div>
       <Image src={heroImage} alt="Hero" width={500} height={450} />
      </div>

  );
};

export default Hero;
