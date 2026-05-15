"use client";

import { ChevronsUpDown, Plus, Trash } from "lucide-react";
import Appbar from "../../components/Appbar/Appbar";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Zap() {
  const [zaps, setZaps] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function loadZaps() {
      const res = await axios.get("http://localhost:8081/zap", {
        params: { user_id: 1 },
      });
      console.log("res: ", res.data);
      setZaps(res.data);
    }
    loadZaps();
  }, []);
  return (
    <div>
      <Appbar page="zap" />
      <div className="flex flex-col p-20">
        <div className="flex justify-between items-center flex-1">
          <h1 className="text-3xl ">Zaps</h1>
          <div className="flex gap-4">
            <div className="flex text-xl text-purple-800 hover:bg-purple-200 p-2">
              <Trash />
              Trash
            </div>
            <button
              className="flex bg-purple-800 text-white p-2 rounded-2"
              onClick={() => router.push("/zaps/create-zap")}
            >
              {" "}
              <Plus />
              Create
            </button>
          </div>
        </div>

        <table className="table-auto">
          <thead >
            <tr className="p-3">
              
              <th>Apps</th>
              <th>Last Modified</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {zaps.map((zap) => (
              <tr className="flex p-3">
                <td className="flex">
                  <img
                      key={zap.id}
                      src={zap?.trigger?.available_trigger.image}
                      alt=""
                      className="h-10"
                    />
                    {
                      zap.actions.map(action => (
                        <img
                      key={zap.id}
                      src={action.available_action.image}
                      alt=""
                      className="h-10"
                    />
                      ))
                    }
                </td>
                <td>{zap.updatedAt}</td>
                <td> 'ss'</td>
              </tr>
              
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
