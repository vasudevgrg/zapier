"use client";
import React, { useState } from "react";
import { X } from "lucide-react";
import Input from "../signUp/Input";

type ZapStep = {
  id?: number;
  type: string;
  metadata?: Record<string, unknown>;
};

const DetailsModal = ({
  open = false,
  setOpen,
  type,
  updateZap,
  actionId,
  index,
}: {
  open?: boolean;
  index: number;
  actionId?: number;
  updateZap?: (idx: number, payload: ZapStep) => void;
  setOpen: (open: boolean) => void;
  type: "solana" | "mail";
}) => {
  const [solanaId, setSolanaId] = useState("");
  const [solanaAmount, setSolanaAmount] = useState("");
  const [mailId, setMailId] = useState("");
  const [mailBody, setMailBody] = useState("");

  const isSolanaReady = Boolean(solanaId.trim() && solanaAmount.trim());
  const isMailReady = Boolean(mailId.trim() && mailBody.trim());
  const canSubmit = type === "solana" ? isSolanaReady : isMailReady;

  function handleSubmit() {
    if (!actionId || !canSubmit) {
      return;
    }

    updateZap?.(index, {
      id: actionId,
      type: "action",
      metadata:
        type == "solana"
          ? {
              solana_id: solanaId.trim(),
              amount: Number(solanaAmount),
            }
          : {
              mail_id: mailId.trim(),
              body: mailBody.trim(),
            },
    });

    setOpen(false);
  }

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
              <Input
                label="Solana Id"
                onChange={(e) => setSolanaId(e.target.value)}
              />

              <Input
                label="Amount"
                type="number"
                onChange={(e) => setSolanaAmount(e.target.value)}
              />
            </div>
          ) : (
            <div>
              <Input label="To" onChange={(e) => setMailId(e.target.value)} />
              <Input
                label="Body"
                onChange={(e) => setMailBody(e.target.value)}
              />
            </div>
          )}
          <button
            className="border p-2 mt-4 font-bold bg-gray-300"
            onClick={handleSubmit}
            disabled={!canSubmit}
          >
            Add Action
          </button>
        </div>
      </div>
    </>
  );
};

export default DetailsModal;
