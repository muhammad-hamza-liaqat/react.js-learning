export const initialState = {
    count: 0
}

export const counterReducer = (state, action) => {
    switch (action.type) {
        case "INC":
            return { ...state, count: state.count + 1 }
        case "DEC":
            return { ...state, count: state.count > 0 ? state.count - 1 : state.count }
        case "RESET":
            return initialState
        default:
            return state;
    }

}