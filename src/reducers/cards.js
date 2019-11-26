import {
    SET_SEARCH,
} from '../actions/cards'

const initialState = {
    search: '',
}

export default function timer(state = initialState, action) {
    switch (action.type) {
        case SET_SEARCH:
            return {
                ...state,
                search: action.search,
            }
        default:
            return state
    }
}