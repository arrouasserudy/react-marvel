import React, {Component} from 'react'
import axios from "axios"
import styles from '../CardList/CardList.module.css'
import CharacterCard from "../CharacterCard/CharacterCard"
import Search from "../Search/Search"
import {findCharacter} from "../../api/marvelAPI"
import { Default } from 'react-spinners-css';

class CardList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fullScreenId: null,
            value: '',
            results: []
        }
    }

    setFullScreenId = id => {
        this.setState({fullScreenId: id})
    }

    onChange = event => {
        this.setState({value: event.target.value})
    }

    onSearch = async () => {
        const {value} = this.state
        if (!value) {
            return
        }
        const request = findCharacter(value)
        this.setState({loading: true})
        const response = await axios.get(request)
        this.setState({loading: false})
        const results = response.data.data.results
        console.log(results)
        this.setState({results})
    }

    render() {
        const {fullScreenId, value, results, loading} = this.state
        return (
            <div className={styles.container}>
                <Search value={value} onChange={this.onChange} onSearch={this.onSearch} />
                {loading && (
                    <div>
                        <Default color='white'/>
                    </div>)}
                <div className={styles.list}>
                    {results
                        .map(item => (
                            <CharacterCard
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                description={item.description}
                                thumbnail={item.thumbnail}
                                fullScreen={fullScreenId ? item.id === fullScreenId : null}
                                setFullScreenId={this.setFullScreenId}
                            />
                    ))}
                </div>
            </div>
        )
    }
}

export default CardList
