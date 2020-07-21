import React from 'react'
import PropTypes from 'prop-types'
import SmallCard from './SmallCard/SmallCard'
import BigCard from './BigCard/BigCard'

const getColor = (isHero) => {
    if (isHero === true) {
        return 'blue'
    } else if (isHero === false) {
        return 'red'
    }
    return 'grey'
}


const getColor1 = (isHero) => {
    let color = null
    if (isHero === true) {
        color =  'blue'
    } else if (isHero === false) {
        color = 'red'
    }
    color = 'grey'
    return color
}


const CharacterCard = props => {
    const { name, description, isHero, isBig, setId, id, invisible } = props

    if (isBig) {
        return (
            <BigCard
                name={name}
                description={description}
                isHero={isHero}
                getColor={getColor}
                setId={setId}
            />
        )
    } else if (invisible) {
        return null
    } else {
        return (
            <SmallCard
                name={name}
                description={description}
                isHero={isHero}
                getColor={getColor}
                setId={setId}
                id={id}
            />
        )
    }
}

CharacterCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    isHero: PropTypes.bool,
}

export default CharacterCard
