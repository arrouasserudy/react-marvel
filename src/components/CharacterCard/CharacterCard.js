import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from '../CharacterCard/CharacterCard.module.css'
import FullScreenCard from "./FullScreenCard"
import {getImage} from "../../api/marvelAPI"

const DEFAULT_DESCRIPTION = 'Un personnage marvel'

const getColor = isHero => {
    if (isHero === true) {
        return 'blue'
    } else if (isHero === false) {
        return 'red'
    }
    return 'grey'
}

class CharacterCard extends Component {
    state = {
        isOnHover: false
    }

    onMouseEnter = () => {
        this.setState({isOnHover: true})
    }
    onMouseLeave = () => {
        this.setState({isOnHover: false})
    }

    renderFullScreenCard = () => {
        const { isHero } = this.props
        return (
            <FullScreenCard {...this.props} color={getColor(isHero)}/>
        )
    }

    renderCard = () => {
        const { name, description, setFullScreenId, id, thumbnail } = this.props
        const {isOnHover} = this.state
        return (
            <div
                className={`${styles.container} ${isOnHover && styles.onHover}`}
                onClick={() => setFullScreenId(id)}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
            >
                <div className={styles.top}>
                    <img className={styles.image} alt='perso' src={getImage(thumbnail)}/>
                    <div className={styles.name}>{name}</div>
                </div>
                <div className={styles.description}>{description}</div>
            </div>
        )
    }

    render() {
        const { fullScreen } = this.props
        if (fullScreen) {
            return this.renderFullScreenCard()
        } else if (fullScreen === null) {
            return this.renderCard()
        } else {
            return null
        }
    }
}

CharacterCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    thumbnail: PropTypes.object,
    fullScreen: PropTypes.bool,
    setFullScreenId: PropTypes.func,
    id: PropTypes.number,
}

CharacterCard.defaultProps = {
    description: DEFAULT_DESCRIPTION,
}

export default CharacterCard
