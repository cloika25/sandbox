import { createSlice } from '@reduxjs/toolkit';
import { Pet } from '../Effector/types';

export interface ReduxStore {
  pets: Pet[];
}

const initialState: ReduxStore = {
  pets: [],
};

export const petsSlice = createSlice({
  name: 'Pets list',
  initialState,
  reducers: {

  },
});
