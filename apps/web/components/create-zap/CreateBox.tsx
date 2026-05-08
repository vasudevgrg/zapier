import { Plus, Zap } from "lucide-react";
import React from "react";

const CreateBox = ({ index, onClick, setOpenModal, setCurrentZapIndex }: { type?: object;setCurrentZapIndex: (idx: number)=> void; index: number,onClick: ()=> void, setOpenModal: (open: boolean)=> void, zap?: object }) => {
  
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col border h-[10vh] w-[30vw]" onClick={()=> {setOpenModal(true); setCurrentZapIndex(index);}}>
        <div className="flex border-hidden bg-grey  h-[30%] m-2 p-2 items-center">
          <Zap />
          {index==0?'trigger': 'action'}
        </div>
        <div>
          {index}{" "}
          <p className="text-grey-950">select event that starts your zap.</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center m-2">
        <div className="w-[2px] h-10 bg-gray-300"></div>
        <Plus onClick={onClick}/>
        <div className="w-[2px] h-10 bg-gray-300"></div>
      </div>
    </div>
  );
};

export default CreateBox;
