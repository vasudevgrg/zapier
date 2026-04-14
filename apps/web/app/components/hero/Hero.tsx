import React from "react";
import PrimaryButton from "../button/PrimaryButton";

const Hero = () => {
  return (
    <>
      <div>
        <div>
          <h2>The automation layer for agentic AI</h2>
          <h4>
            One MCP connection. 8,000+ apps. Set your policies and work across
            any model, surface, or agent harness — without connections or rules
            breaking.
          </h4>
          <div>
            <PrimaryButton text="Start free with email" />
            <button className="font-bold border">Start free with Google</button>
          </div>
        </div>
        <img src= '../static/hero.avif'/>
      </div>
    </>
  );
};

export default Hero;
