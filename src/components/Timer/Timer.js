import React, {Component} from 'react'

class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            timer: 0
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

    formatNumber = number => number < 10 ? `0${number}`: number

    displayTime = () => {
        const {timer} = this.state
        const seconds = timer % 60
        const minutes = Math.floor(timer / 60) % 60
        const hours = Math.floor(timer / (60 * 60)) % 24
        return `${this.formatNumber(hours)}:${this.formatNumber(minutes)}:${this.formatNumber(seconds)}`
    }

    render() {
        return (
            <div>
                {this.displayTime()}
            </div>
        )
    }
}

export default Timer
