import { configureStore } from "@reduxjs/toolkit";
import gestureSlice from "../features/gestureSlice";
import userSlice from "../features/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    gesture: gestureSlice,
  },
});
