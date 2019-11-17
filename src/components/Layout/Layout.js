import React, {Component} from 'react'
import styles from './Layout.module.css'
import Header from '../Header/Header'

class Layout extends Component {
    render() {
        const { children } = this.props
        return (
            <div className={styles.container} >
                <Header />
                <div className={styles.children}>
                    {children}
                </div>
                <div>Footer</div>
            </div>
        )
    }
}

export default Layout
