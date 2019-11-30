import React from 'react'
import styles from './FavoriteScreen.module.css'
import CharacterCard from "../CharacterCard/CharacterCard"
import {findCharacterById} from "../../api/marvelAPI"
import axios from "axios"
import {getFavorites} from "../../selectors/cards"
import {connect} from "react-redux"

class FavoriteScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            characters: []
        }
    }

    async componentDidMount() {
        const {favorites} = this.props
        const characters = []
        for await (let id of favorites) {
            const request = findCharacterById(id)
            const response = await axios.get(request)
            const results = response.data.data.results[0]
            console.log(results)
            characters.push(results)
        }
        this.setState({characters})
    }

    render() {
        const {characters} = this.state
        return (
            <div className={styles.container}>
                Favorites
                <div className={styles.list}>
                    {characters
                        .map(item => (
                            <CharacterCard
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                description={item.description}
                                thumbnail={item.thumbnail}
                                fullScreen={null}
                            />
                        ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        favorites: getFavorites(state),
    }
}

export default connect(mapStateToProps)(FavoriteScreen)
