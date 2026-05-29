"use client";

import Appbar from "../components/Appbar/Appbar";
import Hero from "../components/hero/Hero";
import { useAtomValue } from "../recoil/store";
import { userAtom } from "../recoil/atom";
import { signIn } from "next-auth/react";

export default function Home() {
  const user = useAtomValue(userAtom);
  return (
    <div>
        <Appbar isLoggedIn={user.logged_in} onClickLogin={()=> signIn()}/>
        <div className="flex w-3/4 mx-auto border-x border-[#eee]">
          <Hero />
        </div>
    </div>
  );
}
