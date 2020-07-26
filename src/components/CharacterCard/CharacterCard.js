import React from 'react'
import PropTypes from 'prop-types'
import SmallCard from './SmallCard/SmallCard'
import BigCard from './BigCard/BigCard'

const CharacterCard = props => {
    const { name, description,isBig, setId, id, invisible } = props

    if (isBig) {
        return (
            <BigCard
                name={name}
                description={description}
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
                setId={setId}
                id={id}
            />
        )
    }
}

CharacterCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
}

export default CharacterCard
