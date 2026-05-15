'use client'
import React, { useState } from "react";
import SignUpGoogle from "../../../components/button/SignUpGoogle";
import Input from "../../../components/signUp/Input";
import PrimaryButton from "../../../components/button/PrimaryButton";
import { useRouter } from "next/navigation";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter()

  async function loginUser(email, password) {
    try {
      const res= await axios.post("http://localhost:8081/user/signup", {
        email,
        password,
        name: firstName + " " + lastName,
      });
      console.log('successful user created', res);
      router.push('/zaps')
    } catch (err) {
      console.log('err: ', err);
      console.log(err);
    }
  }
  return <>
  <div className="flex flex-row m-auto justify-center  gap-6">
    <div className="flex flex-col w-[3/5] bg-gray-400 p-5">
        <img src='https://res.cloudinary.com/zapier-media/image/upload/q_auto/f_auto/v1769615779/enterprise_illustration_izoxxo.png' className="w-[128px] h-[96px]"/>
        <h2 className="font-bold text-xl p-3">Automate across your teams</h2>
        <h3>
            Zapier Enterprise empowers everyone in your business to securely <br/>automate their work in minutes, not months—no coding required.
        </h3>
        <button>
            Explore Zapier Enterprise
        </button>
    </div>
    <div className=" border p-5">
         <SignUpGoogle text="Sign Up with Google" />
          <div className="flex justify-center items-center">
            <hr className="flex-1 h-[2px] bg-gray-400 border-none" />

            <p>OR</p>
            <hr className="flex-1 h-[2px] bg-gray-400 border-none" />
          </div>

          <Input label="email"/>
          <Input label="password"/>
          <PrimaryButton text="Continue" size="big"/>
    </div>
  </div>
  </>;
};

export default Login;
