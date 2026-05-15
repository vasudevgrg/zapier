import React, { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import DetailsModal from "./DetailsModal";

type ModalItem = {
  image: string;
  name: string;
  id: number;
};

const Modal = ({
  open = false,
  setOpen,
  data,
  updateZap,
  index,
}: {
  open?: boolean;
  index: number;
  updateZap?: (idx: number, payload: any) => void;
  setOpen: (open: boolean) => void;
  data?: {
    actions: ModalItem[];
    triggers: ModalItem[];
  };
}) => {
  const [openDetail, setOpenDetail] = useState(false);
  const [actionType, setActionType] = useState<"solana" | "mail">("mail");
  const [actionId, setActionId] = useState<number>();

  return (
    <>
      <div
        className={`fixed inset-0 flex justify-center items-center h-screen bg-black/50 z-100 ${
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
          {index != 0
            ? data?.actions.map((val) => (
                <div
                  className="flex flex-row justify-between p-3 m-auto gap-2"
                  key={val.name}
                  onClick={() => {
                    setActionType(val.name as "solana" | "mail");
                    setActionId(val.id);
                    setOpen(false);
                    setOpenDetail(true);
                  }}
                >
                  <Image
                    src={val?.image}
                    alt={val.name}
                    width={32}
                    height={32}
                  />
                  <p className="flex justify-start">{val.name}</p>
                </div>
              ))
            : data?.triggers.map((val) => (
                <div
                  className="flex flex-row justify-between p-3 m-auto gap-2"
                  key={val.name}
                  onClick={() => {
                    updateZap?.(index, {
                      id: val.id,
                      type: "trigger",
                      metadata: {
                        url: "http://localhost:3000",
                      },
                    });
                    setOpen(false);
                  }}
                >
                  <Image
                    src={val?.image}
                    alt={val.name}
                    width={32}
                    height={32}
                  />
                  <p className="flex justify-start">{val.name}</p>
                </div>
              ))}
        </div>
      </div>
      <DetailsModal
        open={openDetail}
        type={actionType}
        setOpen={setOpenDetail}
        updateZap={updateZap}
        index={index}
        actionId={actionId}
      />
    </>
  );
};

export default Modal;
