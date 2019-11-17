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

    render() {
        return (
            <div className={styles.container} onClick={this.onClick}>
                <input
                    ref={this.textInput}
                />
            </div>
        )
    }
}

export default Search
