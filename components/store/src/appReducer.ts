import {createSlice} from "@reduxjs/toolkit";

const appReducer = createSlice({
    name: 'appReducer',
    initialState: {
        value: 0,
    },
    reducers: {
        increase: function (state, action) {
        state.value = action.payload + 1
    },
        decrease: function (state, action) {
            state.value = action.payload - 1
        },
    }
})

export default appReducer.reducer
export const {increase, decrease} = appReducer.actions

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

