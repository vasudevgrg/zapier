import { Check } from "lucide-react";
import SignUpGoogle from "../components/button/SignUpGoogle";

export default function SignUp() {
  return (
    <div className="flex justify-between px-70">
      <div className="p-20">
        <h1 className="text-3xl p-5 font-bold">
          AI Automation starts
          <br /> and scales with Zapier
        </h1>
        <h4 className="text-base">
          Orchestrate AI across your teams, tools, and processes. Turn ideas{" "}
          <br />
          into automated action today, and power tomorrow’s business
          <br /> growth.
        </h4>
        <div>
          <Check />
          <p>Integrate 8,000+ apps and 300+ AI tools without code</p>
        </div>
        <div>
          <Check />
          <p>Build AI-powered workflows in minutes, not weeks</p>
        </div>
        <div>
          <Check />
          <p>14-day trial of all premium features and apps</p>
        </div>
      </div>
      <div className="border">
        <SignUpGoogle text="Sign Up with Google"/>

        <label>
            Work email*
        </label>
        <input className="border"/>
                <label>
            First Name*
        </label>
        <input/>
                <label>
            Last Name*
        </label>
        <input/>

        <div>
            By signing up, you agree to Zapier's terms of service and privacy policy.
        </div>
      </div>
    </div>
  );
}
