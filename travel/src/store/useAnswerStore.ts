//Zustandなどで回答保持
import { create } from 'zustand';

type AnswerStore = {
  tags: string[];
  setTags: (tags: string[]) => void;
  reset: () => void;
};

export const useAnswerStore = create<AnswerStore>((set) => ({
  tags: [],
  setTags: (tags) => set({ tags }),
  reset: () => set({ tags: [] }),
}));