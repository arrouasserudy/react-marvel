import React from 'react'
import styles from './SearchScreen.module.css'
import TitleBanner from '../TitleBanner/TitleBanner'
import CardList from '../CardList/CardList'

class SearchScreen extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <TitleBanner />
                <CardList />
            </div>
        )
    }
}

export default SearchScreen
