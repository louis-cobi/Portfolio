import { create } from "zustand";

const textures = ["1.jpeg", "2.jpeg", "3.jpeg"];

interface Store {
  index: number;
  texture: string;
  setIndex: (num: number) => void;
  navIsOpen: boolean;
  setNavIsOpen: (toggle: boolean) => void;
  lenis: any;
  setLenis: (lenis: any) => void;
  overflow: boolean;
  setOverflow: (overflow: boolean) => void;
  thresholds: Record<string, number>;
}

export const useStore = create<Store>((set) => ({
  index: 0,
  texture: textures[0],
  setIndex: (num: number) => set({ index: num, texture: textures[num] }),
  navIsOpen: false,
  setNavIsOpen: (toggle) => set({ navIsOpen: toggle, overflow: !toggle }),
  lenis: undefined,
  setLenis: (lenis) => set({ lenis }),
  overflow: true,
  setOverflow: (overflow) => set({ overflow }),
  thresholds: {},
}));
