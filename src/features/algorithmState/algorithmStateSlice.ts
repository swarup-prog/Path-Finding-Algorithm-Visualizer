import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Cell } from "../../types";

interface IAlgorithmState {
  algorithm: string;
  isVisualizing: boolean;
  result: Cell[];
}

const initialState: IAlgorithmState = {
  algorithm: "BFS",
  isVisualizing: false,
  result: [],
};

export const algorithmStateSlice = createSlice({
  name: "algorithmState",
  initialState,
  reducers: {
    setAlgorithm: (state, action: PayloadAction<string>) => {
      state.algorithm = action.payload;
    },
    setIsVisualizing: (state, action: PayloadAction<boolean>) => {
      state.isVisualizing = action.payload;
    },
    setResult: (state, action: PayloadAction<Cell[]>) => {
      state.result = action.payload;
    },
    clearAlgorithmState: (state) => {
      state.algorithm = "";
      state.isVisualizing = false;
      state.result = [];
    },
  },
});

export const {
  setAlgorithm,
  setIsVisualizing,
  setResult,
  clearAlgorithmState,
} = algorithmStateSlice.actions;

export default algorithmStateSlice.reducer;
