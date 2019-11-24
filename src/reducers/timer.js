import {
    SET_TIME
} from '../actions/timer'

const initialState = {
    time: 0
}

export default function timer(state = initialState, action) {
    switch (action.type) {
        case SET_TIME:
            return {
                ...state,
                time: action.time
            }
        default:
            return state
    }
}