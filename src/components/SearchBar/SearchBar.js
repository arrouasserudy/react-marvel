import React from 'react'
import styles from './SearchBar.module.css'


class SearchBar extends React.Component {
    onChange = event => {
        const {updateValue} = this.props
        updateValue(event.target.value)
    }

    render() {
        const { value } = this.props

        return (
            <div>
                <input value={value} onChange={this.onChange} />
                <button onClick={this.props.search}>SEARCH</button>
            </div>
        )
    }
}

SearchBar.propTypes = {
}

export default SearchBar
