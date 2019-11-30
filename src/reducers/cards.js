import {
    SET_SEARCH,
    SET_FAVORITE,
    REMOVE_FAVORITE,
} from '../actions/cards'

const initialState = {
    search: '',
    favorites: []
}

export default function timer(state = initialState, action) {
    switch (action.type) {
        case SET_SEARCH:
            return {
                ...state,
                search: action.search,
            }
        case SET_FAVORITE:
            return {
                ...state,
                favorites: [
                    ...state.favorites,
                    action.id
                ]
            }
        case REMOVE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.find((id) => id !== action.id)
            }
        default:
            return state
    }
}