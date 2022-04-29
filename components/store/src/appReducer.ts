import { BeerType } from '@iwann/api';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type InitialStateType = {
  beers: BeerType[];
  beerRandom: BeerType[];
  isLoading: boolean;
  error: null;
  alcohol: number[];
  beersSort: BeerType[];
};

const initialState: InitialStateType = {
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
    getBeersSortSuccess: (
      state,
      action: PayloadAction<InitialStateType['beersSort']>,
    ) => {
      state.beersSort = action.payload;
      state.isLoading = false;
    },
    getBeersSortFetch: (
      state,
      action: PayloadAction<InitialStateType['alcohol']>,
    ) => {
      state.isLoading = true;
      state.alcohol = action.payload;
    },
    getBeersAllSuccess: (
      state,
      action: PayloadAction<InitialStateType['beers']>,
    ) => {
      state.beers = action.payload;
      state.isLoading = false;
    },
    getBeerAllFetch: (state) => {
      state.isLoading = true;
    },
    getBeerFetch: (state) => {
      state.isLoading = true;
    },
    getBeerError: (state, action: PayloadAction<InitialStateType['error']>) => {
      state.error = action.payload;
    },
    getBeerSuccess: (
      state,
      action: PayloadAction<InitialStateType['beerRandom']>,
    ) => {
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
