import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Cell } from "../../types";

interface IMazeState {
  start: Cell;
  end: Cell;
  setMode: string;
  isSetMode: boolean;
}

const initialState: IMazeState = {
  start: [0, 0],
  end: [0, 0],
  setMode: "",
  isSetMode: false,
};

export const mazeStateSlice = createSlice({
  name: "mazeState",
  initialState,
  reducers: {
    setStart: (state, action: PayloadAction<Cell>) => {
      state.start = action.payload;
    },
    setEnd: (state, action: PayloadAction<Cell>) => {
      state.end = action.payload;
    },
    setSetMode: (state, action: PayloadAction<string>) => {
      state.setMode = action.payload;
    },
    setIsSetMode: (state, action: PayloadAction<boolean>) => {
      state.isSetMode = action.payload;
    },
    clear: (state) => {
      state.start = [0, 0];
      state.end = [0, 0];
    },
  },
});

export const { setStart, setEnd, setSetMode, setIsSetMode, clear } =
  mazeStateSlice.actions;

export default mazeStateSlice.reducer;
