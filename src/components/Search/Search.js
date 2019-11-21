import React, {Component} from 'react'
import styles from './Search.module.css'

class Search extends Component {
    constructor(props) {
        super(props)
        this.textInput = React.createRef();
    }

    onClick = () => {
        this.textInput.current.focus()
    }

    onSubmit = e => {
        const {onSearch} = this.props
        e.preventDefault()
        onSearch()
    }

    render() {
        const {onChange, onSearch} = this.props
        return (
            <form onSubmit={this.onSubmit}>
                <div className={styles.container} onClick={this.onClick}>
                        <input
                            ref={this.textInput}
                            onChange={onChange}
                        />
                        <button className={styles.button} >Search</button>
                </div>
            </form>
        )
    }
}

export default Search
