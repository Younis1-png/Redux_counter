// Container for javascript app, store the whole state of the app

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  // it hold a reducer
  reducer: {
    counter: counterReducer,
  },
});
