/*
 * action types
 */

export const SET_SEARCH = 'SET_SEARCH'


/*
 * action creators
 */

export function setSearch(search) {
    return { type: SET_SEARCH, search }
}
