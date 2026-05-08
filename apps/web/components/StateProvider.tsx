"use client";

import { type ReactNode } from "react";
import { StateRoot } from "../recoil/store";

export default function StateProvider({ children }: { children: ReactNode }) {
  return <StateRoot>{children}</StateRoot>;
}
