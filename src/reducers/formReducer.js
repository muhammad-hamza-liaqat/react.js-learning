export const initialState = {
    name: "",
    email: "",
    message: ""
}

export const formReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return { ...state, [action.payload.field]: action.payload.value }
        case "RESET":
            return initialState
        default:
            return state
    }
}