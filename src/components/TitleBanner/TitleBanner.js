import React from 'react'
import styles from '../TitleBanner/TitleBanner.module.css'
import marvelImage from '../../assets/marvel-img.png'

class TitleBanner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            timer: 0
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState((prevState) => {
                return {timer: prevState.timer + 1}
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        const {timer} = this.state
        return (
            <div className={styles.container}>
                <img className={styles.image} src={marvelImage} alt="marvel" />
            </div>
        )
    }
}

export default TitleBanner
