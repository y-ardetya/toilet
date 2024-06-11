import { create } from "zustand";

export const useStore = create((set) => ({
  enableBloom: false,
  setEnableBloom: (enableBloom) => set({ enableBloom }),
}));
