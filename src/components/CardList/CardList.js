import React from 'react'
import styles from '../CardList/CardList.module.css'
import characters from '../../utils/characters'
import CharacterCard from '../CharacterCard/CharacterCard'

class CardList extends React.Component {
    state = {
        selectedId: null,
    }

    setId = id => {
        this.setState({ selectedId: id })
    }


    render() {
        const { selectedId } = this.state
        return (
            <div className={styles.container}>
                {characters.map(item => (
                    <CharacterCard
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        description={item.description}
                        isHero={item.isHero}
                        setId={this.setId}
                        isBig={item.id === selectedId}
                        invisible={
                            item.id !== selectedId && selectedId !== null
                        }
                    />
                ))}
            </div>
        )
    }
}

export default CardList
