import { create } from "zustand";

interface ResumeStore {
  photoUri: string | null;
  setPhotoUri: (uri: string | null) => void;
}

export const useResumeStore = create<ResumeStore>((set) => ({
  photoUri: null,
  setPhotoUri: (uri) => set({ photoUri: uri }),
}));
