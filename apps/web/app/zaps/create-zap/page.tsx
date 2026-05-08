"use client";

import { useEffect, useState } from "react";
import CreateBox from "../../../components/create-zap/CreateBox";
import Modal from "../../../components/create-zap/Modal";
import axios from "axios";
import { OpenZapModal, ZapListState,CurrentZapIndex } from "../../../recoil/atom";
import { useAtomState, useSetAtom } from "../../../recoil/store";

export default function Zap() {
  const [open, setOpen] = useAtomState(OpenZapModal);
  const [currentZapIndex, setCurrentZapIndex] = useAtomState(CurrentZapIndex)
  console.log('open: ', open);
  const [zaps, setZaps] = useAtomState(ZapListState);
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
  }

  function updateZap(idx, payload) {
    zaps[idx] = payload;
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
    console.log('res: ', res);
    setData((prev) => ({
      ...prev,
      triggers: res.data,
    }));
  }

  async function createZap() {
    await axios.post('http://localhost:8081/zap',{
      name: 'zp',
      actions: zaps.slice(1),
      trigger: zaps[0],
      user_id: 1
    })
  }

  useEffect(() => {
    fetchActions();
    fetchTriggers();
  }, []);

  return (
    <>
      <div className="bg-grey-800 flex flex-col justify-center items-center h-screen">
        <button className="border flex top-3 right-5 p-4 text-xl absolute" onClick={createZap}> Publish </button>
        {zaps.map((zap, idx) => (
          <CreateBox
            index={idx}
            onClick={adddZap}
            key={idx}
            setOpenModal={setOpenModal}
            zap={zap}
            setCurrentZapIndex = {setCurrentZapIndex}
          />
        ))}
      </div>
      <Modal open={open} setOpen= {setOpen} data={data} updateZap={updateZap} index= {currentZapIndex}/>
    </>
  );
}

// 'use client';

// import { useAtomValue } from '../../../recoil/store';
// import { OpenZapModal } from '../../../recoil/atom';

// export default function Zap() {
//   console.log('Rendering Zap');

//   const open = useAtomValue(OpenZapModal);

//   return <div>Test {open ? "open" : "closed"}</div>;
// }
