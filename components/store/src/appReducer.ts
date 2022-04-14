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
      console.log(action);

      state.value = action.payload + 1;
    },
    decrease: (state, action) => {
      state.value = action.payload - 1;
    },
  },
});

export default appReducer.reducer;
export const {
  getBeerFetch,
  getBeerSuccess,
  getBeerFinally,
  increase,
  decrease,
} = appReducer.actions;

// type InitialStateType = {
//     value: number,
// }
// const initialState: InitialStateType = {
//     value: 0,
// }
// const INCREASE = 'INCREASE'
// const DECREASE = 'DECREASE'
//
// type ActionsType =
//     | ReturnType<typeof increaseAC>
//     | ReturnType<typeof decreaseAC>
//
// type InitialStateType = {
//     value: number,
// }
// const initialState: InitialStateType = {
//     value: 0,
// }
//
// export const appReducer = (state: InitialStateType = initialState, action: ActionsType) => {
//     switch (action.type) {
//         case "INCREASE":
//             return {...state, value: action.value + 1}
//         case "DECREASE":
//             return {...state, value: action.value - 1}
//         default:
//             return {...state}
//     }
// }
//
// export const increaseAC = (value: number) => ({type: INCREASE, value} as const)
// export const decreaseAC = (value: number) => ({type: DECREASE, value} as const)
