import {
    SET_SEARCH,
} from '../actions/cards'

const initialState = {
    search: '',
}

export default function timer(state = initialState, action) {
    console.log('state',state)
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