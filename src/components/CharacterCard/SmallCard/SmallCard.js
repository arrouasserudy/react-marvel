import React from 'react'
import PropTypes from 'prop-types'
import styles from './SmallCard.module.css'

const DEFAULT_DESCRIPTION = 'Un personnage marvel'

const SmallCard = props => {
    const { name, description = DEFAULT_DESCRIPTION, isHero, getColor, setId, id } = props

    const setSelected = () => {
        setId(id)
    }

    return (
        <div className={styles.container} onClick={setSelected}>
            <div className={styles.top}>
                <div className={`${styles.image}`}/>
                <div className={styles.name}>{name}</div>
            </div>
            <div className={styles.description}>{description}</div>
        </div>
    )
}

SmallCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    isHero: PropTypes.bool,
}

// SmallCard.defaultProps = {
//     description: DEFAULT_DESCRIPTION,
// }

export default SmallCard
