import React from 'react'
import styles from './App.module.css'
import TitleBanner from '../TitleBanner/TitleBanner'
import CardList from '../CardList/CardList'

class App extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <TitleBanner />
                <CardList />
            </div>
        )
    }
}

export default App
