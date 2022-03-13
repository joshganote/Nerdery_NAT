import { createSlice } from "@reduxjs/toolkit";

export const snackSelectionSlice = createSlice({
  name: "snack",
  initialState: { value: [{id: "1", brand: "test", votes: 0, inStock: 0}]},
  reducers: {
    getSnack:(state, {payload}) => {
      state.value = payload
    }
  }
})

export const { getSnack } = snackSelectionSlice.actions
export const getAllSnacks = (state) => state.value.snack;
export default snackSelectionSlice.reducer;