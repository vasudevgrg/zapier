"use client";

import { type ReactNode } from "react";
import { StateRoot } from "../recoil/store";
import { SessionProvider } from "next-auth/react";

export default function StateProvider({ children }: { children: ReactNode }) {
  return <SessionProvider><StateRoot>{children}</StateRoot></SessionProvider>;
}
