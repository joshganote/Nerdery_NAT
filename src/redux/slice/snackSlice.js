import { createSlice } from "@reduxjs/toolkit";

/**
 * I wanted to use this reducer to collect all the snacks coming in from the api request
 */
const initialState = [{
  id: "",
  brand: "",
  product: "",
  description: "",
  image: "",
  votes: 0,
  inStock: 0,
}];

const snack = createSlice({
  name: "snack",
  initialState,
  reducers: {
    setSnackSlice: (state, action) => {
      state = action.payload;
    },
  },
});

export const { setSnackSlice } = snack.actions;
export default snack.reducer;

