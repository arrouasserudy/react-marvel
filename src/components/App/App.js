import React from 'react'
import axios from 'axios'
import styles from './App.module.css'
import TitleBanner from '../TitleBanner/TitleBanner'
import CardList from '../CardList/CardList'
import SearchBar from '../SearchBar/SearchBar'
import {findCharacter, findCharacterById} from '../../api/api'

class App extends React.Component {
    state = {
        value: '',
        result: []
    }

    updateValue = (value) => {
        this.setState({value})
    }

    search = async () => {
        const {value} = this.state
        // const url = findCharacter(value)
        const url = findCharacterById(value)
        const response = await axios.get(url)
        if (response) {
            const data = response.data.data.results
            console.log(data)
            this.setState(
                { result: data }
            )
        }
    }

    render() {
        const {value, result} = this.state
        return (
            <div className={styles.container}>
                <TitleBanner />
                <SearchBar updateValue={this.updateValue} value={value} search={this.search}/>
                <CardList value={value} result={result}/>
            </div>
        )
    }
}

export default App
