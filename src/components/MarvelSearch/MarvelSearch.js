import React from 'react'
import axios from 'axios'
import styles from './MarvelSearch.module.css'
import TitleBanner from '../TitleBanner/TitleBanner'
import CardList from '../CardList/CardList'
import SearchBar from '../SearchBar/SearchBar'
import {findCharacter, findCharacterById} from '../../api/api'
import { Default as Spinner } from 'react-spinners-css';

class MarvelSearch extends React.Component {
    state = {
        value: '',
        result: [],
        loading: false
    }

    updateValue = (value) => {
        this.setState({value})
    }

    search = async () => {
        const {value} = this.state
        this.setState({failed: false})
        // const url = findCharacter(value)
        const url = findCharacter(value)
        let response

        try {
            this.setState({ loading: true })
            response = await axios.get(url)
        }
        catch (error) {
            this.setState({failed: true})
            console.log(error)
            return
        } finally {
            this.setState({loading: false})
        }

        if (response) {
            const data = response.data.data.results
            console.log(data)
            this.setState(
                { result: data }
            )
        }
    }

    render() {
        const {value, result, loading, failed} = this.state
        return (
            <div className={styles.container}>
                <TitleBanner />
                <SearchBar updateValue={this.updateValue} value={value} search={this.search}/>
                {loading && <Spinner color='white' size={100}/>}
                <CardList value={value} result={result}/>
                {failed && <div>NO DATA</div>}
            </div>
        )
    }
}

export default MarvelSearch


