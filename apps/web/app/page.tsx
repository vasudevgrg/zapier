import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import Appbar from "./components/Appbar/Appbar";
import Hero from "./components/hero/Hero";


export default function Home() {
  return (
    <div>
      <Appbar/>
      <div className="flex w-3/4 mx-auto border-x border-[#eee]">
        <Hero/>
      </div>
    </div>
  );
}
