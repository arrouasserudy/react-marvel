import React from 'react'
import {connect} from 'react-redux'
import TaskList from '../TaskList/TaskList'
import styles from './TodoList.module.css'
import {getDarkMode} from '../../selectors/settings'
import {setDarkMode} from '../../actions/settings'

class TodoList extends React.Component {
    render() {
        const {dark, setDarkMode} = this.props
        const name = this.props.match.params.name
        const salut = `Salut ${name}`
        const style = {
            backgroundColor: dark ? 'grey' : 'yellow'
        }
        return <div style={style} className={styles.container}>
            {salut}
            <TaskList/>
        </div>
    }
}

// const connect = (params) => {
//     return (component) => {
//         return newComponent
//     }
// }

const mapStateToProps = state => ({
    dark: getDarkMode(state)
})

const mapDispatchToProps = {
    setDarkMode
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
