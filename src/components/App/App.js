import React from 'react';
import styles from './App.module.css';
import characters from "../../utils/characters";
import CharacterCard from "../CharacterCard/CharacterCard"

// const getHeroText = isHero => `C'est un ${ isHero ? 'hero' : 'vilain'}`

function App() {
  return (
    <div className={styles.container}>
      <h1>Marvel</h1>
      <div className={styles.boxes}>
        <CharacterCard/>
        <CharacterCard/>
      </div>
    </div>
  );
}

export default App;
