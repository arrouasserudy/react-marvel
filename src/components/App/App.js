import React from 'react'
import styles from './App.module.css'
import TitleBanner from '../TitleBanner/TitleBanner'
import CardList from '../CardList/CardList'
import Counter from "../Counter/Counter"

class App extends React.Component {
   render() {
        return (
            <div className={styles.container}>
                <TitleBanner />
                {/*<CardList />*/}
                <Counter>
                    My counter
                </Counter>
            </div>
        )
    }
}

export default App
