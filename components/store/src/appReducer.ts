import { BeerType } from '@iwann/api';
import { createSlice } from '@reduxjs/toolkit';

type initialStateType = {
  beers: BeerType[];
  beerRandom: BeerType[];
  isLoading: boolean;
  error: null;
};

const initialState: initialStateType = {
  beers: [],
  beerRandom: [],
  isLoading: false,
  error: null,
};

const appReducer = createSlice({
  name: 'appReducer',
  initialState,
  reducers: {
    getBeersAllSuccess: (state, action) => {
      state.beers = action.payload;
      state.isLoading = false;
    },
    getBeerAllFetch: (state) => {
      state.isLoading = true;
    },
    getBeerFetch: (state) => {
      state.isLoading = true;
    },
    getBeerError: (state, action) => {
      state.error = action.payload;
    },
    getBeerSuccess: (state, action) => {
      state.beerRandom = action.payload;
    },
    getBeerFinally: (state) => {
      state.isLoading = false;
    },
  },
});

export default appReducer.reducer;
export const {
  getBeersAllSuccess,
  getBeerAllFetch,
  getBeerFetch,
  getBeerSuccess,
  getBeerFinally,
  getBeerError,
} = appReducer.actions;
