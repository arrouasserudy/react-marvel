import React from 'react'
import PropTypes from 'prop-types'
import styles from '../CharacterCard/CharacterCard.module.css'

const DEFAULT_DESCRIPTION = 'Un personnage marvel'

const getColor = isHero => {
    if (isHero === true) {
        return 'blue'
    } else if (isHero === false) {
        return  'red'
    }
    return 'grey'
}

const CharacterCard = props => {
    const { name, description, isHero, fullScreen } = props

    return !fullScreen ? (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={`${styles.image} ${styles[getColor(isHero)]}`}/>
                <div className={styles.name}>{name}</div>
            </div>
            <div className={styles.description}>{description}</div>
        </div>
    ) : (
        <div className={styles.fullScreenContainer}>
            <div className={`${styles.fullScreenImage} ${styles[getColor(isHero)]}`}/>
            <div className={styles.fullScreenBody}>
                <div className={styles.name}>{name}</div>
                <div className={styles.description}>{description}</div>
            </div>
            <div className={styles.close}>X</div>
        </div>
    )
}

CharacterCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    isHero: PropTypes.bool,
    fullScreen: PropTypes.bool,
}

CharacterCard.defaultProps = {
    description: DEFAULT_DESCRIPTION,
}

export default CharacterCard
