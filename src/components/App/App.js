import React from 'react';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <h1>Marvel</h1>
      <div className={styles.boxes}>
        <div className={styles.box}>
          <div>
            Title 1
          </div>
          <div>
            body 1
          </div>
        </div>
        <div className={styles.box}>
          <div>
            Title 2
          </div>
          <div>
            body 2
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
