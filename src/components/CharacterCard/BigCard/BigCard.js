import React from 'react'
import PropTypes from 'prop-types'
import styles from './BigCard.module.css'

const DEFAULT_DESCRIPTION = 'Un personnage marvel'



const BigCard = props => {
    const { name, description, isHero, getColor, setId } = props

    const close = () => {
        setId(null)
    }

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={`${styles.image} ${styles[getColor(isHero)]}`}/>
                <div className={styles.name}>{name}</div>
                <div style={{fontSize: 32, margin: 30}} onClick={close}>X</div>
            </div>
            <div className={styles.description}>{description}</div>
        </div>
    )
}

BigCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    isHero: PropTypes.bool,
}

BigCard.defaultProps = {
    description: DEFAULT_DESCRIPTION,
}

export default BigCard
