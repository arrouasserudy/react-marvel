import React from 'react'
import styles from './App.module.css'
import TitleBanner from '../TitleBanner/TitleBanner'
import CardList from '../CardList/CardList'
import SearchBar from '../SearchBar/SearchBar'

class App extends React.Component {
    state = {
        value: ''
    }

    updateValue = (value) => {
        this.setState({value})
    }

    render() {
        const {value} = this.state
        return (
            <div className={styles.container}>
                <TitleBanner />
                <SearchBar updateValue={this.updateValue} value={value}/>
                <CardList value={value}/>
            </div>
        )
    }
}

export default App
