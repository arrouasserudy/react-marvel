import { combineReducers } from 'redux'
import timer from './timer'
import cards from './cards'

const reducers = combineReducers({
    timer,
    cards
})

export default reducers