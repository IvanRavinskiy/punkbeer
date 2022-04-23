import { BeerType } from '@iwann/api';
import { createSlice } from '@reduxjs/toolkit';

export type initialStateType = {
  beers: BeerType[];
  beerRandom: BeerType[];
  isLoading: boolean;
  error: null;
  alcohol: number[];
  beersSort: BeerType[];
};

const initialState: initialStateType = {
  beers: [],
  beerRandom: [],
  isLoading: false,
  error: null,
  alcohol: [],
  beersSort: [],
};

const appReducer = createSlice({
  name: 'appReducer',
  initialState,
  reducers: {
    getBeersSortSuccess: (state, action) => {
      state.beersSort = action.payload;
      state.isLoading = false;
    },
    getBeersSortFetch: (state, action) => {
      state.isLoading = true;
      state.alcohol = action.payload;
    },
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
  getBeersSortSuccess,
  getBeersSortFetch,
  getBeersAllSuccess,
  getBeerAllFetch,
  getBeerFetch,
  getBeerSuccess,
  getBeerFinally,
  getBeerError,
} = appReducer.actions;
