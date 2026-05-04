import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import Appbar from "../components/Appbar/Appbar";
import Hero from "../components/hero/Hero";
import { RecoilRoot, useRecoilValue } from "recoil";
import { userAtom } from "../recoil/atom";

export default function Home() {
  const user = useRecoilValue(userAtom);
  return (
    <div>
      <RecoilRoot>
        <Appbar isLoggedIn={user.logged_in}/>
        <div className="flex w-3/4 mx-auto border-x border-[#eee]">
          <Hero />
        </div>
      </RecoilRoot>
    </div>
  );
}
