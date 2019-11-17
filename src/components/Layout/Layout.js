import React, {Component} from 'react'
import styles from './Layout.module.css'

class Layout extends Component {
    render() {
        const { children } = this.props
        return (
            <div className={styles.container} >
                <div>Header</div>
                {children}
                <div>Footer</div>
            </div>
        )
    }
}

export default Layout
