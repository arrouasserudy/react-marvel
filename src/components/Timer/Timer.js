import React, {Component} from 'react'

class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            timer: 0,
            show: true,
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(state => ({timer: state.timer + 1}))
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    deactivate = () => {
        clearInterval(this.interval)
        this.setState({show: false})
    }

    formatNumber = number => number < 10 ? `0${number}`: number

    displayTime = () => {
        const {timer} = this.state
        const seconds = timer % 60
        const minutes = Math.floor(timer / 60) % 60
        const hours = Math.floor(timer / (60 * 60)) % 24
        return `${this.formatNumber(hours)}:${this.formatNumber(minutes)}:${this.formatNumber(seconds)}`
    }

    render() {
        const {show} = this.state
        return show ? (
            <div>
                {this.displayTime()}
                <button onClick={this.deactivate}>Desactiver</button>
            </div>
        ) : null
    }
}

export default Timer
