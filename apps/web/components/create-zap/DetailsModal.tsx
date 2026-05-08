import React, { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import Input from "../signUp/Input";

type ModalItem = {
  image: string;
  name: string;
  id: number;
};

const DetailsModal = ({
  open = false,
  setOpen,
  type,
  updateZap,
  index,
}: {
  open?: boolean;
  index: number;
  updateZap?: (idx: number, payload: any) => void;
  addZap: (zap: any) => void;
  setOpen: (open: boolean) => void;
  type: "solana" | "mail";
}) => {
  const [solanaId, setSolanaId] = useState();
  const [solanaAmount, setSolanaAmount] = useState();
  const [mailId, setMailId] = useState()
  const [mailBody, setMailBody] = useState()

  return (
    <>
      <div
        className={`fixed inset-0 flex justify-center items-center h-screen bg-black/50 z-101 ${
          open ? "" : "hidden"
        }`}
      >
        <div className="flex flex-col bg-grey p-10 justify-start m-auto relative ">
          <X
            className="border flex justify-end items-end absolute top-1 right-1"
            onClick={() => setOpen(false)}
          />
          <h2 className="text-xl">
            Choose {index == 0 ? "trigger" : "action"}:{" "}
          </h2>
          {type == "solana" ? (
            <div>
              <Input label="Solana Id" onChange={setSolanaId} />

              <Input label="Amount" onChange={setSolanaAmount}/>
            </div>
          ) : (
            <div>
              <Input label="To" onChange={setMailId}/>
              <Input label="Body" onChange={setMailBody}/>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DetailsModal;
