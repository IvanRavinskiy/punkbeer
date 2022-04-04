const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE'

type ActionsType =
    | ReturnType<typeof increaseAC>
    | ReturnType<typeof decreaseAC>

type InitialStateType = {
    value: number,
}
const initialState: InitialStateType = {
    value: 0,
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "INCREASE":
            return {...state, value: action.value + 1}
        case "DECREASE":
            return {...state, value: action.value - 1}
        default:
            return {...state}
    }
}

export const increaseAC = (value: number) => ({type: INCREASE, value} as const)
export const decreaseAC = (value: number) => ({type: DECREASE, value} as const)
