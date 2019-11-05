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

    // Ne marche pas
    incremente = () => {
        this.setState({counter: this.state.counter + 1})
        this.setState({counter: this.state.counter + 1})
    }

    // Marche
    decremente = () => {
        this.setState(state => ({counter: state.counter - 1}))
        this.setState(state => ({counter: state.counter - 1}))
    }

    render() {
        const {counter} = this.state
        return (
            <div className={styles.container}>
                <TitleBanner />
                {/*<CardList />*/}
                <div className={styles.counterContainer}>
                    <button onClick={this.incremente}>Incrementer</button>
                    <div className={styles.counter}>{counter}</div>
                    <button onClick={this.decremente}>Decrementer</button>
                </div>
            </div>
        )
    }
}

export default App
