import React from 'react'
import PropTypes from 'prop-types'
import styles from "../CharacterCard/CharacterCard.module.css";

const DEFAULT_DESCRIPTION = 'Un personnage marvel'

const getHeroText = isHero => `C'est un ${ isHero ? 'hero' : 'vilain'}`

const CharacterCard = props => {
    const { name, description, isHero } = props
    return (
        <div className={styles.container}>
            <div>
                {name}
            </div>
            <div>
                {description}
            </div>
            <div>
                {getHeroText(isHero)}
            </div>
        </div>
    )
}

CharacterCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    isHero: PropTypes.bool
}

CharacterCard.defaultProps = {
    description: DEFAULT_DESCRIPTION
}

export default CharacterCard