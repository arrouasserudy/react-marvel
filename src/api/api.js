import md5 from 'blueimp-md5'
import {MARVEL_PUBLIC_KEY, MARVEL_PRIVATE_KEY} from './config'

let date
let hash

const IMAGE_SIZE = {
    s: 'standard_small',
    m: 'standard_medium',
    l: 'standard_large',
}

const getDate = () => {
    if (!date) {
        date = new Date().getTime()
    }
    return date
}

const getHash = () => {
    if (!hash) {
        hash = md5(`${getDate()}${MARVEL_PRIVATE_KEY}${MARVEL_PUBLIC_KEY}`)
    }
    return hash
}

const BASE_REQUEST = 'http://gateway.marvel.com'
const authParams = `ts=${getDate()}&apikey=${MARVEL_PUBLIC_KEY}&hash=${getHash()}`

export const generateRequest = (url) => {
    return `${BASE_REQUEST}/${url}?${authParams}`
}

export const findCharacter = (name) => {
    return `${BASE_REQUEST}/v1/public/characters?${authParams}&nameStartsWith=${name}`
}

export const findCharacterById = (id) => {
    return `${BASE_REQUEST}/v1/public/characters/${id}?${authParams}`
}

export const getImageUrl = (thumbnail, size = 's') => {
    const {path, extension} = thumbnail
    const imageSize = IMAGE_SIZE[size]
    return `${path}/${imageSize}.${extension}`
}
