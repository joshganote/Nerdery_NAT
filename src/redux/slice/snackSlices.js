import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "",
    brand: "",
    product: "",
    description: "",
    image: "",
    votes: 0,
    inStock: 0,
  },
];

const snacks = createSlice({
  name: "snacks",
  initialState,
  reducers: {
    getSnacksSlice: (state, action) => {
      return state;
    },
    addSnacksSlice: (state, action) => {
      state.push(action.payload);
      return state;
    },
  },
});

export const { getSnacksSlice, addSnacksSlice } = snacks.actions;
export default snacks.reducer;