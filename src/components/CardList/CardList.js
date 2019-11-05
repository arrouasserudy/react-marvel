import React from 'react'
import styles from '../CardList/CardList.module.css'
import characters from "../../utils/characters"
import CharacterCard from "../CharacterCard/CharacterCard"

const CardList = () => {
    return (
        <div className={styles.container}>
            {characters.map(item => (
                <CharacterCard
                    key={item.id}
                    name={item.name}
                    description={item.description}
                    isHero={item.isHero}
                    fullScreen={item.id === 2}
                />
            ))}
        </div>
    )
}

export default CardList
