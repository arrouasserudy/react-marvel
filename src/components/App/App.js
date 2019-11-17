import React from 'react'
import styles from './App.module.css'
import TitleBanner from '../TitleBanner/TitleBanner'
import CardList from '../CardList/CardList'
import Layout from "../Layout/Layout"

class App extends React.Component {
   render() {
        return (
            <Layout>
                <div className={styles.container}>
                    <TitleBanner />
                    <CardList />
                </div>
            </Layout>
        )
    }
}

export default App
