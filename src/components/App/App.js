import React from 'react'
import styles from './App.module.css'
import TitleBanner from '../TitleBanner/TitleBanner'
import CardList from '../CardList/CardList'

class App extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
    }

    // Marche
    incremente = () => {
        this.setState({counter: this.state.counter + 1})
    }

    // Ne marche pas
    decremente() {
        this.setState({counter: this.state.counter - 1})
    }

    render() {
        const {counter} = this.state
        return (
            <div className={styles.container}>
                <TitleBanner />
                {/*<CardList />*/}
                <div className={styles.counter}>
                    <button onClick={this.incremente}>Incrementer</button>
                    <div>{counter}</div>
                    <button onClick={this.decremente}>Decrementer</button>
                </div>
            </div>
        )
    }
}

export default App
