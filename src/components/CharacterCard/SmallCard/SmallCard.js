import React from 'react'
import PropTypes from 'prop-types'
import styles from './SmallCard.module.css'
import { getImageUrl } from '../../../api/api'

const DEFAULT_DESCRIPTION = 'Un personnage marvel'

const SmallCard = props => {
    const {
        name,
        description = DEFAULT_DESCRIPTION,
        setId,
        id,
        thumbnail,
    } = props

    const setSelected = () => {
        if (setId) {
            setId(id)
        }
    }

    return (
        <div className={styles.container} onClick={setSelected}>
            <div className={styles.top}>
                <div className={`${styles.image}`}>
                    <img src={getImageUrl(thumbnail, 'l')} alt="image" />
                </div>
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
