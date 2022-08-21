import create from 'zustand';
import { persist } from 'zustand/middleware';

const useBearStore = create(
  persist(
    (set, get) => ({
      bears: 0,
      increasePopulation: () =>
        set((state: any) => ({ bears: state.bears + 1 })),
      removeAllBears: () => set({ bears: 0 }),
    }),
    {
      name: 'bear',
    }
  )
);

export default useBearStore;
