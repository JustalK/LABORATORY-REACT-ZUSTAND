import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'bear',
  initialState: {
    value: 0,
  },
  reducers: {
    increasePopulation: (state: { value: number }) => {
      state.value += 1;
    },
    removeAllBears: (state: { value: number }) => {
      state.value = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increasePopulation, removeAllBears } = counterSlice.actions;

export default counterSlice.reducer;
