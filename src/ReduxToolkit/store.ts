import { configureStore } from '@reduxjs/toolkit';
import petsReducer from './petsSlice';

export const store = configureStore({
  reducer: {
    petsSlice: petsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
