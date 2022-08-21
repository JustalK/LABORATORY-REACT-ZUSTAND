import create from 'zustand';

const useStore = create((set) => ({
  clothes: 0,
  foods: 0,
  increaseFoods: () => set((state: any) => ({ foods: state.foods + 1 })),
  increaseClothes: () => set((state: any) => ({ clothes: state.clothes + 1 })),
  resetFoods: () => set({ foods: 0 }),
  resetClothes: () => set({ clothes: 0 }),
}));

export default useStore;
