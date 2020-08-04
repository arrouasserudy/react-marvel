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
        const {result} = this.props

        // const filteredList = characters.filter(item => {
        //     const { value } = this.props
        //     const filterName = item.name
        //         .toLowerCase()
        //         .includes(value.toLowerCase())
        //
        //     let filterDescription
        //     if (item.description) {
        //         filterDescription = item.description.toLowerCase()
        //             .includes(value.toLowerCase())
        //     }
        //     return filterName || filterDescription
        // })

        const mapList = result.map(item => (
            <CharacterCard
                key={item.id}
                id={item.id}
                name={item.name}
                thumbnail={item.thumbnail}
                description={item.description}
                setId={this.setId}
                isBig={item.id === selectedId}
                invisible={
                    item.id !== selectedId && selectedId !== null
                }
            />
        ))

        return (
            <div className={styles.container}>
                {mapList}
            </div>
        )
    }
}

export default CardList
