import { createSlice } from "@reduxjs/toolkit";

/**
 * I was going to try and use this to track the new state when a snack was voted for. I wanted this reducer to
 * capture the selection, and put it into an array that I could use in the Selection table. I figured this would
 * help make things easier when solving when more than three votes have been casted and if there was a duplicate vote
 * to not allow it.
 */
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