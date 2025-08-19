import { create } from "zustand";

export const useRegisterStore = create((set) => ({
  user: null,
  setUser: (data) => set({ user: data }),
}));
