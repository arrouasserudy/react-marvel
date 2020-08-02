import React from 'react'
import styles from './SearchBar.module.css'


class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }

    componentDidMount() {
        this.inputRef.current.focus()
    }

    onChange = event => {
        const {updateValue} = this.props
        updateValue(event.target.value)
    }

    onClick = () => {
        console.log(this.inputRef.current.value)
    }

    render() {
        const { value, search } = this.props

        return (
            <div>
                <input value={value} onChange={this.onChange} ref={this.inputRef}/>
                <button onClick={search}>SEARCH</button>
            </div>
        )
    }
}

SearchBar.propTypes = {
}

export default SearchBar
