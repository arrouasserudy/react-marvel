import React from 'react'
import styles from "../CharacterCard/CharacterCard.module.css";
import characters from "../../utils/characters";

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
                {description || DEFAULT_DESCRIPTION}
            </div>
            <div>
                {getHeroText(isHero)}
            </div>
        </div>
    )
}

export default CharacterCard