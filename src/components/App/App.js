import React from 'react'
import styles from './App.module.css'
import characters from '../../utils/characters'
import CharacterCard from '../CharacterCard/CharacterCard'
import TitleBanner from '../TitleBanner/TitleBanner'

const App = () => {
    return (
        <div className={styles.container}>
            <TitleBanner />
            <div className={styles.boxes}>
                {characters.map(item => (
                    <CharacterCard
                        key={item.name}
                        name={item.name}
                        description={item.description}
                        isHero={item.isHero}
                    />
                ))}
            </div>
        </div>
    )
}

export default App
