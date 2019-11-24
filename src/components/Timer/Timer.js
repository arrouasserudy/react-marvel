import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getTime} from '../../selectors/timer'
import {setTime} from '../../actions/timer'

class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // timer: 0,
            show: true,
        }
    }

    componentDidMount() {
        const {setTime} = this.props
        this.interval = setInterval(() => {
            // this.setState(state => ({timer: state.timer + 1}))
            setTime(this.props.timer + 1)
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    deactivate = () => {
        clearInterval(this.interval)
        this.setState({show: false})
    }

    formatNumber = number => number < 10 ? `0${number}` : number

    displayTime = () => {
        const {timer} = this.props
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

const mapStateToProps = state => ({
    timer: getTime(state)
})

const mapDispatchToProps = {
    setTime,
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer)
