import { configureStore } from "@reduxjs/toolkit";
import ASRSlice from "./ASRSlice";

export const store = configureStore({
  reducer: {
    ASR: ASRSlice,
  },
});
