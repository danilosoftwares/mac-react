import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { finderTyped } from "./types";

const initialState: finderTyped[] = [];

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.push({ id: state.length, active: true });
    },
    decrement: (state, action: PayloadAction<number>) => {
      var removeIndex = state.map(item => item.id).indexOf(action.payload);
      state[removeIndex].active = false;
    },
  },
})

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer