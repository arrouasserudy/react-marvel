import React, {Component} from 'react'
import styles from '../CardList/CardList.module.css'
import characters from "../../utils/characters"
import CharacterCard from "../CharacterCard/CharacterCard"

class CardList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fullScreenId: null
        }
    }
    render() {
        const {fullScreenId} = this.state
        return (
            <div className={styles.container}>
                {characters.map(item => (
                    <CharacterCard
                        key={item.id}
                        name={item.name}
                        description={item.description}
                        isHero={item.isHero}
                        fullScreen={fullScreenId ? item.id === fullScreenId : null}
                    />
                ))}
            </div>
        )
    }
}

export default CardList
