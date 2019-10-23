import React from 'react'
import styles from "../CharacterCard/CharacterCard.module.css";
import characters from "../../utils/characters";

const DEFAULT_DESCRIPTION = 'Un personnage marvel'

const CharacterCard = () => {
    return (
        <div className={styles.container}>
            <div>
                {characters[0].name}
            </div>
            <div>
                {characters[0].description || DEFAULT_DESCRIPTION}
            </div>
        </div>
    )
}

export default CharacterCard