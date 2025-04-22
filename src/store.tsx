// store.js
import { configureStore } from '@reduxjs/toolkit';
import activeNavReducer from './activeNavSlice';

export const store = configureStore({
  reducer: {
    activeNav: activeNavReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;