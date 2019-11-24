/*
 * action types
 */

export const SET_TIME = 'SET_TIME'


/*
 * action creators
 */

export function setTime(time) {
    return { type: SET_TIME, time }
}
