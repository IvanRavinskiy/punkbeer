import { BeerType } from '@iwann/api';
import { createSlice } from '@reduxjs/toolkit';

type initialStateType = {
  value: number;
  beers: BeerType[];
  isLoading: boolean;
};

const initialState: initialStateType = {
  value: 0,
  beers: [],
  isLoading: false,
};

const appReducer = createSlice({
  name: 'appReducer',
  initialState,
  reducers: {
    getBeerFetch: (state) => {
      state.isLoading = true;
    },
    getBeerSuccess: (state, action) => {
      state.beers = action.payload;
      state.isLoading = false;
    },
    getBeerFinally: (state) => {
      state.isLoading = false;
    },
    increase: (state, action) => {
      state.value = action.payload + 1;
    },
    decrease: (state, action) => {
      state.value = action.payload - 1;
    },
  },
});

export default appReducer.reducer;
export const { getBeerFetch, getBeerSuccess, increase, decrease } =
  appReducer.actions;
