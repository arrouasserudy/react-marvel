/*
 * action types
 */

export const SET_SEARCH = 'SET_SEARCH'
export const SET_FAVORITE = 'SET_FAVORITE'
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE'


/*
 * action creators
 */

export function setSearch(search) {
    return { type: SET_SEARCH, search }
}

export function setFavorite(id) {
    return { type: SET_FAVORITE, id }
}

export function removeFavorite(id) {
    return { type: REMOVE_FAVORITE, id }
}
