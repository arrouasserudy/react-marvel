import React, {Component} from 'react'
import styles from './Search.module.css'

class Search extends Component {
    render() {
        const {value, onChange} = this.props
        return (
            <div className={styles.container}>
                <input
                    value={value}
                    onChange={onChange}
                    placeholder='Search...'
                />
            </div>
        )
    }
}

export default Search
