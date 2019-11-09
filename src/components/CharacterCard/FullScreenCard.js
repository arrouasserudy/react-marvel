import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from '../CharacterCard/CharacterCard.module.css'

class FullScreenCard extends Component {
    render() {
        const { name, description, color, setFullScreenId } = this.props

        return (
            <div className={styles.fullScreenContainer}>
                <div
                    className={`${styles.fullScreenImage} ${
                        styles[color]
                    }`}
                />
                <div className={styles.fullScreenBody}>
                    <div className={styles.name}>{name}</div>
                    <div className={styles.description}>{description}</div>
                </div>
                <div
                    className={styles.close}
                    onClick={() => setFullScreenId(null)}
                >
                    X
                </div>
            </div>
        )
    }
}

FullScreenCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    fullScreen: PropTypes.bool,
    setFullScreenId: PropTypes.func,
}


export default FullScreenCard
