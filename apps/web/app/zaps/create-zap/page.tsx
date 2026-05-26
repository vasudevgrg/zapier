"use client";

import { useEffect, useState } from "react";
import CreateBox from "../../../components/create-zap/CreateBox";
import Modal from "../../../components/create-zap/Modal";
import axios from "axios";
import { CurrentZapIndex, OpenZapModal, ZapListState } from "../../../recoil/atom";
import { useAtomState, useSetAtom } from "../../../recoil/store";

type ZapStep = {
  id?: number;
  type: string;
  metadata?: Record<string, unknown>;
};

export default function Zap() {
  const [open, setOpen] = useAtomState(OpenZapModal);
  const [currentZapIndex, setCurrentZapIndex] = useAtomState(CurrentZapIndex);
  const [zaps, setZaps] = useAtomState(ZapListState);
  const [isPublishing, setIsPublishing] = useState(false);
  const [publishMessage, setPublishMessage] = useState("");
  const [data, setData] = useState({
    actions: [],
    triggers: [],
  });
  const setOpenModal = useSetAtom(OpenZapModal);


  function adddZap() {
    setZaps([
      ...zaps,
      {
        type: "action",
      },
    ]);
    setPublishMessage("");
  }

  function updateZap(idx: number, payload: ZapStep) {
    setZaps((prev) =>
      prev.map((zap, index) => (index === idx ? payload : zap)),
    );
    setPublishMessage("");
  }

  async function fetchActions() {
    const res = await axios.get("http://localhost:8081/action/available");
    setData((prev) => ({
      ...prev,
      actions: res.data,
    }));
  }

  async function fetchTriggers() {
    const res = await axios.get("http://localhost:8081/trigger/available");
    setData((prev) => ({
      ...prev,
      triggers: res.data,
    }));
  }

  async function createZap() {
    if (!canPublish) {
      setPublishMessage("Add trigger and all action details before publishing.");
      return;
    }

    setIsPublishing(true);
    setPublishMessage("");
    console.log('zaps', zaps);

    try {
      await axios.post("http://localhost:8081/zap", {
        name: "zp",
        actions: zaps.slice(1),
        trigger: zaps[0],
        user_id: 1,
      });
      setPublishMessage("Zap published successfully.");
    } catch (error) {
      console.error(error);
      setPublishMessage(
        "Could not publish zap. Please check the backend and try again.",
      );
    } finally {
      setIsPublishing(false);
    }
  }

  const canPublish =
    zaps.length > 1 &&
    zaps.every((zap) => Boolean(zap.id) && Boolean(zap.metadata));

  useEffect(() => {
    fetchActions();
    fetchTriggers();
  }, []);

  return (
    <>
      <div className="bg-grey-800 flex flex-col justify-center items-center h-screen">
        <button
          className="border flex top-3 right-5 p-4 text-xl absolute disabled:cursor-not-allowed disabled:opacity-50"
          onClick={createZap}
          disabled={!canPublish || isPublishing}
        >
          {isPublishing ? "Publishing..." : "Publish"}
        </button>
        {publishMessage ? (
          <p className="absolute top-24 text-sm font-semibold">
            {publishMessage}
          </p>
        ) : null}
        {zaps.map((zap, idx) => (
          <CreateBox
            index={idx}
            onClick={adddZap}
            key={idx}
            setOpenModal={setOpenModal}
            zap={zap}
            setCurrentZapIndex={setCurrentZapIndex}
          />
        ))}
      </div>
      <Modal
        open={open}
        setOpen={setOpen}
        data={data}
        updateZap={updateZap}
        index={currentZapIndex}
      />
    </>
  );
}
