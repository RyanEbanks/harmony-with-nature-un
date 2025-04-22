// activeNavSlice.js (using Redux Toolkit for simplicity)
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

const activeNavSlice = createSlice({
  name: 'activeNav',
  initialState: {
    activePage: '', // Initially, the home page path is active
  },
  reducers: {
    setActivePage: (state, action) => {
      state.activePage = action.payload;
    },
  },
});

export const { setActivePage } = activeNavSlice.actions;
export const selectActivePage = (state: RootState) => state.activeNav.activePage;

export default activeNavSlice.reducer;