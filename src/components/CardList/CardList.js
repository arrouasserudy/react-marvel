import React, {Component} from 'react'
import styles from '../CardList/CardList.module.css'
import characters from "../../utils/characters"
import CharacterCard from "../CharacterCard/CharacterCard"
import Search from "../Search/Search"

class CardList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fullScreenId: null,
            value: '',
        }
    }

    setFullScreenId = id => {
        this.setState({fullScreenId: id})
    }

    onChange = event => {
        this.setState({value: event.target.value})
    }

    render() {
        const {fullScreenId, value} = this.state
        return (
            <div className={styles.container}>
                <Search value={value} onChange={this.onChange} />
                <div className={styles.list}>
                    {characters
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
