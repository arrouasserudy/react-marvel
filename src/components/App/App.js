import React from 'react';
import styles from './App.module.css';
import characters from "../../utils/characters";

const DEFAULT_DESCRIPTION = 'Un personnage marvel'

const getHeroText = isHero => `C'est un ${ isHero ? 'hero' : 'vilain'}`

function App() {
  return (
    <div className={styles.container}>
      <h1>Marvel</h1>
      <div className={styles.boxes}>
        <div className={styles.box}>
          <div>
            {characters[0].name}
          </div>
          <div>
            {characters[0].description || DEFAULT_DESCRIPTION}
          </div>
          <div>
            {getHeroText(characters[0].isHero)}
          </div>
        </div>
        <div className={styles.box}>
          <div>
            {characters[1].name}
          </div>
          <div>
            {characters[1].description}
          </div>
          <div>
            {getHeroText(characters[1].isHero)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
