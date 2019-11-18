import React, {Component} from 'react'
import axios from "axios"
import styles from '../CardList/CardList.module.css'
import CharacterCard from "../CharacterCard/CharacterCard"
import Search from "../Search/Search"
import {findCharacter} from "../../api/marvelAPI"

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
        const request = findCharacter(value)
        console.log(request)
        const response = await axios.get(request)
        const results = response.data.data.results
        console.log(results)
        this.setState({results})
    }

    render() {
        const {fullScreenId, value, results} = this.state
        return (
            <div className={styles.container}>
                <Search value={value} onChange={this.onChange} onSearch={this.onSearch} />
                <div className={styles.list}>
                    {results
                        .filter(item => item.name.toLowerCase().includes(this.state.value))
                        .map(item => (
                            <CharacterCard
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                description={item.description}
                                isHero={item.isHero}
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
