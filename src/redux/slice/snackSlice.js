import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  brand: "",
  product: "",
  description: "",
  image: "",
  votes: 0,
  inStock: 0,
};

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

