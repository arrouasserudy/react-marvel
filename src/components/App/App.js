import React from 'react'
import styles from './App.module.css'
import TitleBanner from '../TitleBanner/TitleBanner'
import CardList from '../CardList/CardList'

class App extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            counter: 5,
            gameOver: false
        }
    }

    incremente = () => {
        this.setState(state => ({counter: state.counter + 1}))
    }

    decremente = () => {
        this.setState(state => ({counter: state.counter - 1}), () => {
            if (this.state.counter <= 0) {
                this.setState({gameOver: true})
            }
        })
    }

    render() {
        const {counter, gameOver} = this.state
        return (
            <div className={styles.container}>
                <TitleBanner />
                {/*<CardList />*/}
                {!gameOver && <div className={styles.counterContainer}>
                    <button onClick={this.incremente}>Incrementer</button>
                    <div className={styles.counter}>{counter}</div>
                    <button onClick={this.decremente}>Decrementer</button>
                </div>}
                {gameOver && <button onClick={() => this.setState({gameOver:false, counter: 5})}>Try Again</button>}
            </div>
        )
    }
}

export default App
