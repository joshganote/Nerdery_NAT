import { configureStore } from '@reduxjs/toolkit'
import snackSelectionSlice from './features/snackSelectionReducer';

export default configureStore({
  reducer: {
    snack: snackSelectionSlice,
  }
})