'use client'

import { Check } from "lucide-react";
import SignUpGoogle from "../components/button/SignUpGoogle";
import Input from "../components/signUp/Input";
import PrimaryButton from "../components/button/PrimaryButton";
import Appbar from "../components/Appbar/Appbar";
import axios from "axios";
import { useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  async function signUpUser(email, password) {
    await axios.post('http://localhost:8081/user/signup', {
      email, password
    })
  }

  return (
    <>
      <Appbar page="signup" />

      <div className="flex w-3/4  m-auto h-[50vh] justify-center">
        <div className=" w-3/5 flex flex-col items-start justify-center">
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
          <div className="flex">
            <Check className="text-red" />
            <p>Integrate 8,000+ apps and 300+ AI tools without code</p>
          </div>
          <div className="flex">
            <Check />
            <p>Build AI-powered workflows in minutes, not weeks</p>
          </div>
          <div className="flex">
            <Check />
            <p>14-day trial of all premium features and apps</p>
          </div>
        </div>
        <div className="border w-2/5 p-8 justify-center items-center">
          <SignUpGoogle text="Sign Up with Google" />
          <div className="flex justify-center items-center">
            <hr className="flex-1 h-[2px] bg-gray-400 border-none" />

            <p>OR</p>
            <hr className="flex-1 h-[2px] bg-gray-400 border-none" />
          </div>

          <Input label=" Work email*" />
          <div className="flex">
            <Input label="First Name*" onChange={e=> } />
            <Input label="Last Name*" />
          </div>

          <div className="p-2">
            By signing up, you agree to Zapier's <u>terms of service</u> and{" "}
            <u> privacy policy.</u>
          </div>
          <PrimaryButton text="SignUp for free " size="big" onClick={()=> signUpUser(email, password)} />
        </div>
      </div>
    </>
  );
}
