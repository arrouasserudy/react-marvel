import React from 'react';
import styles from './App.module.css';
import characters from "../../utils/characters";
import CharacterCard from "../CharacterCard/CharacterCard"

const App = () => {
  return (
    <div className={styles.container}>
      <h1>Marvel</h1>
      <div className={styles.boxes}>
        {
            characters.map(item =>
                <CharacterCard
                name={item.name}
                description={item.description}
                isHero={item.isHero}
                />
            )
        }
      </div>
    </div>
  );
}

export default App;
