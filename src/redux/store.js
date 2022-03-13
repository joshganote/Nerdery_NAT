import { configureStore } from '@reduxjs/toolkit'
import {} from "redux"
import snack from "./slice/snackSlice";
import snacks from "./slice/snackSlices";


const store =  configureStore({
  reducer: {
    snack,
    snacks
  }
})

export default store;