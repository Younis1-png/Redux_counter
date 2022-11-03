import { createSlice } from "@reduxjs/toolkit";

// create our initial state
const initialState = {
  count: 0,
};

// our counter slice

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // here where we name all our action
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, reset, incrementByAmount } =
  counterSlice.actions; // our action
export default counterSlice.reducer; // our full reducer
