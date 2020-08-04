import React from 'react'
import { getDarkMode } from '../selectors/settings'
import { getFavorites } from '../selectors/characters'
import { connect } from 'react-redux'
import axios from 'axios'
import { findCharacterById } from '../../api/api'
import CharacterCard from '../CharacterCard/CharacterCard'
import ProgressBar from 'react-bootstrap/ProgressBar'

class FavoriteScreen extends React.Component {
    state = {
        favoritesList: [],
        loading: 0
    }

    async componentDidMount() {
        await this.setAllCards()
    }

    getCard = async id => {
        const { favorites } = this.props
        const url = findCharacterById(id)
        const result = await axios.get(url)
        console.log(`%c ${new Date().toLocaleTimeString()}`,'color: greenyellow;', 'ln.24 - FavoriteScreen.getCard(), result.data.data.results[0]:', result.data.data.results[0])
        return result.data.data.results[0]
    }

    sleep = async (timeout) => {
        return await new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, timeout)
        })
    }

    setAllCards = async () => {
        const { favorites } = this.props
        for (let id of favorites) {
            const card = await this.getCard(id)
            const numToAdd = 100 / favorites.length
            await this.sleep(500)
            this.setState(state => ({favoritesList: [...state.favoritesList, card], loading: state.loading + numToAdd}))
        }
        await this.sleep(2000)
        this.setState({loading: 101})
    }

    render() {
        const { dark } = this.props
        const { favoritesList, loading } = this.state
        const style = {
            backgroundColor: dark ? 'grey' : 'yellow',
        }
        return (
            <div style={{ ...style, height: 800, width: '100%' }}>
                <div style={{width: '100%'}}>
                    {loading <= 100 && <ProgressBar animated now={loading}/>}
                </div>
                {favoritesList.map(item => (
                    <CharacterCard
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        description={item.description}
                        thumbnail={item.thumbnail}
                    />
                ))}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    dark: getDarkMode(state),
    favorites: getFavorites(state),
})

export default connect(mapStateToProps)(FavoriteScreen)
