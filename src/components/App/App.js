import React from 'react';
import styles from './App.module.css';
import characters from "../../utils/characters";
import CharacterCard from "../CharacterCard/CharacterCard"

const App = () => {
  return (
    <div className={styles.container}>
      <h1>Marvel</h1>
      <div className={styles.boxes}>
        <CharacterCard
            name={characters[0].name}
            description={characters[0].description}
            isHero={characters[0].isHero}
        />
        <CharacterCard
          name={characters[1].name}
          description={characters[1].description}
          isHero={characters[1].isHero}
        />
      </div>
    </div>
  );
}

export default App;
