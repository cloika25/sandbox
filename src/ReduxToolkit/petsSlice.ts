import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Pet } from "../Effector/types";
import { mock } from "./mock";

export interface PetsListState {
  count: number;
  pets: Pet[];
}

const initialState: PetsListState = {
  count: 0,
  pets: [],
};

export const petsSlice = createSlice({
  name: "petsStore",
  initialState,
  reducers: {
    deleteHandle: (state, action: PayloadAction<number>) => {
      state.pets = state.pets.filter((pet) => pet.id !== action.payload);
    },
    initMockData: (state) => {
      state.pets = mock as Pet[];
    },
  },
});

export const { deleteHandle, initMockData } = petsSlice.actions;

export default petsSlice.reducer;
