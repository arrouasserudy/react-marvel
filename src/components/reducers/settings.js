const initialState = {
    dark: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_DARK_MODE':
            return {
                ...state,
                dark: action.dark
            }
        default:
            return state
    }
}
