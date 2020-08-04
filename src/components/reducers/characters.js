const initialState = {
    favorites: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FAVORITE':
            return {
                ...state,
                favorites: [...state.favorites, action.id]
            }
        case 'REMOVE_FAVORITE':
            const filtered = state.favorites.filter(id => {
                return id !== action.id
            })
            return {
                ...state,
                favorites: filtered
            }
        default:
            return state
    }
}
