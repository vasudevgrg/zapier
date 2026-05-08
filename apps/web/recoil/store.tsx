"use client";

import {
  createContext,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";

type Atom<T> = {
  key: string;
  default: T;
};

type Store = Record<string, unknown>;

const StoreContext = createContext<{
  values: Store;
  setValues: Dispatch<SetStateAction<Store>>;
} | null>(null);

export function atom<T>(config: Atom<T>): Atom<T> {
  return config;
}

export function StateRoot({ children }: { children: ReactNode }) {
  const [values, setValues] = useState<Store>({});
  const store = useMemo(() => ({ values, setValues }), [values]);

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}

function useStore() {
  const store = useContext(StoreContext);

  if (!store) {
    throw new Error("State hooks must be used inside StateRoot.");
  }

  return store;
}

export function useAtomValue<T>(state: Atom<T>): T {
  const { values } = useStore();

  return (values[state.key] ?? state.default) as T;
}

export function useSetAtom<T>(state: Atom<T>) {
  const { setValues } = useStore();

  return (next: SetStateAction<T>) => {
    setValues((currentValues) => {
      const current = (currentValues[state.key] ?? state.default) as T;
      const value =
        typeof next === "function"
          ? (next as (previous: T) => T)(current)
          : next;

      return {
        ...currentValues,
        [state.key]: value,
      };
    });
  };
}

export function useAtomState<T>(
  state: Atom<T>,
): [T, Dispatch<SetStateAction<T>>] {
  return [useAtomValue(state), useSetAtom(state)];
}
