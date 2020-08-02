import React from 'react'
import { getDarkMode } from '../selectors/settings'
import { setDarkMode } from '../actions/settings'
import { connect } from 'react-redux'

class SettingsScreen extends React.Component {
    render() {
        const { dark, setDarkMode } = this.props
        const style = {
            backgroundColor: dark ? 'grey' : 'yellow',
        }

        return (
            <div style={{ ...style, height: 800, width: '100%' }}>
                <button
                    onClick={() => {
                        setDarkMode(!dark)
                    }}
                >
                    TOGGLE DARK MODE
                </button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    dark: getDarkMode(state),
})

const mapDispatchToProps = {
    setDarkMode,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SettingsScreen)
