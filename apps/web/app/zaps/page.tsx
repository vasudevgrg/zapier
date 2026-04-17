"use client";

import { ChevronsUpDown, Plus, Trash } from "lucide-react";
import Appbar from "../components/Appbar/Appbar";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Zap() {
  const [zaps, setZaps] = useState([]);

  useEffect(() => {
    async function loadZaps() {
      const res = await axios.get("http://localhost:8081/zap", {
        params: { user_id: 1 },
      });
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
            <button className="flex bg-purple-800 text-white p-2 rounded-2">
              {" "}
              <Plus />
              Create
            </button>
          </div>
        </div>

        <table className="table-auto">
          <thead>
            <tr>
              <th className="flex gap-3">
                Name
                <ChevronsUpDown />{" "}
              </th>
              <th>Apps</th>
              <th>Location</th>
              <th>Last Modified</th>
              <th>Status</th>
              <th>Owner</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {zaps.map((zap) => (
              <tr>
                <td>{zap.meta_data.apps}</td>
                <td>/Vasudev.folder</td>
                <td>{zap.updated_at}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
