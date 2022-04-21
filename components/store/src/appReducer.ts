import { BeerType } from '@iwann/api';
import { createSlice } from '@reduxjs/toolkit';

type initialStateType = {
  beers: BeerType[];
  beerRandom: BeerType[];
  isLoading: boolean;
};

const initialState: initialStateType = {
  beers: [],
  beerRandom: [],
  isLoading: false,
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
    getBeerSuccess: (state, action) => {
      state.beerRandom = action.payload;
      state.isLoading = false;
    },
    // getBeerFinally: (state) => {
    //   state.isLoading = false;
    // },
  },
});

export default appReducer.reducer;
export const {
  getBeersAllSuccess,
  getBeerAllFetch,
  getBeerFetch,
  getBeerSuccess,
} = appReducer.actions;
