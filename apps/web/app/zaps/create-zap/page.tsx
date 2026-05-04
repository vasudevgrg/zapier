"use client";

import { useState } from "react";
import CreateBox from "../../../components/create-zap/CreateBox";
import Modal from "../../../components/create-zap/Modal";


export default function Zap() {
  const [zaps, setZaps] = useState<
    { app?: string; metadata?: object; type?: string }[]
  >([{
      type: "trigger"
    }]);

    function adddZap() {
      setZaps([...zaps, {
        type:'action'
      }])
    }

  return (
    <>
      <div className="bg-grey-800 flex flex-col justify-center items-center h-screen">
        {zaps.map((zap, idx) => (
          <CreateBox index={idx} onClick={adddZap}/>
        ))}
      </div>
      <Modal/>
    </>
  );
}
