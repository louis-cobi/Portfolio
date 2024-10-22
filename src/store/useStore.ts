import { create } from "zustand";

const textures = ["1.jpeg", "2.jpeg", "3.jpeg"];

interface Store {
  index: number;
  texture: string;
  setIndex: (num: number) => void;
  headerData: any;
  setHeaderData: (headerData: any) => void;
  footerData: any;
  setFooterData: (footerData: any) => void;
  navIsOpen: boolean;
  setNavIsOpen: (toggle: boolean) => void;
  lenis: any;
  setLenis: (lenis: any) => void;
  overflow: boolean;
  setOverflow: (overflow: boolean) => void;
  triggerTransition: string;
  setTriggerTransition: (triggerTransition: string) => void;
  thresholds: Record<string, number>;
  addThreshold: ({ id, value }: { id: string; value: number }) => void;
  introOut: boolean;
  setIntroOut: (introOut: boolean) => void;
}

export const useStore = create<Store>((set) => ({
  index: 0,
  texture: textures[0],
  setIndex: (num: number) => set({ index: num, texture: textures[num] }),
  headerData: undefined,
  setHeaderData: (headerData) => set({ headerData }),
  footerData: undefined,
  setFooterData: (footerData) => set({ footerData }),
  navIsOpen: false,
  setNavIsOpen: (toggle) => set({ navIsOpen: toggle, overflow: !toggle }),
  lenis: undefined,
  setLenis: (lenis) => set({ lenis }),
  overflow: true,
  setOverflow: (overflow) => set({ overflow }),
  triggerTransition: '',
  setTriggerTransition: (triggerTransition) => set({ triggerTransition }),
  thresholds: {},
  addThreshold: ({ id, value }) => {
    let thresholds = { ...get().thresholds }
    thresholds[id] = value

    set({ thresholds })
  },
  // removeThreshold: (threshold) => {
  //   set({ threshold })
  // },
  introOut: false,
  setIntroOut: (introOut) => set({ introOut }),
}));
